// ============================================================
// GREESHSEC ROADMAP TRACKER — app.js
// ============================================================

const DB_KEY = 'greeshsec_tracker_v2';

// ── State ──────────────────────────────────────────────────
let state = {
  startDate: null,
  tasks: {},       // { taskId: true }
  certs: {},       // { certId: true }
  checkpointsPassed: {}, // { day: true }
  notes: [],       // [{ id, date, dayNum, text }]
  dailyLog: {},    // { 'YYYY-MM-DD': true }
};

// ── Persistence ─────────────────────────────────────────────
function save() {
  localStorage.setItem(DB_KEY, JSON.stringify(state));
}
function load() {
  const raw = localStorage.getItem(DB_KEY);
  if (raw) {
    try {
      const saved = JSON.parse(raw);
      state = { ...state, ...saved };
    } catch(e) {}
  }
}

// ── Date helpers ─────────────────────────────────────────────
function getDayNumber() {
  if (!state.startDate) return 0;
  const start = new Date(state.startDate);
  const now = new Date();
  start.setHours(0,0,0,0); now.setHours(0,0,0,0);
  return Math.floor((now - start) / 86400000) + 1;
}
function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
}
function todayStr() {
  return new Date().toISOString().split('T')[0];
}
function addDays(dateStr, n) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + n);
  return d.toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
}

// ── Task stats ───────────────────────────────────────────────
function getTaskStats() {
  let total = 0, done = 0;
  for (const phase of ROADMAP.phases) {
    for (const block of phase.blocks) {
      for (const task of block.tasks) {
        total++;
        if (state.tasks[task.id]) done++;
      }
    }
  }
  return { total, done };
}
function getPhaseStats(phase) {
  let total = 0, done = 0;
  for (const block of phase.blocks) {
    for (const task of block.tasks) {
      total++;
      if (state.tasks[task.id]) done++;
    }
  }
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  return { total, done, pct };
}

// ── Current phase ────────────────────────────────────────────
function getCurrentPhase() {
  const day = getDayNumber();
  let current = ROADMAP.phases[0];
  for (const phase of ROADMAP.phases) {
    if (day >= phase.dayStart) current = phase;
  }
  return current;
}

// ── Streak ───────────────────────────────────────────────────
function getStreak() {
  const today = todayStr();
  let streak = 0;
  let d = new Date();
  while (true) {
    const key = d.toISOString().split('T')[0];
    if (state.dailyLog[key]) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else {
      break;
    }
  }
  return streak;
}

// ── Render sidebar ───────────────────────────────────────────
function renderSidebar() {
  const day = getDayNumber();
  const { total, done } = getTaskStats();
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  // Percent
  document.getElementById('overall-percent').textContent = pct + '%';
  document.getElementById('ring-tasks').textContent = `${done}/${total}`;
  const circumference = 314.159;
  const offset = circumference - (pct / 100) * circumference;
  document.getElementById('ring-fill').style.strokeDashoffset = offset;

  // Time
  const daysElapsed = state.startDate ? Math.max(0, day - 1) : 0;
  const daysLeft = Math.max(0, 900 - daysElapsed);
  document.getElementById('days-elapsed').textContent = daysElapsed;
  document.getElementById('days-left').textContent = daysLeft;
  if (state.startDate) {
    document.getElementById('eta-date').textContent = addDays(state.startDate, 900);
  }

  // Phase nav
  const phaseNav = document.getElementById('phase-nav');
  phaseNav.innerHTML = '';
  for (const phase of ROADMAP.phases) {
    const { pct: ppct } = getPhaseStats(phase);
    const div = document.createElement('div');
    div.className = 'phase-nav-item';
    div.innerHTML = `
      <span class="pni-icon">${phase.icon}</span>
      <span class="pni-text">Phase ${phase.number}: ${phase.title}</span>
      <span class="pni-pct" style="color:${phase.color}">${ppct}%</span>
    `;
    div.addEventListener('click', () => {
      switchTab('phases');
      setTimeout(() => {
        const el = document.getElementById('phase-' + phase.id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    });
    phaseNav.appendChild(div);
  }

  // Cert sidebar
  const certSidebar = document.getElementById('cert-sidebar');
  certSidebar.innerHTML = '';
  for (const cert of ROADMAP.certifications) {
    const done = !!state.certs[cert.id];
    const div = document.createElement('div');
    div.className = 'cert-item' + (done ? ' done' : '');
    div.innerHTML = `
      <span class="cert-day-badge">D${cert.day}</span>
      <span class="cert-name">${cert.name}</span>
      ${done ? '<span class="cert-done">✓</span>' : ''}
    `;
    certSidebar.appendChild(div);
  }

  // Streak
  const streak = getStreak();
  document.getElementById('streak-num').textContent = streak;
  const logBtn = document.getElementById('log-today-btn');
  const loggedToday = !!state.dailyLog[todayStr()];
  logBtn.textContent = loggedToday ? 'LOGGED TODAY ✓' : 'LOG TODAY ✓';
  logBtn.className = 'btn-log' + (loggedToday ? ' logged' : '');

  // Streak grid (last 49 days)
  const grid = document.getElementById('streak-grid');
  grid.innerHTML = '';
  const today = new Date();
  for (let i = 48; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split('T')[0];
    const cell = document.createElement('div');
    cell.className = 'streak-cell' +
      (state.dailyLog[key] ? ' logged' : '') +
      (key === todayStr() ? ' today' : '');
    cell.title = key;
    grid.appendChild(cell);
  }
}

// ── Nav day display ──────────────────────────────────────────
function renderNavDay() {
  const day = getDayNumber();
  document.getElementById('current-day-num').textContent = state.startDate ? day : '—';
}

// ── Dashboard ────────────────────────────────────────────────
function renderDashboard() {
  renderCurrentPhaseCard();
  renderCheckpointCards();
  renderCertTimeline();
}

function renderCurrentPhaseCard() {
  const phase = getCurrentPhase();
  const { done, total, pct } = getPhaseStats(phase);
  const container = document.getElementById('current-phase-card');
  container.innerHTML = `
    <div class="current-phase-card" style="--phase-color:${phase.color}">
      <div class="cpc-header">
        <div class="cpc-icon">${phase.icon}</div>
        <div class="cpc-meta">
          <div class="cpc-phase-num">PHASE ${phase.number} OF 8</div>
          <div class="cpc-title">${phase.title}</div>
          <div class="cpc-days">${phase.days}</div>
        </div>
      </div>
      <div class="cpc-goal">${phase.goal}</div>
      <div class="cpc-progress-bar">
        <div class="cpc-progress-fill" style="width:${pct}%; background:${phase.color}"></div>
      </div>
      <div class="cpc-progress-label">${done}/${total} tasks complete — ${pct}%</div>
    </div>
  `;
}

function renderCheckpointCards() {
  const day = getDayNumber();
  const container = document.getElementById('checkpoint-cards');
  container.innerHTML = '<div class="checkpoint-grid"></div>';
  const grid = container.querySelector('.checkpoint-grid');

  const upcoming = ROADMAP.checkpoints
    .filter(cp => !state.checkpointsPassed[cp.day])
    .slice(0, 4);

  if (upcoming.length === 0) {
    grid.innerHTML = '<div style="color:var(--accent);padding:1rem">🎉 All checkpoints passed. You are in the 1%.</div>';
    return;
  }

  for (const cp of upcoming) {
    const isPast = day > cp.day;
    const isCurrent = day >= cp.day - 30 && day <= cp.day + 30;
    const div = document.createElement('div');
    div.className = 'cp-card ' + (isPast ? 'passed' : isCurrent ? 'active-cp' : 'future');
    const statusLabel = isPast ? '<span class="cp-status pass">SHOULD BE DONE</span>'
      : isCurrent ? '<span class="cp-status current">APPROACHING</span>'
      : '<span class="cp-status upcoming">UPCOMING</span>';
    div.innerHTML = `
      <div class="cp-card-day">DAY ${cp.day}</div>
      <div class="cp-card-title">${cp.title}</div>
      ${statusLabel}
      <div class="cp-toggle" data-cp="${cp.day}">▼ View questions</div>
    `;
    div.querySelector('.cp-toggle').addEventListener('click', () => showCheckpointModal(cp));
    grid.appendChild(div);
  }
}

function showCheckpointModal(cp) {
  const day = getDayNumber();
  const modal = document.getElementById('checkpoint-modal');
  document.getElementById('cp-label').textContent = `// DAY ${cp.day} CHECKPOINT`;
  document.getElementById('cp-title').textContent = cp.title;
  const qContainer = document.getElementById('cp-questions');
  qContainer.innerHTML = cp.questions.map(q =>
    `<div class="cp-question"><span class="cp-q-icon">→</span><span>${q}</span></div>`
  ).join('');
  modal.classList.remove('hidden');
}

function renderCertTimeline() {
  const container = document.getElementById('cert-timeline');
  const day = getDayNumber();
  container.innerHTML = '<div class="cert-timeline-grid"></div>';
  const grid = container.querySelector('.cert-timeline-grid');

  ROADMAP.certifications.forEach((cert, i) => {
    const isDone = !!state.certs[cert.id];
    const isNext = !isDone && ROADMAP.certifications.slice(0, i).every(c => state.certs[c.id]);
    const isLast = i === ROADMAP.certifications.length - 1;

    const div = document.createElement('div');
    div.className = 'ct-item ' + (isDone ? 'done' : isNext ? 'next-up' : '') + (isLast ? ' ct-last' : '');
    div.innerHTML = `
      <div class="ct-day">Day ${cert.day}</div>
      <div class="ct-line-col">
        <div class="ct-dot"></div>
        <div class="ct-connector"></div>
      </div>
      <div class="ct-info">
        <div class="ct-name">${cert.name}</div>
        <div class="ct-meta">
          <span class="ct-cost">${cert.cost}</span>
          <span class="ct-priority ${cert.priority}">${cert.priority}</span>
        </div>
        <button class="cert-done-btn ${isDone ? 'earned' : ''}" data-cert="${cert.id}">
          ${isDone ? '✓ EARNED' : 'MARK AS EARNED'}
        </button>
      </div>
    `;
    div.querySelector('.cert-done-btn').addEventListener('click', (e) => {
      if (!state.certs[cert.id]) {
        state.certs[cert.id] = true;
        save();
        renderAll();
      }
    });
    grid.appendChild(div);
  });
}

// ── Phases tab ───────────────────────────────────────────────
function renderPhases() {
  const container = document.getElementById('phases-container');
  container.innerHTML = '';

  ROADMAP.phases.forEach((phase, pi) => {
    const { done, total, pct } = getPhaseStats(phase);
    const div = document.createElement('div');
    div.className = 'phase-block';
    div.id = 'phase-' + phase.id;
    div.style.setProperty('--phase-color', phase.color);
    div.style.animationDelay = (pi * 0.05) + 's';

    const blocksHtml = phase.blocks.map(block => {
      const tasksHtml = block.tasks.map(task => {
        const isDone = !!state.tasks[task.id];
        const badge = getBadge(task.type);
        return `
          <div class="task-item ${isDone ? 'done' : ''}" data-task="${task.id}">
            <div class="task-cb"><span class="task-cb-check">✓</span></div>
            <span class="task-text">${task.text}</span>
            ${badge}
          </div>
        `;
      }).join('');
      return `
        <div class="block-group">
          <div class="block-title">${block.title}</div>
          ${tasksHtml}
        </div>
      `;
    }).join('');

    div.innerHTML = `
      <div class="phase-header" data-phase="${phase.id}">
        <div class="ph-icon">${phase.icon}</div>
        <div class="ph-meta">
          <div class="ph-num">PHASE ${phase.number}</div>
          <div class="ph-title">${phase.title}</div>
          <div class="ph-days">${phase.days}</div>
        </div>
        <div class="ph-right">
          <div class="ph-pct" style="color:${phase.color}">${pct}%</div>
          <div class="ph-tasks-count">${done}/${total} tasks</div>
        </div>
        <div class="ph-toggle">▼</div>
      </div>
      <div class="phase-progress">
        <div class="phase-progress-fill" style="width:${pct}%; background:${phase.color}"></div>
      </div>
      <div class="phase-body" id="body-${phase.id}">
        <div class="phase-goal">${phase.goal}</div>
        <div class="phase-warning">⚠️ ${phase.warning}</div>
        ${blocksHtml}
      </div>
    `;

    // Toggle open/close
    div.querySelector('.phase-header').addEventListener('click', () => {
      const body = document.getElementById('body-' + phase.id);
      const toggle = div.querySelector('.ph-toggle');
      body.classList.toggle('open');
      toggle.classList.toggle('open');
    });

    // Task checkboxes
    div.querySelectorAll('.task-item').forEach(taskEl => {
      taskEl.addEventListener('click', () => {
        const id = taskEl.dataset.task;
        if (state.tasks[id]) {
          delete state.tasks[id];
        } else {
          state.tasks[id] = true;
        }
        save();
        renderAll();
      });
    });

    container.appendChild(div);
  });

  // Auto-open current phase
  const current = getCurrentPhase();
  const body = document.getElementById('body-' + current.id);
  const toggle = document.querySelector('#phase-' + current.id + ' .ph-toggle');
  if (body) { body.classList.add('open'); }
  if (toggle) { toggle.classList.add('open'); }
}

function getBadge(type) {
  const map = {
    milestone: ['MILESTONE', 'milestone'],
    project: ['PROJECT', 'project'],
    platform: ['PLATFORM', 'platform'],
    ctf: ['CTF', 'ctf'],
    cert: ['CERT', 'cert'],
    lab: ['LAB', 'lab'],
    setup: ['SETUP', 'setup'],
    apply: ['APPLY', 'apply'],
    resource: ['', ''],
    learn: ['', ''],
    practice: ['', ''],
    community: ['', ''],
    mindset: ['', ''],
  };
  const [label, cls] = map[type] || ['', ''];
  if (!label) return '';
  return `<span class="task-badge badge-${cls}">${label}</span>`;
}

// ── Checkpoints tab ──────────────────────────────────────────
function renderCheckpoints() {
  const container = document.getElementById('checkpoints-container');
  const day = getDayNumber();
  container.innerHTML = '<div class="checkpoint-full-grid"></div>';
  const grid = container.querySelector('.checkpoint-full-grid');

  for (const cp of ROADMAP.checkpoints) {
    const isPast = day > cp.day;
    const isCurrent = day >= cp.day - 30 && day <= cp.day;
    const isPassed = !!state.checkpointsPassed[cp.day];

    const div = document.createElement('div');
    div.className = 'cp-full-card ' + (isPassed ? 'passed' : isCurrent ? 'active-cp' : '');

    const statusText = isPassed ? 'PASSED ✓' : isPast ? 'OVERDUE — ASSESS YOURSELF' : isCurrent ? 'APPROACHING' : 'LOCKED';
    const statusCls = isPassed ? 'pass' : isCurrent ? 'current' : 'future';

    const questionsHtml = cp.questions.map(q =>
      `<div class="cpf-q">
        <span class="cpf-q-icon">→</span>
        <span>${q}</span>
      </div>`
    ).join('');

    const btnCls = isPassed ? 'marked' : (!isPast && !isCurrent) ? 'future-btn' : '';
    const btnText = isPassed ? '✓ CHECKPOINT PASSED' : 'MARK AS PASSED';

    div.innerHTML = `
      <div class="cpf-day">DAY ${cp.day}</div>
      <div class="cpf-title">${cp.title}</div>
      <div class="cpf-status ${statusCls}">${statusText}</div>
      <div class="cpf-questions">${questionsHtml}</div>
      <button class="cp-mark-btn ${btnCls}" data-cp="${cp.day}">${btnText}</button>
    `;

    const btn = div.querySelector('.cp-mark-btn');
    if (!isPassed && (isPast || isCurrent)) {
      btn.addEventListener('click', () => {
        state.checkpointsPassed[cp.day] = true;
        save();
        renderAll();
      });
    }

    grid.appendChild(div);
  }
}

// ── Notes tab ────────────────────────────────────────────────
function renderNotes(filter = '') {
  const container = document.getElementById('notes-container');
  container.innerHTML = '';

  let notes = [...state.notes].reverse();
  if (filter) {
    notes = notes.filter(n => n.text.toLowerCase().includes(filter.toLowerCase()));
  }

  if (notes.length === 0) {
    container.innerHTML = `<div class="notes-empty">No logs yet. Hit "ADD TODAY'S LOG" and document what you did. Consistency is evidence.</div>`;
    return;
  }

  for (const note of notes) {
    const div = document.createElement('div');
    div.className = 'note-card';
    div.innerHTML = `
      <div class="note-header">
        <span class="note-day">Day ${note.dayNum || '—'}</span>
        <span class="note-date">${note.date}</span>
        <button class="note-delete" data-id="${note.id}">✕</button>
      </div>
      <div class="note-text">${escapeHtml(note.text)}</div>
    `;
    div.querySelector('.note-delete').addEventListener('click', () => {
      state.notes = state.notes.filter(n => n.id !== note.id);
      save();
      renderNotes(document.getElementById('notes-search').value);
    });
    container.appendChild(div);
  }
}

function showAddNoteForm() {
  const container = document.getElementById('notes-container');
  if (container.querySelector('.note-add-form')) return;

  const form = document.createElement('div');
  form.className = 'note-add-form';
  form.innerHTML = `
    <textarea placeholder="What did you learn today? What broke? What did you fix? Be specific. Specificity is proof."></textarea>
    <div class="note-form-actions">
      <button class="btn-primary" id="save-note-btn">SAVE LOG</button>
      <button class="btn-secondary" id="cancel-note-btn">CANCEL</button>
    </div>
  `;
  container.insertBefore(form, container.firstChild);

  form.querySelector('#save-note-btn').addEventListener('click', () => {
    const text = form.querySelector('textarea').value.trim();
    if (!text) return;
    const note = {
      id: Date.now().toString(),
      date: formatDate(todayStr()),
      dayNum: getDayNumber(),
      text
    };
    state.notes.push(note);
    save();
    renderNotes();
  });
  form.querySelector('#cancel-note-btn').addEventListener('click', () => {
    form.remove();
  });
  form.querySelector('textarea').focus();
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── Tab switching ────────────────────────────────────────────
function switchTab(name) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.querySelector(`.tab-btn[data-tab="${name}"]`).classList.add('active');
  if (name === 'phases') renderPhases();
  if (name === 'checkpoints') renderCheckpoints();
  if (name === 'notes') renderNotes();
  if (name === 'dashboard') renderDashboard();
}

// ── Full render ──────────────────────────────────────────────
function renderAll() {
  renderNavDay();
  renderSidebar();
  // Only re-render active tab
  const active = document.querySelector('.tab-content.active');
  if (!active) return;
  const id = active.id.replace('tab-', '');
  if (id === 'dashboard') renderDashboard();
  if (id === 'phases') renderPhases();
  if (id === 'checkpoints') renderCheckpoints();
  if (id === 'notes') renderNotes(document.getElementById('notes-search')?.value || '');
}

// ── Setup modal ──────────────────────────────────────────────
function showSetupModal() {
  document.getElementById('setup-modal').classList.remove('hidden');
  const inp = document.getElementById('start-date-input');
  inp.value = todayStr();
}
function hideSetupModal() {
  document.getElementById('setup-modal').classList.add('hidden');
}

// ── Boot ─────────────────────────────────────────────────────
function init() {
  load();

  // After boot animation
  setTimeout(() => {
    if (!state.startDate) {
      showSetupModal();
    } else {
      renderAll();
    }
  }, 3100);

  // Tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Set start date
  document.getElementById('set-start-btn').addEventListener('click', () => {
    const val = document.getElementById('start-date-input').value;
    if (!val) return;
    state.startDate = val;
    save();
    hideSetupModal();
    renderAll();
  });

  // Reset
  document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('reset-modal').classList.remove('hidden');
  });
  document.getElementById('confirm-reset-btn').addEventListener('click', () => {
    state = { startDate: null, tasks: {}, certs: {}, checkpointsPassed: {}, notes: [], dailyLog: {} };
    save();
    document.getElementById('reset-modal').classList.add('hidden');
    showSetupModal();
  });
  document.getElementById('cancel-reset-btn').addEventListener('click', () => {
    document.getElementById('reset-modal').classList.add('hidden');
  });

  // Change date
  document.getElementById('change-date-btn').addEventListener('click', () => showSetupModal());

  // Close checkpoint modal
  document.getElementById('cp-close-btn').addEventListener('click', () => {
    document.getElementById('checkpoint-modal').classList.add('hidden');
  });

  // Daily log button
  document.getElementById('log-today-btn').addEventListener('click', () => {
    const today = todayStr();
    if (!state.dailyLog[today]) {
      state.dailyLog[today] = true;
      save();
      renderSidebar();
    }
  });

  // Add note
  document.getElementById('add-note-btn').addEventListener('click', showAddNoteForm);

  // Notes search
  document.getElementById('notes-search').addEventListener('input', (e) => {
    renderNotes(e.target.value);
  });

  // Dashboard initial render (happens after boot)
}

init();

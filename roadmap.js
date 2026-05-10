const ROADMAP = {
  meta: {
    title: "Purple Team Cybersecurity Roadmap",
    subtitle: "Fresher → Top 1% | 900 Days",
    totalDays: 900,
    startKey: "roadmap_start_date"
  },
  certifications: [
    { id: "cert1", day: 160, name: "CompTIA Network+ or Security+", cost: "$370", priority: "CRITICAL" },
    { id: "cert2", day: 290, name: "eJPT", cost: "$200", priority: "CRITICAL" },
    { id: "cert3", day: 440, name: "CompTIA CySA+", cost: "$370", priority: "HIGH" },
    { id: "cert4", day: 600, name: "GCP Associate Cloud Engineer", cost: "$200", priority: "HIGH" },
    { id: "cert5", day: 700, name: "GCP Professional Cloud Security Engineer", cost: "$200", priority: "HIGH" },
    { id: "cert6", day: 800, name: "OSCP (start studying Day 700)", cost: "$1499", priority: "CAREER-DEFINING" }
  ],
  checkpoints: [
    {
      day: 90,
      title: "Quit Check",
      questions: [
        "Can you explain subnetting without notes?",
        "Can you explain TCP handshake confidently?",
        "Can you navigate Linux permissions without Google?"
      ]
    },
    {
      day: 180,
      title: "Cert Check",
      questions: [
        "Do you have at least one certification?",
        "Have you booked your next exam?"
      ]
    },
    {
      day: 300,
      title: "Portfolio Check",
      questions: [
        "Is your GitHub active with real projects?",
        "Do you have 5+ CTF writeups published?",
        "Are all 4 Python scripts complete and documented?"
      ]
    },
    {
      day: 500,
      title: "Relevance Check",
      questions: [
        "Are people engaging with your LinkedIn posts?",
        "Has anyone in the security community responded to your writeups?",
        "Have you submitted at least one bug bounty report?"
      ]
    },
    {
      day: 700,
      title: "Reality Check",
      questions: [
        "Can you explain a Purple Team exercise in an interview?",
        "Can you walk through your SOC lab architecture?",
        "Can you describe a cloud attack you executed AND detected?",
        "Can you explain every line of your Python scripts?"
      ]
    },
    {
      day: 900,
      title: "Final Check",
      questions: [
        "Do you have 5–6 certifications including OSCP?",
        "Do you have 100+ CTF challenges documented?",
        "Is your blog live with 50+ technical posts?",
        "Do you have at least one paid bug bounty submission?"
      ]
    }
  ],
  phases: [
    {
      id: "phase0",
      number: 0,
      title: "Mindset Installation",
      days: "Day 0–14",
      dayStart: 0,
      dayEnd: 14,
      color: "#00ff9d",
      icon: "🧠",
      goal: "Build the system that keeps you going when motivation dies. Every roadmap skips this phase. Everyone who skips it quits.",
      warning: "If you skip this phase: You will quit by Day 90. Guaranteed.",
      blocks: [
        {
          id: "p0b1",
          title: "Setup Public Presence",
          tasks: [
            { id: "t001", text: "Create GitHub account and set up profile README", type: "setup" },
            { id: "t002", text: "Push your first repository (even if it's just a hello world)", type: "setup" },
            { id: "t003", text: "Set up blog (GitHub Pages or Hashnode — free)", type: "setup" },
            { id: "t004", text: "Create TryHackMe account and join learning paths", type: "setup" },
            { id: "t005", text: "Create HackTheBox account", type: "setup" },
            { id: "t006", text: "Create LinkedIn and write Day 1 post about your journey", type: "setup" },
            { id: "t007", text: "Join HackerOne and Bugcrowd (for future use)", type: "setup" }
          ]
        },
        {
          id: "p0b2",
          title: "Communities",
          tasks: [
            { id: "t008", text: "Join TryHackMe official Discord", type: "community" },
            { id: "t009", text: "Join HackTheBox official Discord", type: "community" },
            { id: "t010", text: "Subscribe: r/netsec, r/AskNetsec, r/cybersecurity on Reddit", type: "community" },
            { id: "t011", text: "Follow 10 security professionals on LinkedIn", type: "community" }
          ]
        },
        {
          id: "p0b3",
          title: "Tracking System",
          tasks: [
            { id: "t012", text: "Create a daily log (spreadsheet or Notion) tracking: hours, learned, broke, fixed", type: "setup" },
            { id: "t013", text: "Set a recurring calendar reminder: 3 hours study daily", type: "setup" },
            { id: "t014", text: "Read the Ground Truth section of this roadmap. Screenshot it. Put it on your wall.", type: "mindset" }
          ]
        }
      ]
    },
    {
      id: "phase1",
      number: 1,
      title: "System Foundation",
      days: "Day 15–150",
      dayStart: 15,
      dayEnd: 150,
      color: "#00d4ff",
      icon: "⚙️",
      goal: "Understand computers at a level 95% of IT people don't. AI can use tools. AI cannot think through a novel system failure. You need to be able to do that.",
      warning: "This is the hardest phase mentally because nothing feels exciting. Push through. This is where most people quit and why you won't.",
      blocks: [
        {
          id: "p1b1",
          title: "Block 1A — Networking (Day 15–60)",
          tasks: [
            { id: "t101", text: "Learn binary and hexadecimal — read raw packet data", type: "learn" },
            { id: "t102", text: "Study OSI model — trace where each layer fails (not memorization)", type: "learn" },
            { id: "t103", text: "Master IP addressing and subnetting — calculate by hand until automatic", type: "learn" },
            { id: "t104", text: "Capture TCP AND UDP traffic in Wireshark — see the visual difference", type: "lab" },
            { id: "t105", text: "Trace full DNS recursive resolution in Wireshark", type: "lab" },
            { id: "t106", text: "Read actual HTTP vs HTTPS headers in Wireshark", type: "lab" },
            { id: "t107", text: "Understand ARP and why ARP spoofing works", type: "learn" },
            { id: "t108", text: "Study routing basics — how packets travel across networks", type: "learn" },
            { id: "t109", text: "Complete Professor Messer Network+ series (YouTube)", type: "resource" },
            { id: "t110", text: "Daily subnetting practice at subnettingpractice.com", type: "practice" },
            { id: "t111", text: "VirtualBox installed + Kali VM + Ubuntu Server VM running", type: "lab" },
            { id: "t112", text: "Both VMs connected on internal network", type: "lab" },
            { id: "t113", text: "[MILESTONE] Explain TCP 3-way handshake without notes", type: "milestone" },
            { id: "t114", text: "[MILESTONE] Subnet /24 into 8 subnets in under 2 minutes", type: "milestone" },
            { id: "t115", text: "[MILESTONE] Capture DNS query and explain every field", type: "milestone" },
            { id: "t116", text: "[MILESTONE] Explain why HTTPS prevents what you see in HTTP captures", type: "milestone" }
          ]
        },
        {
          id: "p1b2",
          title: "Block 1B — Linux (Day 61–110)",
          tasks: [
            { id: "t117", text: "Learn file system hierarchy — know where everything lives and why", type: "learn" },
            { id: "t118", text: "Master permissions — chmod, chown, SUID bits, privilege escalation relevance", type: "learn" },
            { id: "t119", text: "Users and groups — how privilege separation works", type: "learn" },
            { id: "t120", text: "Process management — ps, top, kill (critical for incident response)", type: "learn" },
            { id: "t121", text: "Networking commands — netstat, ss, ip, ping, traceroute", type: "learn" },
            { id: "t122", text: "Log files — /var/log/, journalctl, understand what each log tells you", type: "learn" },
            { id: "t123", text: "Text processing — grep, awk, sed, cut (your automation foundation)", type: "learn" },
            { id: "t124", text: "Bash scripting — loops, conditions, functions", type: "learn" },
            { id: "t125", text: "Cron jobs — attackers use these for persistence. Know them.", type: "learn" },
            { id: "t126", text: "SSH — key-based auth, config files, tunneling basics", type: "learn" },
            { id: "t127", text: "Complete OverTheWire: Bandit — ALL 34 levels (mandatory)", type: "platform" },
            { id: "t128", text: "Complete TryHackMe Linux Fundamentals Parts 1, 2, and 3", type: "platform" },
            { id: "t129", text: "SSH key auth configured between your two VMs", type: "lab" },
            { id: "t130", text: "[MILESTONE] Navigate entire system and read logs without Google", type: "milestone" },
            { id: "t131", text: "[MILESTONE] Write bash script: parse auth.log, output failed logins with IP + timestamp", type: "milestone" },
            { id: "t132", text: "[MILESTONE] Explain SUID and why it is a privilege escalation vector", type: "milestone" }
          ]
        },
        {
          id: "p1b3",
          title: "Block 1C — Python for Security (Day 111–150)",
          tasks: [
            { id: "t133", text: "File I/O and string manipulation", type: "learn" },
            { id: "t134", text: "Regular expressions — critical for log parsing", type: "learn" },
            { id: "t135", text: "subprocess module — running system commands from Python", type: "learn" },
            { id: "t136", text: "socket module — basic network programming (foundation for scanner)", type: "learn" },
            { id: "t137", text: "requests library — HTTP automation", type: "learn" },
            { id: "t138", text: "argparse — making proper CLI tools", type: "learn" },
            { id: "t139", text: "Working with JSON and CSV data", type: "learn" },
            { id: "t140", text: "[SCRIPT 1] Log parser: reads auth.log, flags IPs over threshold, push to GitHub", type: "project" },
            { id: "t141", text: "[SCRIPT 2] Port scanner from scratch using sockets — understand what Nmap actually does", type: "project" },
            { id: "t142", text: "[SCRIPT 3] File hasher: MD5/SHA256 of every file in a directory (integrity checker)", type: "project" },
            { id: "t143", text: "[SCRIPT 4] HTTP header grabber: fetches and prints security headers from URL list", type: "project" },
            { id: "t144", text: "All 4 scripts documented with README and pushed to GitHub", type: "milestone" },
            { id: "t145", text: "[MILESTONE] Write a basic security script from scratch without copying Stack Overflow", type: "milestone" }
          ]
        }
      ]
    },
    {
      id: "phase2",
      number: 2,
      title: "Offensive Security",
      days: "Day 151–300",
      dayStart: 151,
      dayEnd: 300,
      color: "#ff4444",
      icon: "⚔️",
      goal: "Understand exactly how systems are broken so you can defend them. You are not learning to hack people. You are learning attack mechanics so your defenses in Phase 3 are built on reality.",
      warning: "Skipping offensive knowledge and going straight to defense means you are guessing. You will build detections for attacks you have never seen. That is useless.",
      blocks: [
        {
          id: "p2b1",
          title: "Block 2A — Recon and Scanning (Day 151–190)",
          tasks: [
            { id: "t201", text: "Nmap — every flag at packet level. SYN vs connect vs UDP scan in Wireshark simultaneously", type: "learn" },
            { id: "t202", text: "theHarvester — passive OSINT", type: "learn" },
            { id: "t203", text: "Shodan — understanding internet-exposed attack surface", type: "learn" },
            { id: "t204", text: "Whois, dig, nslookup — DNS enumeration", type: "learn" },
            { id: "t205", text: "TryHackMe: Intro to Networking room", type: "platform" },
            { id: "t206", text: "TryHackMe: Nmap room", type: "platform" },
            { id: "t207", text: "TryHackMe: Network Services 1 and 2", type: "platform" },
            { id: "t208", text: "TryHackMe: OWASP Top 10 room", type: "platform" },
            { id: "t209", text: "Scan your lab network with Nmap + capture in Wireshark simultaneously", type: "lab" },
            { id: "t210", text: "Write professional report: open ports, services, risks for each", type: "project" }
          ]
        },
        {
          id: "p2b2",
          title: "Block 2B — Exploitation Basics (Day 191–250)",
          tasks: [
            { id: "t211", text: "Metasploit — understand what exploits DO, not just firing them", type: "learn" },
            { id: "t212", text: "OWASP Top 10 web vulnerabilities: SQLi, XSS, IDOR, broken auth", type: "learn" },
            { id: "t213", text: "Password attacks — hashcat, john, rainbow tables, why salting matters", type: "learn" },
            { id: "t214", text: "File inclusion vulnerabilities — LFI and RFI", type: "learn" },
            { id: "t215", text: "Basic buffer overflow concept — understand the mechanism", type: "learn" },
            { id: "t216", text: "Deploy DVWA (Damn Vulnerable Web App) in your lab", type: "lab" },
            { id: "t217", text: "Deploy Metasploitable 2 in your lab as target machine", type: "lab" },
            { id: "t218", text: "Complete TryHackMe Jr Penetration Tester path (entire path)", type: "platform" },
            { id: "t219", text: "Complete PortSwigger Web Security Academy — SQLi module", type: "platform" },
            { id: "t220", text: "Complete PortSwigger Web Security Academy — XSS module", type: "platform" },
            { id: "t221", text: "Complete PortSwigger Web Security Academy — Auth module", type: "platform" },
            { id: "t222", text: "HTB: Complete 5 retired Easy machines with full writeups published on blog", type: "platform" }
          ]
        },
        {
          id: "p2b3",
          title: "Block 2C — CTF Integration (Day 151–300, ongoing)",
          tasks: [
            { id: "t223", text: "Complete PicoCTF beginner challenges (start here)", type: "ctf" },
            { id: "t224", text: "Minimum 1 CTF challenge per week — document every single one", type: "ctf" },
            { id: "t225", text: "TryHackMe CTF rooms", type: "ctf" },
            { id: "t226", text: "HackTheBox Starting Point — guided machines", type: "ctf" },
            { id: "t227", text: "HackTheBox Easy machines — minimum 5 completed", type: "ctf" },
            { id: "t228", text: "Join CTFtime.org team event (around Day 250)", type: "ctf" },
            { id: "t229", text: "All writeups published on blog with timestamps", type: "project" }
          ]
        },
        {
          id: "p2b4",
          title: "Block 2D — Bug Bounty Introduction (Day 260–300)",
          tasks: [
            { id: "t230", text: "Read 50 disclosed bug bounty reports on HackerOne (free)", type: "learn" },
            { id: "t231", text: "Pick one program with wide scope on Bugcrowd", type: "practice" },
            { id: "t232", text: "2 weeks of recon only — subdomains, tech stack identification", type: "practice" },
            { id: "t233", text: "Submit first report (even low severity counts as portfolio proof)", type: "milestone" },
            { id: "t234", text: "Complete PortSwigger Web Security Academy SSRF module", type: "platform" },
            { id: "t235", text: "Complete PortSwigger Web Security Academy XXE module", type: "platform" }
          ]
        },
        {
          id: "p2b5",
          title: "Threat Intel Upgrade (Day 280–300)",
          tasks: [
            { id: "t236", text: "[SCRIPT 5] VirusTotal API script: takes file hash, returns threat intel report", type: "project" },
            { id: "t237", text: "[SCRIPT 6] AlienVault OTX script: pull IOCs for a given domain or IP", type: "project" },
            { id: "t238", text: "Understand what the API returns — don't just display it, analyse it", type: "learn" },
            { id: "t239", text: "Document: where does this data come from? What are its limitations?", type: "project" }
          ]
        }
      ]
    },
    {
      id: "phase3",
      number: 3,
      title: "Defensive Security + Log Thinking",
      days: "Day 301–450",
      dayStart: 301,
      dayEnd: 450,
      color: "#00ff9d",
      icon: "🛡️",
      goal: "Think like a defender with attacker knowledge. This combination IS Purple Team. Most red teamers can't read logs. Most blue teamers don't understand what attacks look like before they hit logs. You will understand both.",
      warning: "This phase is where most people get boring and quit. Push through. The SOC lab you build here is worth more than any certification on your resume.",
      blocks: [
        {
          id: "p3b1",
          title: "Block 3A — Log Analysis (Day 301–350)",
          tasks: [
            { id: "t301", text: "Linux auth logs — /var/log/auth.log deep analysis", type: "learn" },
            { id: "t302", text: "Windows Event Logs — 4624, 4625, 4688, 4720 (know these by number)", type: "learn" },
            { id: "t303", text: "Web server logs — Apache/Nginx access and error logs", type: "learn" },
            { id: "t304", text: "Firewall logs — what gets logged, what doesn't", type: "learn" },
            { id: "t305", text: "DNS query logs — detecting DNS tunneling and exfil", type: "learn" },
            { id: "t306", text: "Deploy ELK Stack (Elastic + Logstash + Kibana) in your lab", type: "lab" },
            { id: "t307", text: "Deploy Wazuh manager on Ubuntu VM", type: "lab" },
            { id: "t308", text: "Deploy Splunk Free and learn SPL query language basics", type: "lab" },
            { id: "t309", text: "Purple Team Exercise 1: Run brute force → find EXACT log evidence → document", type: "lab" },
            { id: "t310", text: "Purple Team Exercise 2: Run Nmap scan → find in IDS logs → document", type: "lab" },
            { id: "t311", text: "Purple Team Exercise 3: Exploit DVWA → find web logs → document", type: "lab" },
            { id: "t312", text: "Tag every attack-detection pair with MITRE ATT&CK technique ID", type: "project" },
            { id: "t313", text: "Push all attack-detection pairs to GitHub", type: "project" }
          ]
        },
        {
          id: "p3b2",
          title: "Block 3B — SOC Lab Build (Day 351–400)",
          tasks: [
            { id: "t314", text: "Architecture: Wazuh manager on Ubuntu + Kali attacker + Windows victim VM", type: "lab" },
            { id: "t315", text: "All VMs feeding logs into Wazuh", type: "lab" },
            { id: "t316", text: "[SCENARIO 1] Brute force SSH → detect → alert → write full report", type: "project" },
            { id: "t317", text: "[SCENARIO 2] Nmap scan → IDS rule → log documentation → report", type: "project" },
            { id: "t318", text: "[SCENARIO 3] Reverse shell → detect unusual outbound → report", type: "project" },
            { id: "t319", text: "[SCENARIO 4] Privilege escalation via SUID → file integrity monitoring → report", type: "project" },
            { id: "t320", text: "[SCENARIO 5] Cron job persistence → cron log monitoring → report", type: "project" },
            { id: "t321", text: "Each report: Attack / Detection / Response / Remediation sections", type: "project" },
            { id: "t322", text: "Architecture diagram created and pushed to GitHub", type: "project" },
            { id: "t323", text: "All 5 reports published — this is your flagship portfolio piece", type: "milestone" }
          ]
        },
        {
          id: "p3b3",
          title: "Block 3C — Incident Response (Day 401–450)",
          tasks: [
            { id: "t324", text: "IR lifecycle: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned", type: "learn" },
            { id: "t325", text: "Evidence collection and chain of custody concepts", type: "learn" },
            { id: "t326", text: "Memory forensics basics — Volatility framework", type: "learn" },
            { id: "t327", text: "Disk forensics basics — Autopsy", type: "learn" },
            { id: "t328", text: "Network forensics — Wireshark + Zeek", type: "learn" },
            { id: "t329", text: "TryHackMe SOC Level 1 path — complete entire path", type: "platform" },
            { id: "t330", text: "Blue Team Labs Online — complete 5 log analysis challenges", type: "platform" }
          ]
        }
      ]
    },
    {
      id: "phase4",
      number: 4,
      title: "Cloud Security",
      days: "Day 451–600",
      dayStart: 451,
      dayEnd: 600,
      color: "#7c3aed",
      icon: "☁️",
      goal: "Cloud is where every company lives. Cloud security is where the jobs are. On-premise is dying. Every major breach in the last 3 years involved cloud misconfiguration.",
      warning: "Skipping cloud means you are preparing for a world that no longer exists. IAM misconfiguration is the #1 cause of cloud breaches. Not exotic exploits. Misconfiguration.",
      blocks: [
        {
          id: "p4b1",
          title: "Block 4A — Cloud Foundations (Day 451–500)",
          tasks: [
            { id: "t401", text: "IAM — most important cloud concept. Overpermissioned service accounts cause more breaches than any exploit", type: "learn" },
            { id: "t402", text: "VPCs and subnets — same networking concepts, different cloud implementation", type: "learn" },
            { id: "t403", text: "GCS bucket security — public vs private, misconfiguration patterns", type: "learn" },
            { id: "t404", text: "Compute security — VM hardening, firewall rules, security groups", type: "learn" },
            { id: "t405", text: "Cloud Audit Logs — what gets logged, critically what does NOT", type: "learn" },
            { id: "t406", text: "Secret management — never hardcode credentials. Ever.", type: "learn" },
            { id: "t407", text: "Google Cloud Skills Boost free labs — complete 5 labs", type: "platform" },
            { id: "t408", text: "Deploy CloudGoat by Rhino Security Labs — vulnerable by design", type: "lab" }
          ]
        },
        {
          id: "p4b2",
          title: "Block 4B — Cloud Attack and Defense (Day 501–560)",
          tasks: [
            { id: "t409", text: "[CLOUD 1] GCS bucket misconfiguration: expose → find data → fix → document", type: "project" },
            { id: "t410", text: "[CLOUD 2] IAM privilege escalation: overpermissioned role → exploit → audit log → fix", type: "project" },
            { id: "t411", text: "[CLOUD 3] Metadata service abuse: SSRF → steal credentials → detect → fix", type: "project" },
            { id: "t412", text: "[CLOUD 4] Exposed credentials in code: find → rotate → implement secret scanning", type: "project" },
            { id: "t413", text: "All cloud attack-defense pairs tagged with MITRE ATT&CK Cloud matrix IDs", type: "project" },
            { id: "t414", text: "Full documentation with screenshots and commands pushed to GitHub", type: "project" }
          ]
        },
        {
          id: "p4b3",
          title: "Block 4C — Certification Prep (Day 561–600)",
          tasks: [
            { id: "t415", text: "GCP Associate Cloud Engineer — book exam, study, sit exam", type: "cert" },
            { id: "t416", text: "Start studying GCP Professional Cloud Security Engineer (exam target Day 700)", type: "cert" },
            { id: "t417", text: "Write a technical blog post: 3 cloud misconfigurations you found and fixed", type: "project" }
          ]
        }
      ]
    },
    {
      id: "phase5",
      number: 5,
      title: "Purple Team Synthesis",
      days: "Day 601–720",
      dayStart: 601,
      dayEnd: 720,
      color: "#ff6b35",
      icon: "🟣",
      goal: "Combine everything into the actual Purple Team skillset. Purple Team is NOT red + blue. It is the continuous loop between them. This phase did not exist in the original roadmap. It is the most important phase.",
      warning: "Most people call themselves Purple Team after reading a blog post. You will have 600 days of evidence. The difference will be obvious in every interview.",
      blocks: [
        {
          id: "p5b1",
          title: "MITRE ATT&CK Framework Mastery",
          tasks: [
            { id: "t501", text: "Study MITRE ATT&CK framework — every technique has an ID, learn to navigate it", type: "learn" },
            { id: "t502", text: "Retroactively tag all previous attack-detection pairs with correct MITRE IDs", type: "project" },
            { id: "t503", text: "Understand ATT&CK Navigator — build your coverage map", type: "learn" },
            { id: "t504", text: "Understand Sigma rules — the common format for detection rules", type: "learn" }
          ]
        },
        {
          id: "p5b2",
          title: "Project 1: Purple Team Exercise Report",
          tasks: [
            { id: "t505", text: "Pick 10 MITRE ATT&CK techniques across different tactics", type: "project" },
            { id: "t506", text: "For each: execute in lab, build detection, verify detection fires, document", type: "project" },
            { id: "t507", text: "Format as professional Purple Team Exercise Report (PDF)", type: "project" },
            { id: "t508", text: "Publish report on GitHub — this document alone will get you interviews", type: "project" }
          ]
        },
        {
          id: "p5b3",
          title: "Project 2: Detection-as-Code",
          tasks: [
            { id: "t509", text: "Write all Wazuh/Splunk detection rules as code (Sigma format)", type: "project" },
            { id: "t510", text: "Store in GitHub with version control and documentation", type: "project" },
            { id: "t511", text: "[SCRIPT 7] SOAR automation: detection fires → auto-enrichment via VirusTotal API → alert", type: "project" },
            { id: "t512", text: "Document: what does your SOAR script do that AI cannot do alone?", type: "project" }
          ]
        },
        {
          id: "p5b4",
          title: "Project 3: Threat Intelligence Integration",
          tasks: [
            { id: "t513", text: "Pull AlienVault OTX free threat feed", type: "project" },
            { id: "t514", text: "[SCRIPT 8] Python script: ingest IOCs, check against your lab logs, flag matches", type: "project" },
            { id: "t515", text: "Document false positive rate and why threshold tuning matters", type: "project" },
            { id: "t516", text: "Publish as standalone tool on GitHub with full README", type: "project" }
          ]
        }
      ]
    },
    {
      id: "phase6",
      number: 6,
      title: "Infrastructure and Edge",
      days: "Day 721–780",
      dayStart: 721,
      dayEnd: 780,
      color: "#ffd700",
      icon: "🏗️",
      goal: "Most cybersecurity people have never seen a data center. Most cannot explain how physical network hardware works. This knowledge makes you dangerous in interviews and valuable on teams.",
      warning: "This is your differentiator. Everyone skips this. That is exactly why you will not.",
      blocks: [
        {
          id: "p6b1",
          title: "Infrastructure Knowledge",
          tasks: [
            { id: "t601", text: "Data center architecture: power distribution, cooling, redundancy", type: "learn" },
            { id: "t602", text: "Physical network hardware: switches, routers, firewalls, load balancers", type: "learn" },
            { id: "t603", text: "Network segmentation: DMZ, VLANs, zero trust architecture", type: "learn" },
            { id: "t604", text: "SD-WAN basics", type: "learn" },
            { id: "t605", text: "Hardware security: TPM, secure boot, firmware attacks (conceptual)", type: "learn" },
            { id: "t606", text: "Watch CBT Nuggets data center fundamentals (YouTube)", type: "resource" },
            { id: "t607", text: "Complete Cisco Networking Academy free course", type: "platform" },
            { id: "t608", text: "Watch Google and Microsoft data center virtual tours", type: "resource" },
            { id: "t609", text: "[DELIVERABLE] 2000-word technical post: how a data center works, security controls, failure points — PUBLISH", type: "project" }
          ]
        }
      ]
    },
    {
      id: "phase7",
      number: 7,
      title: "AI Era Adaptation",
      days: "Day 781–870",
      dayStart: 781,
      dayEnd: 870,
      color: "#ff00ff",
      icon: "🤖",
      goal: "Use AI as a force multiplier, not a crutch. Understand AI as an attack surface. AI will not replace you if you understand systems. AI WILL replace you if you only know how to use tools.",
      warning: "AI can call the VirusTotal API in 10 seconds. If your only value is API integrations, you have zero job security. Your 780 days of system understanding is what AI cannot replicate.",
      blocks: [
        {
          id: "p7b1",
          title: "AI as Force Multiplier",
          tasks: [
            { id: "t701", text: "Use AI to summarize large log files — then verify every summary manually", type: "learn" },
            { id: "t702", text: "Use AI to generate detection rule drafts — then validate and tune each one", type: "learn" },
            { id: "t703", text: "Use AI for threat report summarization — process 10 reports, check accuracy", type: "learn" },
            { id: "t704", text: "Document 5 specific cases where AI gave wrong security information", type: "project" }
          ]
        },
        {
          id: "p7b2",
          title: "AI as Attack Surface",
          tasks: [
            { id: "t705", text: "Prompt injection attacks — study and test on local LLM", type: "learn" },
            { id: "t706", text: "Training data poisoning — understand the concept and threat model", type: "learn" },
            { id: "t707", text: "Model extraction attacks — conceptual understanding", type: "learn" },
            { id: "t708", text: "AI-powered phishing — what attackers are already doing in 2025+", type: "learn" },
            { id: "t709", text: "Defending AI systems: input validation, output filtering, rate limiting", type: "learn" },
            { id: "t710", text: "Install Ollama — run a local LLM", type: "lab" },
            { id: "t711", text: "[PROJECT] AI Security Assessment: attempt prompt injections, document what works and what doesn't", type: "project" },
            { id: "t712", text: "Write and publish research post on AI security findings", type: "project" }
          ]
        }
      ]
    },
    {
      id: "phase8",
      number: 8,
      title: "Job Preparation",
      days: "Day 871–900",
      dayStart: 871,
      dayEnd: 900,
      color: "#00ff9d",
      icon: "🎯",
      goal: "Convert 900 days of work into employment. The timestamps on your GitHub don't lie. The cert PDFs either exist or they don't.",
      warning: "Do not start applying without a polished GitHub, a live blog, and at least 3 certifications. Quantity of applications without quality of portfolio is wasted time.",
      blocks: [
        {
          id: "p8b1",
          title: "Resume and Applications",
          tasks: [
            { id: "t801", text: "Build one-page resume — every bullet starts with a number or result", type: "setup" },
            { id: "t802", text: "ATS keyword audit — match job descriptions for target companies", type: "setup" },
            { id: "t803", text: "Apply: Palo Alto Networks CAMP program", type: "apply" },
            { id: "t804", text: "Apply: Google STEP / SWE internship security track", type: "apply" },
            { id: "t805", text: "Apply: Razorpay, Zepto, Swiggy security teams (Indian startups, hire freshers)", type: "apply" },
            { id: "t806", text: "Apply: DRDO, CERT-In (Indian government — good for fresher)", type: "apply" }
          ]
        },
        {
          id: "p8b2",
          title: "Interview Preparation",
          tasks: [
            { id: "t807", text: "LeetCode: 50 easy problems (appears in security interviews)", type: "practice" },
            { id: "t808", text: "System design: how would you design a secure authentication system?", type: "practice" },
            { id: "t809", text: "Behavioral: STAR format for every project you built", type: "practice" },
            { id: "t810", text: "Technical: whiteboard TCP handshake, SQL injection, IR process", type: "practice" },
            { id: "t811", text: "Mock interview: record yourself explaining your Purple Team exercise report", type: "practice" }
          ]
        },
        {
          id: "p8b3",
          title: "Final Portfolio Audit",
          tasks: [
            { id: "t812", text: "GitHub: active commits in last 30 days — non-negotiable", type: "milestone" },
            { id: "t813", text: "Blog: 50+ published posts with timestamps", type: "milestone" },
            { id: "t814", text: "GitHub structure matches the portfolio template from roadmap", type: "milestone" },
            { id: "t815", text: "All 5 SOC lab scenarios documented and public", type: "milestone" },
            { id: "t816", text: "Purple Team Exercise Report published", type: "milestone" },
            { id: "t817", text: "At least one bug bounty submission on record", type: "milestone" }
          ]
        }
      ]
    }
  ]
};

/* ============================================================
   SIMRAN KANWAR — Personal AI Chatbot
   Knowledge-base driven, zero external API required
   ============================================================ */

(function () {
  'use strict';

  /* ── Knowledge Base ── */
  const KB = {
    name: 'Simran Kanwar',
    title: 'Creative Web Developer | Agentic AI Developer | Designer',
    college: 'Jodhpur Institute of Engineering and Technology (JIET)',
    degree: 'Computer Science Engineering',
    email: 'rathoresimran567@gmail.com',
    phone: '+91 6367812002',
    location: 'India',
    portfolio: 'https://simran-kanwar-15.github.io/portfolio-updated/',
    linkedin: 'https://www.linkedin.com/in/simran-kanwar22/',
    github: 'https://github.com/Simran-Kanwar-15',
    resume: 'https://drive.google.com/file/d/1zjKGe84iCpfgi5Qhg28wvmlCaT8ORKmU/view',
    availability: 'Open for Internships, Freelance Projects, Collaborations & Full-Time Opportunities',

    skills: {
      programming: ['C', 'Python', 'Java', 'HTML5', 'CSS3', 'JavaScript', 'SQL', 'DBMS', 'DSA'],
      frontend: ['Next.js', 'React', 'Node.js', 'Responsive Web Design', 'Interactive UIs', 'Performance Optimization'],
      agenticAI: ['Autonomous AI Agents', 'Multi-Agent Systems', 'AI Workflow Automation', 'Conversational AI', 'LLM-Based Applications'],
      genAI: ['Prompt Engineering', 'AI Content Generation', 'Intelligent Automation', 'AI Research'],
      tools: ['Git', 'GitHub', 'Figma', 'Canva', 'MATLAB', 'WordPress', 'Netlify', 'Vercel', 'Overleaf', 'Antigravity'],
      creative: ['Web Design', 'UI/UX Design', 'Logo Designing', 'Video Editing', 'Branding', 'Content Creation'],
    },

    projects: [
      { name: 'BotSphere', emoji: '🤖', desc: 'AI-powered multi-agent platform for communication, workflow automation, and intelligent task execution.', stack: 'Agentic AI, Automation, Modern Web', url: 'https://bot-sphere-chi.vercel.app/' },
      { name: 'AgentVerse', emoji: '🌌', desc: 'Next-gen multi-agent platform with customizable AI assistants, autonomous workflows, and productivity tools.', stack: 'Agentic AI, Conversational AI', url: 'https://agent-verse-g53m-8om6s00s9-rathoresimran567-3026s-projects.vercel.app/login' },
      { name: '3D Web Experience', emoji: '🎮', desc: 'Immersive cinematic 3D website with advanced animations and interactive storytelling.', stack: 'Three.js, GSAP, JavaScript', url: 'https://3d-website-dp84.vercel.app/' },
      { name: 'Helping Hands', emoji: '🤝', desc: 'Social impact platform connecting volunteers with people in need.', stack: 'HTML, CSS, JavaScript, PHP', url: 'https://helping-hands-site.netlify.app/' },
      { name: 'Student Task Manager', emoji: '📋', desc: 'Productivity web app for students to organize tasks, manage deadlines, and track priorities.', stack: 'React.js, Node.js, Express.js, MongoDB', url: 'https://student-task-manager-main.onrender.com/' },
      { name: 'A.R.C. Mission Control', emoji: '🎙️', desc: 'FRIDAY-style personal AI voice assistant with mission-control dashboard, live telemetry, and research agents.', stack: 'Agentic AI, Voice Interaction, JavaScript', url: 'https://simran-kanwar-15.github.io/voice-agent/' },
    ],

    experience: [
      { role: 'Agentic AI Intern', org: '', desc: 'Built autonomous AI agents capable of multi-step reasoning, intelligent decision-making, and workflow automation.' },
      { role: 'Generative AI Intern', org: 'SIN Education & Technology', desc: 'Prompt engineering, generative AI applications, intelligent automation workflows, and AI-powered user experiences.' },
      { role: 'Web Development Intern', org: 'TechieHelp', desc: 'Developed real-world web applications; strengthened frontend development, backend integration, and debugging skills.' },
      { role: 'AI & Cybersecurity Workshop Conductor', org: 'Government Schools', desc: 'Educated students about Artificial Intelligence, Cybersecurity, and emerging technologies.' },
      { role: 'Founder', org: 'Helping Hands', desc: 'Designed and built a community platform connecting volunteers with people in need.' },
      { role: 'NCC Best Cadet', org: 'NCC', desc: 'Recognized for outstanding leadership, discipline, teamwork, and management capabilities.' },
    ],

    certifications: [
      { name: 'Web Development Internship Certificate', url: 'https://drive.google.com/file/d/1YKo-vC7wVxvBi-fJs8lObep5pGWd-5E8/view' },
      { name: 'SunHacks Hackathon', url: 'https://drive.google.com/file/d/1xUnf0ccN6yRyIH5vVC8wAb0vKW5roIpt/view' },
      { name: 'Reckon 6.0', url: 'https://drive.google.com/file/d/1tnB8Y4X5anMqWMOcZiff8NQQlQAYabT2/view' },
      { name: 'Reckon 7.0', url: 'https://drive.google.com/file/d/1u-NshFTFESgEWMpGM8_Qd9Ew5M-cXUCK-l/view' },
      { name: "NCC 'C' Certificate", url: 'https://drive.google.com/file/d/1ljjfPmKqaBxXcTD6RkTzgZrtaNe_mGLi/view' },
      { name: "NCC 'B' Certificate", url: 'https://drive.google.com/file/d/1NNbkWkf0j72AJTXfeC8alcyRtHI0lpWB/view' },
      { name: 'Summer Training Certificate', url: 'https://drive.google.com/file/d/1uDIInYjKR7TErB5xi9X2oog0MpUhFAQ8/view' },
    ],

    whyMe: [
      'Creative Problem Solver', 'Modern Web Developer', 'Agentic AI Developer',
      'Strong Team Collaborator', 'Continuous Learner', 'User-Centered Designer',
      'Innovation-Driven Mindset', 'Detail-Oriented Professional',
      'Strong Communication Skills', 'Passion for Emerging Technologies',
    ],

    goals: 'Simran is actively pursuing roles as an AI / Agentic AI Developer, focusing on autonomous agents, multi-agent systems, and LLM-powered products. She wants to combine front-end craftsmanship with agentic AI architecture. Open to internships, freelance AI/web projects, and full-time Agentic AI Developer positions.',
  };

  /* ── Intent Patterns ── */
  const intents = [
    {
      tags: ['hello', 'hi', 'hey', 'greet', 'good morning', 'good evening', 'namaste'],
      response: () => `Hey there! 👋 I'm Simran's personal AI assistant. I can tell you all about her skills, projects, experience, and how to get in touch. What would you like to know?`,
    },
    {
      tags: ['who are you', 'what are you', 'introduce', 'about you', 'who is simran', 'tell me about simran', 'about simran'],
      response: () => `I'm the personal AI assistant for **${KB.name}** — a ${KB.title} based in ${KB.location}.\n\nShe's a Computer Science Engineering student at **${KB.college}**, passionate about building responsive web apps and intelligent AI systems. She's currently open to **internships, freelance projects, and full-time opportunities**.\n\nWhat would you like to know more about?`,
    },
    {
      tags: ['skill', 'tech stack', 'technology', 'know', 'can do', 'expertise', 'proficient', 'language', 'framework'],
      response: () => `Simran has a diverse and modern tech skill set:\n\n**💻 Programming:** ${KB.skills.programming.join(', ')}\n\n**🖥️ Frontend:** ${KB.skills.frontend.join(', ')}\n\n**🤖 Agentic & Gen AI:** ${KB.skills.agenticAI.slice(0, 3).join(', ')}, Prompt Engineering, LLM Applications\n\n**🧰 Tools:** ${KB.skills.tools.join(', ')}\n\n**🎨 Creative:** ${KB.skills.creative.join(', ')}`,
    },
    {
      tags: ['project', 'work', 'built', 'portfolio', 'demo', 'live', 'app', 'website'],
      response: () => {
        const list = KB.projects.map(p => `${p.emoji} **${p.name}** — ${p.desc}\n   🔗 [View Live](${p.url})`).join('\n\n');
        return `Here are Simran's featured projects:\n\n${list}`;
      },
    },
    {
      tags: ['experience', 'intern', 'internship', 'job', 'work history', 'career', 'professional'],
      response: () => {
        const list = KB.experience.map(e => `**${e.role}**${e.org ? ` — *${e.org}*` : ''}\n${e.desc}`).join('\n\n');
        return `Simran's professional experience:\n\n${list}`;
      },
    },
    {
      tags: ['certificate', 'achievement', 'award', 'hackathon', 'ncc', 'certification'],
      response: () => {
        const list = KB.certifications.map(c => `• [${c.name}](${c.url})`).join('\n');
        return `Simran's certifications & achievements:\n\n${list}`;
      },
    },
    {
      tags: ['contact', 'reach', 'email', 'phone', 'connect', 'hire', 'message', 'talk'],
      response: () => `You can reach Simran through:\n\n📧 **Email:** [${KB.email}](mailto:${KB.email})\n📱 **Phone:** ${KB.phone}\n💼 **LinkedIn:** [simran-kanwar22](${KB.linkedin})\n💻 **GitHub:** [Simran-Kanwar-15](${KB.github})\n🌐 **Portfolio:** [Visit Here](${KB.portfolio})\n\nShe's **${KB.availability.toLowerCase()}**.`,
    },
    {
      tags: ['resume', 'cv', 'download', 'curriculum'],
      response: () => `You can view and download Simran's resume here:\n\n📄 **[View Resume →](${KB.resume})**`,
    },
    {
      tags: ['linkedin', 'github', 'social', 'profile', 'link'],
      response: () => `Here are Simran's social profiles:\n\n💼 [LinkedIn](${KB.linkedin})\n💻 [GitHub](${KB.github})\n🌐 [Portfolio](${KB.portfolio})`,
    },
    {
      tags: ['goal', 'aspiration', 'future', 'looking for', 'open to', 'available', 'hire', 'opportunity'],
      response: () => `${KB.goals}\n\n📩 Reach her at [${KB.email}](mailto:${KB.email})`,
    },
    {
      tags: ['why', 'why hire', 'why choose', 'strength', 'quality', 'value'],
      response: () => `Why work with Simran?\n\n${KB.whyMe.map(w => `✔ ${w}`).join('\n')}`,
    },
    {
      tags: ['ai', 'agentic', 'agent', 'llm', 'generative', 'automation', 'gpt'],
      response: () => `Simran is deeply specialized in AI — specifically **Agentic AI**:\n\n• **${KB.skills.agenticAI.join('**\n• **')}**\n\nHer projects like *BotSphere* and *AgentVerse* are live multi-agent platforms. She's also built a *FRIDAY-style voice agent* (A.R.C. Mission Control) and worked as an Agentic AI Intern building autonomous decision-making systems.`,
    },
    {
      tags: ['botsphere', 'agentverse', 'helping hands', 'task manager', 'arc', 'mission control', '3d'],
      response: (msg) => {
        const name = msg.toLowerCase();
        const p = KB.projects.find(pr => name.includes(pr.name.toLowerCase().split(' ')[0].toLowerCase()));
        if (p) return `${p.emoji} **${p.name}**\n\n${p.desc}\n\n**Stack:** ${p.stack}\n\n🔗 [View Live Project](${p.url})`;
        return null;
      },
    },
    {
      tags: ['college', 'university', 'education', 'study', 'student', 'jiet', 'degree', 'cse'],
      response: () => `Simran is a **${KB.degree}** student at **${KB.college}** (JIET), India. She's actively building her career while studying, with multiple internships and live projects already under her belt.`,
    },
    {
      tags: ['location', 'where', 'city', 'country', 'based', 'india', 'jodhpur'],
      response: () => `Simran is based in **India** 🌍. She's open to remote opportunities globally and in-person roles within India.`,
    },
    {
      tags: ['freelance', 'collaborate', 'collab', 'work together', 'project together'],
      response: () => `Simran is absolutely open to freelance and collaborative work! She's available for:\n\n• Web Development Projects\n• Agentic AI Projects\n• UI/UX Design\n• Technical Workshops\n• Collaborative Open-Source\n\n📧 Drop her a line: [${KB.email}](mailto:${KB.email})`,
    },
    {
      tags: ['thank', 'thanks', 'great', 'awesome', 'helpful', 'good', 'nice', 'cool'],
      response: () => `You're most welcome! 😊 Feel free to ask anything else about Simran — her projects, skills, or how to get in touch.`,
    },
    {
      tags: ['bye', 'goodbye', 'see you', 'later', 'take care'],
      response: () => `Thanks for stopping by! 👋 Feel free to come back anytime. Have a great day! 🌟`,
    },
  ];

  /* ── Suggested Questions ── */
  const suggestions = [
    '👋 Who is Simran?',
    '💻 What are her skills?',
    '🚀 Show me her projects',
    '💼 Work experience?',
    '📧 How to contact her?',
    '📄 Get her resume',
  ];

  /* ── Match intent ── */
  function getResponse(userMsg) {
    const msg = userMsg.toLowerCase().trim();

    for (const intent of intents) {
      if (intent.tags.some(tag => msg.includes(tag))) {
        const r = intent.response(msg);
        if (r) return r;
      }
    }

    // Fuzzy: project name lookup
    for (const p of KB.projects) {
      if (msg.includes(p.name.toLowerCase())) {
        return `${p.emoji} **${p.name}**\n\n${p.desc}\n\n**Stack:** ${p.stack}\n\n🔗 [View Live](${p.url})`;
      }
    }

    return `That's a great question! Unfortunately, I don't have that specific information in my knowledge base right now.\n\nYou can reach Simran directly at 📧 [${KB.email}](mailto:${KB.email}) — she'll be happy to help! Is there anything else I can assist you with?`;
  }

  /* ── Markdown renderer (simple subset) ── */
  function renderMarkdown(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\[(.+?)\]\((https?:\/\/.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');
  }

  /* ── Inject CSS ── */
  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

    #sk-chat-fab {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #FF2A75, #ff6ba8);
      border: none;
      cursor: pointer;
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 24px rgba(255,42,117,0.5), 0 0 0 0 rgba(255,42,117,0.4);
      transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
      animation: sk-fab-pulse 2.5s ease-in-out infinite;
    }
    #sk-chat-fab:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 32px rgba(255,42,117,0.7), 0 0 0 8px rgba(255,42,117,0.1);
    }
    #sk-chat-fab svg { transition: transform 0.3s ease; }
    #sk-chat-fab.open svg.icon-chat { display: none; }
    #sk-chat-fab.open svg.icon-close { display: block !important; }

    @keyframes sk-fab-pulse {
      0%,100% { box-shadow: 0 4px 24px rgba(255,42,117,0.5), 0 0 0 0 rgba(255,42,117,0.4); }
      50% { box-shadow: 0 4px 24px rgba(255,42,117,0.5), 0 0 0 10px rgba(255,42,117,0); }
    }

    #sk-chat-bubble {
      position: fixed;
      bottom: 100px;
      right: 28px;
      background: rgba(10,10,14,0.95);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,42,117,0.25);
      border-radius: 20px;
      width: 380px;
      max-height: 560px;
      display: flex;
      flex-direction: column;
      z-index: 9999;
      box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.05);
      transform: translateY(20px) scale(0.95);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
      font-family: 'Poppins', sans-serif;
    }
    #sk-chat-bubble.visible {
      transform: translateY(0) scale(1);
      opacity: 1;
      pointer-events: all;
    }

    /* Header */
    #sk-chat-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 18px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      border-radius: 20px 20px 0 0;
      background: linear-gradient(135deg, rgba(255,42,117,0.12), rgba(255,42,117,0.04));
    }
    #sk-chat-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(135deg, #FF2A75, #ff6ba8);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
      box-shadow: 0 0 16px rgba(255,42,117,0.4);
    }
    #sk-chat-header-info { flex: 1; }
    #sk-chat-header-name { font-size: 14px; font-weight: 600; color: #fff; }
    #sk-chat-header-status { font-size: 11px; color: rgba(255,255,255,0.5); display: flex; align-items: center; gap: 5px; margin-top: 1px; }
    .sk-status-dot { width: 7px; height: 7px; background: #4ade80; border-radius: 50%; animation: sk-blink-dot 2s ease infinite; }
    @keyframes sk-blink-dot { 0%,100%{opacity:1} 50%{opacity:0.4} }

    /* Messages */
    #sk-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,42,117,0.3) transparent;
    }
    #sk-chat-messages::-webkit-scrollbar { width: 4px; }
    #sk-chat-messages::-webkit-scrollbar-thumb { background: rgba(255,42,117,0.3); border-radius: 4px; }

    .sk-msg {
      max-width: 88%;
      animation: sk-msg-in 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards;
    }
    @keyframes sk-msg-in {
      from { opacity:0; transform: translateY(8px) scale(0.97); }
      to   { opacity:1; transform: translateY(0) scale(1); }
    }
    .sk-msg-bot { align-self: flex-start; }
    .sk-msg-user { align-self: flex-end; }

    .sk-msg-bubble {
      padding: 10px 14px;
      border-radius: 16px;
      font-size: 13px;
      line-height: 1.65;
      color: rgba(255,255,255,0.9);
    }
    .sk-msg-bot .sk-msg-bubble {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-bottom-left-radius: 4px;
    }
    .sk-msg-user .sk-msg-bubble {
      background: linear-gradient(135deg, #FF2A75, #d91a5e);
      border-bottom-right-radius: 4px;
      box-shadow: 0 4px 14px rgba(255,42,117,0.3);
    }
    .sk-msg-bubble p { margin: 0 0 6px; }
    .sk-msg-bubble p:last-child { margin: 0; }
    .sk-msg-bubble strong { color: #FF2A75; font-weight: 600; }
    .sk-msg-user .sk-msg-bubble strong { color: rgba(255,255,255,0.9); }
    .sk-msg-bubble a { color: #ff6ba8; text-decoration: underline; text-underline-offset: 2px; }
    .sk-msg-user .sk-msg-bubble a { color: rgba(255,255,255,0.85); }

    /* Typing indicator */
    .sk-typing { display: flex; gap: 5px; align-items: center; padding: 12px 14px; }
    .sk-typing span {
      width: 7px; height: 7px; border-radius: 50%; background: #FF2A75;
      animation: sk-bounce 1.2s ease infinite;
    }
    .sk-typing span:nth-child(2) { animation-delay: 0.2s; }
    .sk-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes sk-bounce {
      0%,80%,100% { transform: translateY(0); opacity:0.4; }
      40% { transform: translateY(-6px); opacity:1; }
    }

    /* Suggestions */
    #sk-suggestions {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 10px 16px;
      border-top: 1px solid rgba(255,255,255,0.04);
    }
    .sk-suggestion {
      font-size: 11.5px;
      padding: 5px 12px;
      border-radius: 20px;
      border: 1px solid rgba(255,42,117,0.3);
      background: rgba(255,42,117,0.07);
      color: rgba(255,255,255,0.75);
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: 'Poppins', sans-serif;
      white-space: nowrap;
    }
    .sk-suggestion:hover {
      background: rgba(255,42,117,0.18);
      border-color: #FF2A75;
      color: #fff;
      transform: translateY(-1px);
    }

    /* Input */
    #sk-chat-input-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      border-top: 1px solid rgba(255,255,255,0.06);
      border-radius: 0 0 20px 20px;
    }
    #sk-chat-input {
      flex: 1;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 12px;
      padding: 10px 14px;
      color: #fff;
      font-size: 13px;
      font-family: 'Poppins', sans-serif;
      outline: none;
      resize: none;
      height: 40px;
      line-height: 1.5;
      transition: border-color 0.2s;
    }
    #sk-chat-input::placeholder { color: rgba(255,255,255,0.3); }
    #sk-chat-input:focus { border-color: rgba(255,42,117,0.5); }
    #sk-chat-send {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: linear-gradient(135deg, #FF2A75, #d91a5e);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 12px rgba(255,42,117,0.35);
    }
    #sk-chat-send:hover { transform: scale(1.08); box-shadow: 0 6px 18px rgba(255,42,117,0.55); }
    #sk-chat-send:active { transform: scale(0.96); }

    /* Notification dot */
    #sk-notif-dot {
      position: absolute;
      top: 0;
      right: 0;
      width: 14px;
      height: 14px;
      background: #4ade80;
      border: 2px solid #050505;
      border-radius: 50%;
      animation: sk-notif-bounce 1s ease 1s 3;
    }
    @keyframes sk-notif-bounce {
      0%,100% { transform: scale(1); }
      50% { transform: scale(1.4); }
    }

    @media (max-width: 440px) {
      #sk-chat-bubble { width: calc(100vw - 20px); right: 10px; bottom: 90px; }
      #sk-chat-fab { right: 16px; bottom: 16px; }
    }
  `;
  document.head.appendChild(style);

  /* ── Build DOM ── */
  const fab = document.createElement('button');
  fab.id = 'sk-chat-fab';
  fab.setAttribute('aria-label', 'Open Simran\'s AI assistant');
  fab.innerHTML = `
    <svg class="icon-chat" width="26" height="26" viewBox="0 0 24 24" fill="white">
      <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z"/>
    </svg>
    <svg class="icon-close" width="22" height="22" viewBox="0 0 24 24" fill="white" style="display:none">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
    <div id="sk-notif-dot"></div>
  `;

  const bubble = document.createElement('div');
  bubble.id = 'sk-chat-bubble';
  bubble.setAttribute('role', 'dialog');
  bubble.setAttribute('aria-label', 'Simran Kanwar AI Assistant');
  bubble.innerHTML = `
    <div id="sk-chat-header">
      <div id="sk-chat-avatar">✨</div>
      <div id="sk-chat-header-info">
        <div id="sk-chat-header-name">Simran's AI Assistant</div>
        <div id="sk-chat-header-status">
          <span class="sk-status-dot"></span> Online — Ready to help
        </div>
      </div>
    </div>
    <div id="sk-chat-messages"></div>
    <div id="sk-suggestions"></div>
    <div id="sk-chat-input-row">
      <input id="sk-chat-input" type="text" placeholder="Ask me anything about Simran…" autocomplete="off" maxlength="300" />
      <button id="sk-chat-send" aria-label="Send message">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
        </svg>
      </button>
    </div>
  `;

  document.body.appendChild(fab);
  document.body.appendChild(bubble);

  /* ── DOM refs ── */
  const messagesEl = document.getElementById('sk-chat-messages');
  const inputEl = document.getElementById('sk-chat-input');
  const sendBtn = document.getElementById('sk-chat-send');
  const suggestionsEl = document.getElementById('sk-suggestions');
  const notifDot = document.getElementById('sk-notif-dot');

  /* ── Append message ── */
  function appendMessage(text, role) {
    const wrapper = document.createElement('div');
    wrapper.className = `sk-msg sk-msg-${role}`;

    const bub = document.createElement('div');
    bub.className = 'sk-msg-bubble';
    bub.innerHTML = `<p>${renderMarkdown(text)}</p>`;

    wrapper.appendChild(bub);
    messagesEl.appendChild(wrapper);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return wrapper;
  }

  /* ── Typing indicator ── */
  function showTyping() {
    const el = document.createElement('div');
    el.className = 'sk-msg sk-msg-bot';
    el.id = 'sk-typing-indicator';
    el.innerHTML = `<div class="sk-msg-bubble"><div class="sk-typing"><span></span><span></span><span></span></div></div>`;
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }
  function hideTyping() {
    const el = document.getElementById('sk-typing-indicator');
    if (el) el.remove();
  }

  /* ── Send message flow ── */
  let isThinking = false;
  function send() {
    const msg = inputEl.value.trim();
    if (!msg || isThinking) return;

    inputEl.value = '';
    suggestionsEl.innerHTML = '';
    appendMessage(msg, 'user');
    isThinking = true;

    showTyping();
    const delay = 600 + Math.random() * 700;
    setTimeout(() => {
      hideTyping();
      const reply = getResponse(msg);
      appendMessage(reply, 'bot');
      isThinking = false;
    }, delay);
  }

  /* ── Render suggestions ── */
  function renderSuggestions(list) {
    suggestionsEl.innerHTML = '';
    list.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'sk-suggestion';
      btn.textContent = s;
      btn.onclick = (e) => {
        e.stopPropagation();
        inputEl.value = s.replace(/^[^\s]+\s/, ''); // strip emoji prefix
        send();
      };
      suggestionsEl.appendChild(btn);
    });
  }

  /* ── Toggle ── */
  let isOpen = false;
  let greeted = false;
  fab.addEventListener('click', () => {
    isOpen = !isOpen;
    fab.classList.toggle('open', isOpen);
    bubble.classList.toggle('visible', isOpen);
    if (notifDot) notifDot.remove();

    if (isOpen && !greeted) {
      greeted = true;
      setTimeout(() => {
        appendMessage(`Hi there! 👋 I'm Simran's personal AI assistant — here to tell you everything about her skills, projects, and how to collaborate.\n\nWhat can I help you with?`, 'bot');
        renderSuggestions(suggestions);
      }, 300);
    }

    if (isOpen) inputEl.focus();
  });

  sendBtn.addEventListener('click', (e) => { e.stopPropagation(); send(); });
  inputEl.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); e.stopPropagation(); send(); } });

  // Close on outside click
  document.addEventListener('click', e => {
    if (isOpen && !bubble.contains(e.target) && !fab.contains(e.target)) {
      isOpen = false;
      fab.classList.remove('open');
      bubble.classList.remove('visible');
    }
  });

})();

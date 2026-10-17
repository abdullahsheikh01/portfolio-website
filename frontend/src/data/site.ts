// Single source of truth for portfolio content. Everything here is sourced from
// real repositories, live sites, or the previous version of this portfolio.

export const developer = {
  name: 'Abdullah Shaikh',
  role: 'Agentic AI & Frontend Developer',
  location: 'Karachi, Pakistan',
  image: {
    src: '/images/developer.png',
    alt: 'Portrait of Abdullah Shaikh',
  },
  resume: '/Abdullah_Shaikh_Resume.pdf',
  formEndpoint: 'https://formspree.io/f/mnnqvnbl',
};

export type SocialLink = {
  label: 'GitHub' | 'LinkedIn' | 'X';
  href: string;
  handle: string;
};

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/abdullahsheikh01', handle: 'abdullahsheikh01' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullah-shaikh-29699b302/', handle: 'Abdullah Shaikh' },
  { label: 'X', href: 'https://x.com/abdullahsh6601', handle: '@abdullahsh6601' },
];

export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  github?: string;
  live?: string;
  // Featured projects show in the "Featured AI Projects" group, the rest in "More Projects"
  is_featured_project: boolean;
  // Optional demo video in /public/videos; when set, the card offers a "Watch demo" player
  video?: string;
};

export const projects: Project[] = [
  {
    title: 'Personal AI Employee (Digital FTE)',
    description:
      'A local-first autonomous agent that triages Gmail, drafts replies and LinkedIn posts, and routes work through skills — with Claude Code as the reasoning engine, Obsidian as the dashboard, and a human approval step before anything is sent.',
    image: '/images/projects/personal-ai-employee.webp',
    imageAlt: 'Workflow diagram of the Personal AI Employee: incoming tasks, AI processing, human approval, and completed actions',
    tags: ['Python', 'Claude Code', 'MCP', 'Playwright', 'Obsidian'],
    github: 'https://github.com/abdullahsheikh01/personal-ai-employee-digital-fte',
    is_featured_project: true,
    video: '/videos/personal-ai-employee.mp4',
  },
  {
    title: 'OpenCode Docker Watchdog',
    description:
      'An interactive CLI that supervises Docker Compose projects with OpenCode — it waits for Docker, optionally rebuilds containers, then checks their health every three minutes and writes a running report to Markdown.',
    image: '/images/projects/docker-watchdog.webp',
    imageAlt: 'OpenCode Docker Watchdog overview showing the five-step pipeline from project selection to health logging',
    tags: ['Bash', 'Docker', 'OpenCode', 'fzf'],
    github: 'https://github.com/abdullahsheikh01/opencode-docker-watchdog',
    is_featured_project: true,
    video: '/videos/docker-watchdog.mp4',
  },
  {
    title: 'Teacher Notes – Lesson Planner',
    description:
      'Helps teachers create class notes, tidy messy notes, and turn them into revision summaries and lesson plans, using skill-based AI agents with real-time streaming and saved history.',
    image: '/images/projects/teacher-notes.webp',
    imageAlt: 'Teacher Notes app open on a laptop, showing a physics lesson note and a weekly planner',
    tags: ['Next.js', 'TypeScript', 'FastAPI', 'OpenAI Agents SDK', 'SQLite'],
    github: 'https://github.com/abdullahsheikh01/teacher-notes-app',
    live: 'https://teacher-notes-app.vercel.app/',
    is_featured_project: true,
    video: '/videos/teacher-notes.mp4',
  },
  {
    title: 'Panaversity Exam Practice',
    description:
      'Free, exam-style practice questions for the official Panaversity certification quizzes — built by students, for students, so the real quiz has no surprises.',
    image: '/images/projects/panaversity-exam-practice.webp',
    imageAlt: 'Panaversity Exam Practice quiz screen on a laptop with a question, score, and progress tracker',
    tags: ['Next.js', 'Vercel'],
    live: 'https://panaversity-exam-practice.vercel.app/',
    is_featured_project: true,
    video: '/videos/panaversity-exam-practice.mp4',
  },
  {
    title: 'Comforty E-Commerce Store',
    description:
      'A furniture marketplace built for the GIAIC Marketplace Builder Hackathon 2025, with products managed in Sanity and cart state in Redux.',
    image: '/images/projects/ecommerce-website.png',
    imageAlt: 'Comforty storefront home page featuring a grey armchair and a furniture collection headline',
    tags: ['Next.js', 'Sanity', 'Redux Toolkit', 'Tailwind CSS'],
    github: 'https://github.com/abdullahsheikh01/Market_Place_Builder_Hackathon_2025_GIAIC',
    live: 'https://market-place-builder-hackathon-2025-giaic-6601.vercel.app/',
    is_featured_project: false,
  },
  {
    title: 'Blog Website',
    description: 'A content-driven blog powered by Sanity as a headless CMS, with Clerk for authentication.',
    image: '/images/projects/blog-website.png',
    imageAlt: 'Blog website landing page with a welcome headline and an Explore Blogs button',
    tags: ['Next.js', 'Sanity', 'Clerk', 'Tailwind CSS'],
    github: 'https://github.com/abdullahsheikh01/Blog_Website_Using_Sanity',
    live: 'https://blogswebsitebyabdullahshaikh-6601.vercel.app/',
    is_featured_project: false,
  },
  {
    title: 'NPM Packages',
    description: 'Small command-line utilities published to the npm registry.',
    image: '/images/projects/npm-projects.png',
    imageAlt: 'npm logo on a dark navy background',
    tags: ['Node.js', 'CLI', 'npm'],
    live: 'https://www.npmjs.com/~abdullahsheikh6601',
    is_featured_project: false,
  },
  {
    title: 'To-Do App',
    description: 'A task list app with add, delete, clear-all, and a theme switcher.',
    image: '/images/projects/to-do.png',
    imageAlt: 'To-do app interface with title and description inputs and two task cards',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/abdullahsheikh01/to_do_app_with_next.js',
    live: 'https://todo-app-6601.vercel.app',
    is_featured_project: false,
  },
];

export type SkillGroup = {
  id: string;
  title: string;
  summary: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    summary: 'Responsive, accessible interfaces backed by headless content.',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Sanity CMS'],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    summary: 'Tool-using agents, autonomous loops, and the APIs that serve them.',
    skills: ['Python', 'OpenAI Agents SDK', 'Claude Code', 'OpenCode', 'MCP', 'FastAPI', 'Chainlit', 'Streamlit'],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    summary: 'The workflow that ships it.',
    skills: ['Git', 'GitHub', 'Docker', 'Bash', 'Vercel', 'Figma'],
  },
];

export const education = [
  {
    title: 'Cloud Applied Agentic AI Engineering',
    status: 'In progress',
    institution: 'Governor Sindh Initiative for GenAI, Web3, and Metaverse',
    href: 'https://www.governorsindh.com/',
  },
  {
    title: 'Matriculation',
    status: 'Completed',
    institution: 'SMIU Model School',
    href: 'https://www.smiu.edu.pk/School',
  },
];

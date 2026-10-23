import { configDotenv } from "dotenv";

//  1. MY DETAILS
export const ME = {
  email: "hasnatbin1@gmail.com",
  phone: "+8801876387733",
  wa: "8801876387733",

  photo: "photo.jpg",

  resume: "ResumeV2.pdf",

  // Social links.
  social: [
    ["github", "GitHub", "https://github.com/Hasnat-Sayed"],
    ["linkedin", "LinkedIn", "https://www.linkedin.com/in/hasnat-bin-sayed/"],
    ["facebook", "Facebook", "https://www.facebook.com/hasnatbin.sayed1/"],

  ],
}

//  2. PROJECTS
export const P = {
  blood: {
    n: "Blood Bridge",
    e: "🩸",
    c: "#e11d48,#f97316",
    s: "Blood donation and funding platform",
    tech: ["React", "Tailwind", "Firebase", "Node.js", "Express", "MongoDB", "Stripe"],
    d: "A full-stack platform that connects blood donors with people in need. Users sign in securely, post and respond to donation requests, and search donors by blood group. Stripe powers a funding feature so supporters can contribute to the cause. Firebase handles authentication, and a Node.js and Express API protected with JWT stores the data in MongoDB, with role-based dashboards for donors and admins",
    live: "https://blood-bridge-2099.netlify.app/",
    gh: ["https://github.com/Hasnat-Sayed/BloodBridge-Client", "https://github.com/Hasnat-Sayed/BloodBridge-Server"],
    img: "projects/bb/bb-main.png",
    shots: ["projects/bb/bb1.png", "projects/bb/bb2.png", "projects/bb/bb3.png",, "projects/bb/bb4.png", "projects/bb/bb5.png", "projects/bb/bb6.png"],
    ch: ["Securing API routes with JWT alongside Firebase authentication", "Integrating Stripe payments and confirming funding on the server", "Making search by blood group fast and accurate", "Keeping the donation request flow simple for people in urgent need"],
    fu: ["Location-based donor matching", "SMS and email alerts for urgent requests", "Admin analytics dashboard"]
  },
  devpulse: {
    n: "DevPulse",
    e: "🛠️",
    c: "#4f46e5,#06b6d4",
    s: "Full-stack issue and feature tracker",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Express", "PostgreSQL"],
    d: "A full-stack issue and feature tracker for software teams. The REST API (Node.js, Express, PostgreSQL) handles JWT authentication, role-based authorization and consistent error handling. The Next.js frontend adds a responsive dark UI with search and filters, an issue details page with a progress tracker, and role-aware actions for contributors and maintainers. Both parts are deployed on Vercel.",
    live: "https://dev-pulse-frontend-theta.vercel.app/",
    gh: ["https://github.com/Hasnat-Sayed/DevPulse-Frontend", "https://github.com/Hasnat-Sayed/DevPulse"],
    img: "projects/DP/dp-main.png",
    shots: ["projects/DP/dp1.png", "projects/DP/dp2.png"],
    ch: ["Mirroring the backend's role rules in the UI (who can edit, change status or delete)", "Handling JWT sessions: restore on reload, expiry and 401 responses", "Building a consistent dark design system with shadcn/ui and Tailwind"],
    fu: ["Real-time notifications", "Comments and file attachments", "Server-side search and pagination"]
  },
  // gearup: {
  //   n: "GearUp", e: "🎒", c: "#0ea5e9,#6366f1", s: "Sports & outdoor gear rental backend", tech: ["Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
  //   d: "Backend for renting sports and outdoor gear with Customer, Provider and Admin roles, Zod validation, Stripe payments, reviews and Postman-documented APIs.", live: "" /* TODO live URL */, gh: "" /* TODO GitHub repo URL */,

  //   img: "",      // main screenshot, e.g. "projects/devpulse-home.png"
  //   shots: [],    // more screenshots, e.g. ["projects/devpulse-1.png", "projects/devpulse-2.png"]
  //   ch: ["Stripe checkout and webhook flow", "Modelling rentals, orders and roles in Prisma", "Server-side validation with structured errors"], fu: ["Availability calendar", "Damage deposits", "A customer-facing frontend"]
  // },
  
  paw: {
    n: "PawMart",
    e: "🐾",
    c: "#10b981,#3b82f6",
    s: "Pet adoption & supplies marketplace",
    tech: ["React", "Tailwind", "DaisyUI", "Firebase", "Node.js", "Express", "MongoDB"],
    d: "A full-stack marketplace for pet adoption and pet supplies. Visitors browse the latest listings, filter by category, and search by name. Signed-in users add and manage their own listings, place orders, and track them from a personal dashboard. The responsive React interface includes a dark and light theme toggle, with Firebase Authentication on the client and an Express and MongoDB Atlas REST API behind it.",
    live: "https://pawmart-2099.netlify.app/",
    gh: ["https://github.com/Hasnat-Sayed/PawMart-client", "https://github.com/Hasnat-Sayed/PawMart-Server"],
    img: "projects/PM/pmMain.png",
    shots: ["projects/PM/sspm1.png", "projects/PM/sspm2.png"],
    ch: ["Linking orders to users by email without storing users on the server", "Building category filtering and search over MongoDB listings", "Keeping listing state and auth in sync across pages", "Making image-heavy pages responsive without slowing the load"],
    fu: ["Chat between owners and adopters", "Online payments", "Reviews and ratings", "Favorites and wishlist"]
  }
};

//  3. SKILLS
export const SK = {
  Languages: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  Frontend: ["HTML", "CSS", "React", "Next.js", "Tailwind", "DaisyUI", "shadcn"], "Backend & Database": ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB", "JWT",],
  "Tools & Platforms": ["Git", "GitHub", "Postman", "Vercel", "Firebase", "Colab"]
};

//  4. TEXT CONTENT: hero titles, about, education, experience

export const ROLES = ['Junior Full Stack Developer', 'Junior Web Developer', 'MERN Stack Developer'];

export const HERO_TEXT = 'A CSE undergraduate building full-stack web applications with NextJS, React, TypeScript, Node.js, Express.js PostgreSQL and MongoDB, from REST APIs and authentication to payment integrations. Undergraduate Teaching Assistant at IIUC.';

export const ABOUT = [
  'I am a CSE undergraduate at IIUC who started with C and C++ and found my footing in web development. Today I build full-stack apps with React, Node.js, Express and MongoDB, with a focus on clean REST APIs, secure authentication and smooth payment flows.',
  'Working as a Teaching Assistant, I review the code and projects of other students, which keeps my own standards high. I am now looking for a junior web or full stack role where I can help build real products. Alongside that, I am part of a thesis team researching human action recognition, and my earlier competitive programming gave me a solid problem-solving base.'];

// STATS:
export const STATS = [['3.87', 'CGPA / 4.00'], ['2', 'TA roles'], ['4+', 'Projects'], ['1', 'Thesis']];

export const EDU = [
  { when: 'Jan 2023 \u2013 Present', title: 'BSc in Computer Science & Engineering', sub: 'International Islamic University Chittagong (IIUC) \u00b7 CGPA 3.866 / 4.00 \u00b7 Currently in 8th semester' },
  { when: '2019 \u2013 2022', title: 'Higher Secondary Certificate (HSC), Science Group', sub: 'Bakolia Govt. College \u00b7 GPA 5.00' },
  { when: '2013 \u2013 2019', title: 'Secondary School Certificate (SSC), Science Group', sub: 'Bakolia Govt. High School \u00b7 GPA 5.00' }];


// EXPERIENCE:
export const EXP = {
  Experience: [
    { when: 'Autumn 2026', title: 'Teaching Assistant', org: 'Compiler Construction Lab \u00b7 IIUC', text: 'Evaluate lab work in Lex/Flex and YACC/Bison, including lexical analyzers for C/C++, and invigilate exams.' },
    { when: 'Spring 2026', title: 'Teaching Assistant', org: 'Software Engineering Lab \u00b7 IIUC', text: 'Graded full-stack projects, presented a complete project walkthrough, marked midterm papers and invigilated exams.' }],
  Research: [
    { when: 'Ongoing', title: 'Thesis: Human Action Recognition', org: 'Team of three \u00b7 Supervised by Md. Khaliluzzaman', text: 'Proposing a hybrid CNN-GCN framework with cross-attention fusion for human action recognition, targeting a Q2 journal publication.' }],
  Certification: [
    { when: 'Certification', title: 'Complete Web Development Course', org: 'Programming Hero', text: 'Hands-on training in modern web development.' }]
};

export const WEB3FORMS_KEY = import.meta.env.VITE_FORM;

import {
  SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript,
  SiHtml5, SiReact, SiNextdotjs, SiTailwindcss, SiDaisyui, SiShadcnui,
  SiNodedotjs, SiExpress, SiPrisma, SiPostgresql, SiMongodb, SiJsonwebtokens,
  SiGit, SiGithub, SiPostman, SiVercel, SiFirebase, SiGooglecolab,
} from 'react-icons/si'
import { SiCss } from 'react-icons/si'
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter, FaDatabase } from 'react-icons/fa6'

const SKILL_ICON = {
  C: [SiC, '#A8B9CC'],
  'C++': [SiCplusplus, '#00599C'],
  Python: [SiPython, '#3776AB'],
  JavaScript: [SiJavascript, '#F7DF1E'],
  TypeScript: [SiTypescript, '#3178C6'],
  SQL: [FaDatabase, '#0ea5e9'],
  HTML: [SiHtml5, '#E34F26'],
  CSS: [SiCss, '#1572B6'],
  React: [SiReact, '#61DAFB'],
  'Next.js': [SiNextdotjs, ''],
  Tailwind: [SiTailwindcss, '#06B6D4'],
  DaisyUI: [SiDaisyui, '#F7DF1E'],
  shadcn: [SiShadcnui, ''],
  'Node.js': [SiNodedotjs, '#5FA04E'],
  Express: [SiExpress, ''],
  Prisma: [SiPrisma, ''],
  PostgreSQL: [SiPostgresql, '#4169E1'],
  MongoDB: [SiMongodb, '#47A248'],
  JWT: [SiJsonwebtokens, ''],
  Git: [SiGit, '#F03C2E'],
  GitHub: [SiGithub, ''],
  Postman: [SiPostman, '#FF6C37'],
  Vercel: [SiVercel, ''],
  Firebase: [SiFirebase, '#DD2C00'],
  Colab: [SiGooglecolab, '#F9AB00'],
}

export function SkillIcon({ n }) {
  if (n === 'C') return (
    <svg className="size-13" viewBox="0 0 24 24">
      <path d="M12 1.5l9.1 5.25v10.5L12 22.5l-9.1-5.25V6.75z" fill="#00599C" stroke="#00599C" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M15.52 9.04A4.6 4.6 0 1 0 15.52 14.96" fill="none" stroke="#ffffff" strokeWidth="2.4" />
    </svg>
  )
  const entry = SKILL_ICON[n]
  if (!entry) return n.slice(0, 2)
  const [Icon, color] = entry
  return <Icon className="size-12" style={color ? { color } : undefined} />
}

const SOCIAL_ICON = { github: FaGithub, linkedin: FaLinkedin, facebook: FaFacebook, x: FaXTwitter }

export function SocialLinks({ items, className = '' }) {
  return (
    <div className={'flex gap-3 ' + className}>
      {items.filter(([, , url]) => url).map(([k, label, url]) => {
        const Icon = SOCIAL_ICON[k]
        return (
          <a key={k} href={url} title={label} aria-label={label} target="_blank" rel="noopener noreferrer"
            className="grid size-[46px] place-items-center rounded-[14px] bg-linear-to-br from-brand to-brand2 text-white shadow-lg shadow-brand/30 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-brand/40 hover:brightness-110">
            {Icon ? <Icon className="size-[22px]" /> : null}
          </a>
        )
      })}
    </div>
  )
}
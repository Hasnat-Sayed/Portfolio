import { useNavigate } from 'react-router-dom'
import { ME, ROLES, HERO_TEXT } from '../data/content.js'
import { SocialLinks } from './Icons.jsx'
import { W, BTN, BTN_P, GRAD_TEXT } from '../ui.js'

const AVATAR = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" fill="#e0e7ff"/><circle cx="100" cy="78" r="36" fill="#818cf8"/><path d="M30 190a70 70 0 0 1 140 0z" fill="#818cf8"/></svg>')

export default function Hero() {
  const navigate = useNavigate()
  return (
    <header id="home" className="pt-[70px] pb-[60px]">
      <div className={W + ' grid items-center gap-10 text-center md:grid-cols-[1.3fr_1fr] md:text-left'}>
        <div className="rv">
          <span className="inline-block rounded-full border border-line bg-card px-3.5 py-1 text-[13px] text-brand"> 🟢 Open to junior web &amp; full stack roles</span>
          <h1 className="mt-4 mb-2.5 text-[clamp(2.2rem,6vw,3.8rem)] leading-[1.1] font-bold tracking-tighter">
            <span className={GRAD_TEXT}>Hasnat Bin Sayed</span>
          </h1>
          <div className={'h-8 overflow-hidden text-xl font-semibold '}>
            <div className="animate-role">{ROLES.map(r => <span key={r} className="block h-8">{r}</span>)}</div>
          </div>
          <p className="mx-auto mt-3 max-w-[560px] text-muted md:mx-0">{HERO_TEXT}</p>
          <div className="mt-[22px] flex flex-wrap justify-center gap-3 md:justify-start">
            <a className={BTN_P} href={ME.resume || '#/'} {...(ME.resume ? { target: '_blank', rel: 'noopener noreferrer', download: true } : {})}>Download Resume</a>
            <a className={BTN} href="#/projects" onClick={e => { e.preventDefault(); navigate('/', { state: { scroll: 'projects' } }) }}>View Projects</a>
          </div>
          <SocialLinks items={ME.social} className="mt-[22px] justify-center md:justify-start" />
        </div>
        <div className="order-first aspect-square w-[min(300px,70vw)] animate-float justify-self-center rounded-full bg-linear-to-br from-brand to-brand2 p-[5px] md:order-none">
          <img src={ME.photo || AVATAR} alt="Hasnat" className="size-full rounded-full bg-card object-cover" />
        </div>
      </div>
    </header>
  )
}

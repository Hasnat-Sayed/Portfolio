import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { W } from '../ui.js'

const LINKS = ['about', 'skills', 'education', 'experience', 'projects', 'contact']
const iconBtn = 'size-9 cursor-pointer rounded-[10px] border border-line bg-card text-base'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const navigate = useNavigate()
  const go = (e, id) => { e.preventDefault(); setOpen(false); navigate('/', { state: id ? { scroll: id } : null }) }
  const toggleTheme = () => { document.documentElement.classList.toggle('dark', !dark); setDark(!dark) }

  return (
    <nav className="sticky top-0 z-30 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className={W + ' flex h-[60px] items-center justify-between'}>
        <a href="#/" onClick={e => go(e)} className="inline-block text-xl font-extrabold transition hover:scale-105">
          Hasnat<b className="text-brand">.</b>
        </a>
        <div className={(open ? 'flex' : 'hidden') + ' absolute inset-x-0 top-[60px] flex-col gap-3.5 border-b border-line bg-bg p-4 text-sm text-muted md:static md:flex md:flex-row md:items-center md:gap-[22px] md:border-0 md:bg-transparent md:p-0'}>
          {LINKS.map(id => (
            <a key={id} href={'#/' + id} onClick={e => go(e, id)}
              className="relative py-1 capitalize transition hover:-translate-y-px hover:text-brand after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded after:bg-linear-to-r after:from-brand after:to-brand2 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100">
              {id}
            </a>
          ))}
        </div>
        <div className="flex gap-1.5">
          <button className={iconBtn} onClick={toggleTheme} aria-label="Toggle theme">◐</button>
          <button className={iconBtn + ' md:hidden'} onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        </div>
      </div>
    </nav>
  )
}

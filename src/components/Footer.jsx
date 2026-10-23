import { Link } from 'react-router-dom'
import { ME } from '../data/content.js'
import { SocialLinks } from './Icons.jsx'
import { W } from '../ui.js'

const LINKS = ['about', 'skills', 'education', 'experience', 'projects', 'contact']
const link = 'transition hover:text-brand'
const h5 = 'mb-4 text-xs font-semibold tracking-[.1em] text-ink uppercase'

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-line bg-card text-sm text-muted before:absolute before:inset-x-0 before:-top-px before:h-0.5 before:bg-linear-to-r before:from-transparent before:via-brand before:to-transparent before:content-['']">
      <div className={W + ' grid gap-[30px] pt-[52px] pb-[38px] md:grid-cols-[1.5fr_1.2fr_1fr] md:gap-9'}>
        <div>
          <Link to="/" className="text-xl font-extrabold text-ink">Hasnat<b className="text-brand">.</b></Link>
          <p className="mt-2.5 max-w-[310px]">Junior full stack developer building reliable web applications with React, Node.js and MongoDB.</p>
        </div>
        <div>
          <h5 className={h5}>Explore</h5>
          <div className="grid grid-cols-2 gap-x-[18px] gap-y-2.5">
            <Link to="/" className={link}>Home</Link>
            {LINKS.map(id => <Link key={id} to="/" state={{ scroll: id }} className={link + ' capitalize'}>{id}</Link>)}
          </div>
        </div>
        <div>
          <h5 className={h5}>Connect</h5>
          <SocialLinks items={ME.social} />
          <a href={'mailto:' + ME.email} className={link + ' mt-[18px] block break-all'}>{ME.email}</a>
        </div>
      </div>
      <div className={W + ' flex flex-wrap items-center justify-between gap-3 border-t border-line pt-[22px] pb-[26px]'}>
        <span>© {new Date().getFullYear()} Hasnat. All rights reserved.</span>
        <Link to="/" className="font-semibold text-brand transition hover:-translate-y-0.5">Back to top ↑</Link>
      </div>
    </footer>
  )
}

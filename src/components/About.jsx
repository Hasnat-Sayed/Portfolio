import { ABOUT, STATS } from '../data/content.js'
import { W, H2, GRAD_TEXT } from '../ui.js'

const S = ({ children }) => (
  <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
)
const STAT_ICONS = [
  <S><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11.2V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.8" /><path d="M22 9v6" /></S>,
  <S><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4M7 9h6M7 12h4" /></S>,
  <S><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M10 13l-2 2 2 2M14 13l2 2-2 2" /></S>,
  <S><path d="M9 3h6M10 3v6L5 19a1.6 1.6 0 0 0 1.4 2.4h11.2A1.6 1.6 0 0 0 19 19l-5-10V3M7.5 15h9" /></S>
]

export default function About() {
  return (
    <section id="about" className="py-[60px]">
      <div className={W + ' rv grid gap-[30px] md:grid-cols-[1.4fr_1fr]'}>
        <div>
          <h2 className={H2}>About Me</h2>
          {ABOUT.map(t => <p key={t} className="mb-3.5 text-muted">{t}</p>)}
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          {STATS.map(([n, l], i) => (
            <div key={l} className="group flex min-h-[130px] flex-col items-center justify-center gap-0.5 rounded-2xl border border-line bg-card px-3 py-[18px] text-center transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-800">
              <span className="mb-2 grid size-[50px] place-items-center rounded-2xl bg-linear-to-br from-brand to-brand2 text-white shadow-lg shadow-brand/30 transition duration-300 group-hover:-rotate-6 group-hover:scale-105">{STAT_ICONS[i]}</span>
              <b className={'text-[1.6rem] ' + GRAD_TEXT}>{n}</b>
              <small className="text-sm text-muted">{l}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

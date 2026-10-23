import { useState } from 'react'
import { EXP } from '../data/content.js'
import { W, H2, CARD, GRID, CHIP } from '../ui.js'

export default function Experience() {
  const tabs = Object.keys(EXP)
  const [tab, setTab] = useState(tabs[0])
  return (
    <section id="experience" className="py-[60px]">
      <div className={W + ' rv'}>
        <h2 className={H2}>Experience &amp; Achievements</h2>
        <div role="tablist" className="mb-[26px] inline-flex max-w-full gap-1.5 overflow-x-auto rounded-2xl border border-line bg-card p-1.5">
          {tabs.map(t => (
            <button key={t} role="tab" aria-selected={t === tab} onClick={() => setTab(t)}
              className={'cursor-pointer rounded-[11px] px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition ' + (t === tab
                ? 'bg-linear-to-r from-brand to-brand2 text-white shadow-lg shadow-brand/30'
                : 'text-muted hover:text-brand')}>
              {t}
            </button>
          ))}
        </div>
        <div key={tab} className="animate-fade-up">
          <div className={GRID}>
            {EXP[tab].map(x => (
              <div key={x.title + x.when} className={CARD}>
                <span className={CHIP + ' mb-3 inline-block'}>{x.when}</span>
                <h3 className="mb-1.5 text-[1.1rem] font-semibold">{x.title}</h3>
                <div className="mb-2.5 text-[.9rem] font-semibold text-brand">{x.org}</div>
                <p className="text-[.94rem] text-muted">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { SK } from '../data/content.js'
import { SkillIcon } from './Icons.jsx'
import { W, H2, CARD } from '../ui.js'

export default function Skills() {
  return (
    <section id="skills" className="py-[60px]">
      <div className={W + ' rv'}>
        <h2 className={H2}>Skills</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {Object.keys(SK).map(group => (
            <div className={CARD} key={group}>
              <h3 className="mb-3.5 text-[13px] font-bold tracking-widest text-muted">{group.toUpperCase()}</h3>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(84px,1fr))] gap-x-2.5 gap-y-3.5">
                {SK[group].map(s => (
                  <div key={s} title={s} className="group/t text-center text-xs font-semibold text-muted">
                    <i className="mx-auto mb-1.5 grid size-[72px] place-items-center rounded-[15px] border border-line bg-bg text-ink not-italic transition duration-300 group-hover/t:-translate-y-1 group-hover/t:scale-110 group-hover/t:shadow-md group-hover/t:shadow-emerald-800">
                      <SkillIcon n={s} />
                    </i>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

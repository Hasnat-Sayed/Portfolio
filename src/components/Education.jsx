import { EDU } from '../data/content.js'
import { W, H2 } from '../ui.js'

export default function Education() {
  return (
    <section id="education" className="py-[60px]">
      <div className={W + ' rv'}>
        <h2 className={H2}>Education</h2>
        <div className="mb-9 grid gap-6 border-l-2 border-line pl-6">
          {EDU.map(e => (
            <div key={e.title} className="relative before:absolute before:top-[7px] before:-left-[31px] before:size-3 before:rounded-full before:bg-brand before:shadow-[0_0_0_4px_var(--bg)] before:content-['']">
              <small className="text-sm font-semibold text-brand">{e.when}</small>
              <h4 className="text-[1.05rem] font-semibold">{e.title}</h4>
              <p className="mt-1 text-[.94rem] text-muted">{e.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

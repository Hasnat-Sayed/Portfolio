import { Link } from 'react-router-dom'
import { P } from '../data/content.js'
import { W, H2, CARD, GRID, CHIP } from '../ui.js'

export default function Projects() {
  return (
    <section id="projects" className="py-[60px]">
      <div className={W + ' rv'}>
        <h2 className={H2}>Projects</h2>
        <div className={GRID}>
          {Object.keys(P).map(id => {
            const p = P[id]
            return (
              <Link key={id} to={'/project/' + id} className={CARD}>

                {p.img ? (
                  <div className="mb-4 h-[150px] overflow-hidden rounded-[14px] border border-line">
                    <img src={p.img} alt={p.n} loading="lazy"
                      className="size-full object-cover object-top transition duration-500 group-hover:scale-105" />
                  </div>
                ) : (
                  /* your existing gradient <div ...>{p.e}</div> stays here unchanged */
                  <div style={{ background: `linear-gradient(135deg,${p.c})` }}
                    className="relative mb-4 grid h-[150px] place-items-center overflow-hidden rounded-[14px] text-[2.6rem] text-white after:absolute after:inset-0 after:-translate-x-full after:bg-linear-to-r after:from-transparent after:via-white/25 after:to-transparent after:transition-transform after:duration-700 after:content-[''] group-hover:after:translate-x-full">
                    {p.e}
                  </div>
                )}

                <h3 className="mb-1.5 text-[1.1rem] font-semibold">{p.n}</h3>
                <p className="mb-3 text-[.94rem] text-muted">{p.s}</p>
                <div className="mb-4 flex flex-wrap gap-1.5">{p.tech.map(t => <span key={t} className={CHIP}>{t}</span>)}</div>
                <span className="block w-full rounded-[11px] bg-linear-to-r from-brand to-brand2 px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 hover:shadow-lg group-hover:shadow-md">View Details</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

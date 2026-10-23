import { Link, Navigate, useParams } from 'react-router-dom'
import { P } from '../data/content.js'
import { W, BTN, BTN_P, CHIP } from '../ui.js'

const List = ({ items }) => <ul className="list-disc space-y-1 pl-5 text-muted">{items.map(x => <li key={x}>{x}</li>)}</ul>
const H3 = 'mt-8 mb-2.5 text-xl font-semibold'
const Btn = ({ url, children, primary }) => (
  <a className={(primary ? BTN_P : BTN) + (url ? '' : ' pointer-events-none opacity-50')} {...(url ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : {})}>
    {children}{url ? '' : ' (coming soon)'}
  </a>
)

export default function ProjectDetail() {
  const { id } = useParams()
  const p = P[id]
  if (!p) return <Navigate to="/" replace />
  return (
    <div className={W + ' py-[50px]'}>
      <Link to="/" state={{ scroll: 'projects' }} className="font-semibold text-brand">← Back to projects</Link>
      {p.img ? (
        <img src={p.img} alt={p.n}
          className="mt-5 max-h-[460px] w-full rounded-[14px] border border-line object-cover object-top" />
      ) : (
        <div style={{ background: `linear-gradient(135deg,${p.c})` }} className="mt-5 grid h-[220px] place-items-center rounded-[14px] text-6xl text-white">{p.e}</div>
      )}

      <h1 className="my-4 text-4xl font-bold tracking-tight">{p.n}</h1>
      <div className="flex flex-wrap gap-1.5">{p.tech.map(t => <span key={t} className={CHIP}>{t}</span>)}</div>
      <div className="mt-[22px] flex flex-wrap gap-3">
        <Btn url={p.live} primary>🌐 Live Project</Btn>
        <Btn url={p.gh?.[0]}>Client Repo</Btn>
        <Btn url={p.gh?.[1]}>Server Repo</Btn>
      </div>
      <h3 className={H3}>Overview</h3>
      <p className="text-muted">{p.d}</p>
      {p.shots && p.shots.length > 0 && (
        <>
          <h3 className={H3}>Screenshots</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {p.shots.map(s => (
              <a key={s} href={s} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-xl border border-line">
                <img src={s} alt={p.n + ' screenshot'} loading="lazy"
                  className="w-full object-cover transition duration-500 hover:scale-[1.03]" />
              </a>
            ))}
          </div>
        </>
      )}
      <h3 className={H3}>Challenges faced</h3>
      <List items={p.ch} />
      <h3 className={H3}>Future plans</h3>
      <List items={p.fu} />
    </div>
  )
}

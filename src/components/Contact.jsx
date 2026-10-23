import { useState } from 'react'
import { ME, WEB3FORMS_KEY } from '../data/content.js'
import { W, H2, BTN_P } from '../ui.js'
import { FaWhatsapp } from 'react-icons/fa6'

const Ln = ({ className = 'size-[22px]', children }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
)
const panel = 'rounded-[22px] border border-line bg-card p-6 sm:p-8'
const h3 = 'mb-1.5 text-[1.3rem] font-semibold tracking-tight'
const sub = 'mb-6 text-[.95rem] text-muted'
const row = 'group flex items-center gap-4 rounded-2xl border border-line bg-bg px-4 py-3.5 transition duration-300 hover:translate-x-1 hover:border-brand hover:shadow-lg hover:shadow-brand/10'
const ico = 'grid size-[46px] flex-none place-items-center rounded-[14px]'
const label = 'grid gap-2 text-[13px] font-semibold text-muted'
const field = 'w-full rounded-[13px] border border-line bg-bg px-4 py-3.5 text-[15px] font-normal text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-4 focus:ring-brand/15'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [msg, setMsg] = useState('')
  const [busy, setBusy] = useState(false)
  const set = k => e => setF({ ...f, [k]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    setBusy(true)
    try {
      const r = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject: 'New portfolio message from ' + f.name, from_name: 'Portfolio', ...f })
      })
      const j = await r.json()
      if (!j.success) throw new Error()
      setMsg('✓ Message sent. Thank you!')
      setF({ name: '', email: '', message: '' })
    } catch {
      location.href = `mailto:${ME.email}?subject=${encodeURIComponent('Portfolio message from ' + f.name)}&body=${encodeURIComponent(f.message + '\n\n' + f.email)}`
      setMsg('Could not send directly. Opening your email app…')
    }
    setBusy(false)
  }

  return (
    <section id="contact" className="py-[60px]">
      <div className={W + ' rv'}>
        <h2 className={H2}>Contact</h2>
        <div className="grid gap-6 md:grid-cols-[5fr_7fr]">
          <div className={panel}>
            <h3 className={h3}>Get in touch</h3>
            <p className={sub}>Have an opportunity, a project idea or just want to say hello? Reach out directly or send a message.</p>
            <div className="grid gap-3">
              <a className={row} href={'mailto:' + ME.email}>
                <i className={ico + ' bg-brand/10 text-brand'}><Ln><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3.5 7.5l8.5 6 8.5-6" /></Ln></i>
                <span className="min-w-0"><small className="block text-[11px] tracking-[.09em] text-muted uppercase">Email</small><b className="block text-[.97rem] font-semibold break-words">{ME.email}</b></span>
              </a>
              <a className={row} href={'tel:' + ME.phone}>
                <i className={ico + ' bg-brand/10 text-brand'}><Ln><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" /></Ln></i>
                <span className="min-w-0"><small className="block text-[11px] tracking-[.09em] text-muted uppercase">Phone</small><b className="block text-[.97rem] font-semibold break-words">{ME.phone}</b></span>
              </a>
              <a
                className={row}
                href={'https://wa.me/' + ME.wa}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={ico + ' bg-brand/10 text-brand'}>
                  <FaWhatsapp size={20} />
                </i>

                <span className="min-w-0">
                  <small className="block text-[11px] tracking-[.09em] text-muted uppercase">
                    WhatsApp
                  </small>
                  <b className="block text-[.97rem] font-semibold">
                    Message me directly
                  </b>
                </span>
              </a>
            </div>
          </div>
          <div className={panel}>
            <h3 className={h3}>Send a message</h3>
            <p className={sub}>I will get back to you as soon as I can.</p>
            <form onSubmit={submit} className="grid gap-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className={label}>Name<input className={field} value={f.name} onChange={set('name')} placeholder="Your name" required /></label>
                <label className={label}>Email<input className={field} type="email" value={f.email} onChange={set('email')} placeholder="you@example.com" required /></label>
              </div>
              <label className={label}>Message<textarea className={field + ' resize-y'} rows="3" value={f.message} onChange={set('message')} placeholder="Write your message here" required /></label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <button
                  type="submit"
                  disabled={busy}
                  className={
                    BTN_P +
                    ' mt-1.5 flex w-full items-center justify-center gap-3 px-5 py-3.5 disabled:opacity-60 sm:w-max sm:px-7.5'
                  }
                >
                  {busy ? 'Sending…' : 'Send Message'}
                </button>

                <div
                  aria-live="polite"
                  className="flex min-h-5 items-center justify-center text-center text-sm text-brand sm:justify-start sm:text-left"
                >
                  {msg}
                </div>
              </div>


            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

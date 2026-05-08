import { motion } from 'framer-motion'
import { fadeUp, viewportOptions } from '../hooks/useAnimations'

const rows = [
  { name: 'Signature Panchakarma Detox', bestFor: 'Full body detox, immunity, anti-ageing', prices: ['7 Days: ₹46,000', '14 Days: ₹91,000', '21 Days: ₹1,36,000', '28 Days: ₹1,83,000'] },
  { name: 'Spine Care', bestFor: 'Back pain, sciatica, cervical issues', prices: ['7 Days: ₹45,000', '14 Days: ₹90,000', '21 Days: ₹1,35,000'] },
  { name: 'Joint Care', bestFor: 'Arthritis, knee pain, sports injuries', prices: ['7 Days: ₹46,000', '14 Days: ₹90,000'] },
  { name: 'Weight Loss', bestFor: 'Obesity, slow metabolism, cellulite', prices: ['14 Days: ₹95,000', '21 Days: ₹1,43,000', '28 Days: ₹1,90,000'] },
  { name: 'Hormone Balance', bestFor: 'PCOS, thyroid, menopause, fertility', prices: ['14 Days: ₹90,000', '21 Days: ₹1,30,000'] },
]

export default function Pricing() {
  return (
    <section className="section pricing" id="pricing" style={{ background: 'var(--clr-bg-deep)' }}>
      <motion.div
        style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto', paddingBottom: '2rem' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <p className="section__label" style={{ justifyContent: 'center' }}>Programme Summary</p>
        <h2 className="section__title">Packages &amp; Pricing</h2>
        <p className="section__subtitle" style={{ margin: '0 auto' }}>
          Every programme includes physician consultation, personalised medicines, diet plan, yoga, and discharge summary.
        </p>
      </motion.div>

      <motion.div
        className="pricing__container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <div className="pricing__table-wrapper">
          <table className="pricing__table">
            <thead>
              <tr>
                <th>Programme</th>
                <th>Best For</th>
                <th>Duration Options &amp; Price (INR)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(r => (
                <tr key={r.name}>
                  <td><strong>{r.name}</strong></td>
                  <td>{r.bestFor}</td>
                  <td>{r.prices.map(p => <span className="price-tag" key={p}>{p}</span>)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  )
}

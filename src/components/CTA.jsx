import { motion } from 'framer-motion'
import { fadeUp, viewportOptions } from '../hooks/useAnimations'
import { Link } from 'react-router-dom'

const MandalaIcon = () => (
  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: 'var(--clr-gold)' }}>
    <circle cx="100" cy="100" r="90" /><circle cx="100" cy="100" r="70" />
    <circle cx="100" cy="100" r="50" /><circle cx="100" cy="100" r="30" />
    <line x1="100" y1="10" x2="100" y2="190" /><line x1="10" y1="100" x2="190" y2="100" />
    <line x1="30" y1="30" x2="170" y2="170" /><line x1="170" y1="30" x2="30" y2="170" />
  </svg>
)

export default function CTA() {
  return (
    <section className="section cta" id="cta">
      <motion.div
        className="cta__mandala cta__mandala--left"
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
      >
        <MandalaIcon />
      </motion.div>
      <motion.div
        className="cta__mandala cta__mandala--right"
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
      >
        <MandalaIcon />
      </motion.div>

      <motion.div
        style={{ position: 'relative', zIndex: 2 }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <p className="section__label" style={{ justifyContent: 'center' }}>Begin Your Transformation</p>
        <h2 className="cta__title">Your Body Already Knows<br />How to <em>Heal</em></h2>
        <p className="cta__subtitle">
          Let us guide you back to balance. Take the first step towards a healthier, more harmonious life with Merry Land Ayurvedic Centre.
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--clr-text-dim)', marginTop: '1rem', marginBottom: '2rem', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
          ⚠️ Disclaimer: All treatments are administered under the supervision of qualified Ayurvedic physicians. Results may vary based on individual constitution and health condition.
        </p>
        <div className="cta__buttons">
          <Link to="/book" className="btn btn--primary" id="btn-book">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book Consultation
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

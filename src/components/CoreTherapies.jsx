import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOptions } from '../hooks/useAnimations'

const therapies = [
  {
    title: 'Vamana',
    desc: 'Therapeutic emesis to expel excess Kapha — ideal for respiratory & skin conditions.',
    icon: <path d="M12 2v10m0 0l-3-3m3 3l3-3m-3 10c-5 0-9-4-9-9h18c0 5-4 9-9 9z" />,
  },
  {
    title: 'Virechana',
    desc: 'Therapeutic purgation to eliminate excess Pitta — supports liver & digestive health.',
    icon: <path d="M12 2v20m-5-5l5 5 5-5" />,
  },
  {
    title: 'Basti',
    desc: 'Medicated enema — the most powerful Vata-balancing therapy; nourishes deep tissues.',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: 'Nasya',
    desc: 'Nasal administration of herbal oils — clears sinus, improves brain & sensory function.',
    icon: <><circle cx="12" cy="8" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></>,
  },
  {
    title: 'Raktamokshana',
    desc: 'Blood purification therapy — eliminates toxins from the bloodstream.',
    icon: <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />,
  },
]

export default function CoreTherapies() {
  return (
    <section className="section imbalance" id="core-therapies">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <p className="section__label">Shodanas</p>
        <h2 className="section__title">The Five Core Therapies</h2>
        <p className="section__subtitle">
          These five therapies form the foundation of Pradhanakarma, providing deep cellular detoxification and doshic balance.
        </p>
      </motion.div>

      <motion.div
        className="imbalance__grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {therapies.map(t => (
          <motion.div
            className="imbalance__card"
            key={t.title}
            variants={fadeUp}
            whileHover={{ y: -6, borderColor: 'var(--clr-gold)', boxShadow: '0 12px 40px rgba(193,167,103,0.12)' }}
            transition={{ duration: 0.25 }}
          >
            <div className="imbalance__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{t.icon}</svg>
            </div>
            <h3 className="imbalance__card-title">{t.title}</h3>
            <p className="imbalance__card-desc">{t.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

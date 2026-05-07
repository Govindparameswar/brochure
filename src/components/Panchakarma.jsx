import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportOptions } from '../hooks/useAnimations'

export default function Panchakarma() {
  return (
    <section className="section about" id="panchakarma">
      <div className="about__content">
        <div className="about__text">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            <p className="section__label">What is Panchakarma?</p>
            <h2 className="section__title">The Ancient Science of Deep Healing</h2>
          </motion.div>
          <motion.p className="about__story" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            Panchakarma — meaning "Five Therapeutic Actions" — is Ayurveda's most powerful detoxification and rejuvenation system.
          </motion.p>
          <motion.p className="about__desc" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
            It cleanses the body at the cellular level, eliminates accumulated toxins (Ama), and restores the natural balance of the three doshas — Vata, Pitta, and Kapha. Every programme begins with a personalised physician consultation to understand your unique body constitution (Prakriti) and design the ideal treatment plan.
          </motion.p>

          <motion.div
            className="about__highlights"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {[
              {
                icon: <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
                title: 'Purvakarma (Preparation Phase)',
                body: <><strong>Snehana</strong> — Internal &amp; external oleation with medicated herbal oils to loosen deep-seated toxins.<br /><strong>Swedana</strong> — Herbal steam therapy to open channels and mobilise toxins.</>,
              },
              {
                icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
                title: 'Pradhanakarma (Main Cleansing Phase)',
                body: 'The five core therapeutic actions (Shodanas) administered as per individual need to deeply purify the body.',
              },
              {
                icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
                title: 'Paschatkarma (Rejuvenation Phase)',
                body: 'Nourishing diet, herbal support, gentle routines & lifestyle guidance for long-term wellness.',
              },
            ].map(item => (
              <motion.div className="about__highlight" key={item.title} variants={fadeUp}>
                <div className="about__highlight-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about__visual"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div className="about__image-frame">
            <img src="/images/treatment-relaxation.webp" alt="Ayurvedic Panchakarma therapy" loading="lazy" />
          </div>
          <div className="about__image-badge">
            <div className="number">100%</div>
            <div className="label">Natural Healing</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { fadeUp, viewportOptions } from '../hooks/useAnimations'

export default function Doctor() {
  return (
    <section className="section about" id="doctor">
      <div
        className="about__content"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: 800, margin: '0 auto' }}
      >
        <motion.div
          className="about__visual"
          style={{ marginBottom: '1.5rem' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <div
            className="about__image-frame"
            style={{
              aspectRatio: '1/1',
              borderRadius: '50%',
              maxWidth: 280,
              border: '4px solid var(--clr-bg-mid)',
              outline: '2px solid var(--clr-gold)',
              outlineOffset: 2,
              margin: '0 auto',
            }}
          >
            <img
              src="/images/doctor.webp"
              alt="Dr. Hema Savithri"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
        </motion.div>

        <motion.div
          className="about__text"
          style={{ maxWidth: 700, width: '100%' }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <h2 className="section__title" style={{ marginBottom: '1.5rem' }}>
            Dr. Hema Savithri, <span style={{ fontSize: '0.85em', fontWeight: 300 }}>BAMS, MD (Ayurveda)</span>
          </h2>
          <p className="about__desc" style={{ fontStyle: 'italic' }}>
            "Dr. Hema Savithri is a senior Ayurvedic physician and educator with over 30 years of experience, dedicated to simplifying classical Ayurveda for everyday life. Through Kshemyayur, she empowers a growing community to achieve better health and balance using authentic, time-tested wisdom."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

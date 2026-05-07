import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOptions } from '../hooks/useAnimations'

const programmes = [
  {
    name: 'Signature Panchakarma Detox',
    img: '/images/treatment-detox.webp',
    short: 'Full body detox, immunity boost, stress relief, general wellness & anti-ageing. "Reset. Cleanse. Rejuvenate."',
    duration: '7 / 14 / 21 / 28 / 41 Days',
    desc: 'This is our flagship cleansing programme — a complete purification of body, mind, and consciousness. Recommended for a thorough internal reset or dealing with chronic fatigue, digestive issues, skin disorders, or stress.',
    items: [
      'Abhyanga & Svedana: Full body massage and steam to mobilize toxins.',
      'Shirodhara: Warm herbal oil poured over the forehead to calm the nervous system.',
      'Vamana & Virechana: Kapha and Pitta removal.',
      'Basti & Nasya: Vata management and sinus clearing.',
      'Diet & Herbs: Kichadi-based diet and customized formulations.',
    ],
  },
  {
    name: 'Spine Care Programme',
    img: '/images/treatment-relaxation.webp',
    short: 'For Back pain, Spondylosis, Sciatica, Disc problems, Cervical pain, Lumbar stiffness. "Stand Tall. Move Freely."',
    duration: '7 / 14 / 21 Days',
    desc: 'A medically supervised treatment designed to nourish, strengthen, and heal the spine. Provides deep relief from pain, inflammation, and nerve compression.',
    items: [
      'Spinal Abhyanga: Targeted medicated oil massage along the spine.',
      'Localised Basti: Kati Basti (lumbar), Greeva Basti (cervical), Prishtha Basti (full spine).',
      'Patra Pinda Swedana & Nadi Swedana: Leaf bolus steam and localised steam therapy.',
      'Pizhichil & Basti: Oil bath and medicated enema for Vata balance.',
    ],
  },
  {
    name: 'Joint Care Programme',
    img: '/images/treatment-rejuvenation.webp',
    short: 'For Arthritis, Rheumatoid Arthritis, Knee pain, Joint stiffness, Sports injuries, Gout. "Move with Ease."',
    duration: '7 / 14 / 21 Days',
    desc: 'A comprehensive approach to restoring joint health, reducing inflammation, and rebuilding cartilage strength. Targets root causes of joint degeneration.',
    items: [
      'Janu & Kati Basti: Localised oil retention for knee and hip joints.',
      'Patra Pinda Swedana & Navarakizhi: Herbal leaf and rice bolus steam massages.',
      'Upanaham & Dhanyamla Dhara: Herbal paste application and fermented liquid stream.',
      'Virechana & Basti: Systemic cleansing to eliminate Pitta and Vata imbalances.',
    ],
  },
  {
    name: 'Weight Loss Programme',
    img: '/images/treatment-detox.webp',
    short: 'For Obesity, Sluggish metabolism, Cellulite, Water retention, Fatty liver. "Shed the Toxins."',
    duration: '14 / 21 / 28 Days',
    desc: 'Not a crash diet — a deep metabolic reset rooted in Langhana (lightening therapies). Targets stubborn fat, detoxifies the lymphatic system, and fires up Agni.',
    items: [
      'Udvartana: Dry herbal powder massage to break down cellulite.',
      'Dhanyamla Dhara & Vashpa Swedana: Fermented liquid stream and herbal steam.',
      'Lekhana Basti: Weight-reducing medicated enema.',
      'Takra Dhara & Virechana: Buttermilk stream and therapeutic purgation.',
    ],
  },
  {
    name: 'Hormone Balance Programme',
    img: '/images/treatment-relaxation.webp',
    short: 'For PCOS, Thyroid imbalance, Menopause, Adrenal fatigue, Infertility support. "Restore Harmony Within."',
    duration: '14 / 21 Days',
    desc: "Detoxify endocrine glands, nourish reproductive tissues, and regulate the nervous system to restore your body's natural hormonal rhythm from within.",
    items: [
      'Shirodhara & Abhyanga: Calms the hypothalamus-pituitary axis and reduces cortisol.',
      'Uttara Basti: Specialised uterine/vaginal therapy (where indicated).',
      'Virechana & Basti: Clears liver Pitta and balances Vata.',
      'Nasya & Takra Dhara: Nourishes pituitary gland and cools excess Pitta.',
    ],
  },
]

export default function Programmes() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section className="section treatments" id="programmes">
      {/* Header */}
      <motion.div
        style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <p className="section__label" style={{ justifyContent: 'center' }}>Our Offerings</p>
        <h2 className="section__title">Healing Programmes</h2>
        <p className="section__subtitle" style={{ margin: '0 auto' }}>
          Each programme is medically supervised, incorporating powerful therapies to restore your body to optimal health.
        </p>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        className="treatments__grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        {programmes.map((p, i) => (
          <motion.div
            className={`treatment__card${expanded === i ? ' expanded' : ''}`}
            key={p.name}
            variants={scaleIn}
            onClick={() => setExpanded(expanded === i ? null : i)}
            whileHover={{ y: -6, borderColor: 'var(--clr-gold)', boxShadow: '0 16px 48px rgba(0,0,0,0.3)' }}
            transition={{ duration: 0.25 }}
          >
            <div className="treatment__image">
              <img src={p.img} alt={p.name} loading="lazy" />
              <div className="treatment__image-overlay" />
            </div>
            <div className="treatment__body">
              <h3 className="treatment__name">{p.name}</h3>
              <p className="treatment__short">{p.short}</p>
              <button
                className="treatment__toggle"
                aria-expanded={expanded === i}
                onClick={e => { e.stopPropagation(); setExpanded(expanded === i ? null : i) }}
              >
                Learn More
                <motion.svg
                  viewBox="0 0 24 24"
                  animate={{ rotate: expanded === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </motion.svg>
              </button>
            </div>
            <motion.div
              className="treatment__details"
              initial={false}
              animate={{ maxHeight: expanded === i ? 600 : 0, opacity: expanded === i ? 1 : 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="treatment__details-inner">
                <p><strong>Duration:</strong> {p.duration}</p>
                <p>{p.desc}</p>
                <ul>{p.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

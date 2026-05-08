import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const bgRef = useRef(null)
  const particlesRef = useRef(null)

  useEffect(() => {
    // Parallax
    const onScroll = () => {
      if (bgRef.current && window.scrollY < window.innerHeight) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.1)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Floating leaves
    const container = particlesRef.current
    function createLeaf() {
      if (!container) return
      const leaf = document.createElement('div')
      leaf.classList.add('leaf')
      leaf.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>`
      leaf.style.left = Math.random() * 100 + '%'
      leaf.style.animationDuration = 12 + Math.random() * 18 + 's'
      leaf.style.animationDelay = Math.random() * 10 + 's'
      const size = 14 + Math.random() * 16 + 'px'
      leaf.style.width = size; leaf.style.height = size
      container.appendChild(leaf)
      setTimeout(() => leaf.parentNode && leaf.parentNode.removeChild(leaf), 30000)
    }
    for (let i = 0; i < 12; i++) setTimeout(createLeaf, i * 800)
    const interval = setInterval(createLeaf, 3000)
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(interval) }
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img ref={bgRef} src="/images/hero-bg.webp" alt="Serene Kerala Ayurvedic wellness retreat" loading="eager" />
      </div>
      <div className="hero__overlay" />
      <div className="hero__particles" ref={particlesRef} />
      <div className="hero__ripple">
        <div className="ripple-ring" /><div className="ripple-ring" />
        <div className="ripple-ring" /><div className="ripple-ring" />
      </div>
      <div className="hero__content">
        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          Merry Land Ayurvedic Centre
        </motion.p>
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          Your <em>Healing</em><br />Begins Here
        </motion.h1>
        <motion.p
          className="hero__desc"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          Step into a world where ancient wisdom meets modern wellness.
          Experience the transformative power of authentic Panchakarma.
        </motion.p>
        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <a href="#panchakarma" className="btn btn--primary">
            Start Your Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>

    </section>
  )
}

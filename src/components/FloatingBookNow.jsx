import { Link } from 'react-router-dom'

export default function FloatingBookNow() {
  return (
    <Link to="/book" className="floating-book" aria-label="Book Now">
      Book Now
    </Link>
  )
}

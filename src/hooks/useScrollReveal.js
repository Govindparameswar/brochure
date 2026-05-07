// Legacy hook — kept for backward-compat but Framer Motion handles animations now
import { useRef } from 'react'
export function useScrollReveal() {
  return useRef(null)
}

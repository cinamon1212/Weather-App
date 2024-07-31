import { keyframes } from '@emotion/react'

const imgAnimation = `${keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
})} 0.6s ease`

export const animations = {
  imgAnimation,
}

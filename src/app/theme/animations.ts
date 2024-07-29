import { AnimationsType } from '@/shared';
import { keyframes } from '@emotion/react';

export const imgAnimation = `${keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0)' },
})} 1s ease`;

export const animations: AnimationsType = {
  imgAnimation,
};

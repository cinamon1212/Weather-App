import { BoxProps, defineStyle } from '@chakra-ui/react'

export const stackStyles = defineStyle({
  backgroundImage: '/images/background.jpg',
  minH: '100vh',
  minW: '100%',
  as: 'main',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  alignItems: 'center',
  justifyContent: 'center',
}) as BoxProps

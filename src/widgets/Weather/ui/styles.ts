import { BoxProps, defineStyle } from '@chakra-ui/react'

export const sectionStyles = defineStyle({
  w: { base: '300px', sm: '400px', md: '480px' },
  minW: { base: '250px', sm: '350px' },
  px: { base: '14px', sm: '20px' },
  py: { base: '20px', sm: '30px' },
  borderRadius: '16px',
  border: '2px solid',
  borderColor: 'borderColor',
  backgroundColor: 'weatherBlockBgColor',
  backdropFilter: 'blur(30px)',
  transition: 'height 0.6s ease',
  overflow: 'hidden',
  as: 'section',
}) as BoxProps

export const contentContainerStyles = defineStyle({
  pt: { base: '30px', sm: '50px' },
  overflow: 'hidden',
  height: 'auto',
})

export const sectionHeights = {
  baseH: { base: '80px', sm: '110px' },
  fallbackH: { base: '370px', sm: '490px', md: '550px' },
  dataH: { base: '490px', sm: '535px', md: '585px' },
  loadingH: { base: '171px', sm: '240px' },
}

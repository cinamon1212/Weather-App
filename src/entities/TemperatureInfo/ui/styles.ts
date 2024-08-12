import { defineStyle, BoxProps, TextProps } from '@chakra-ui/react'

export const tempBlockStyles = defineStyle({
  gap: '3px',
  fontSize: { base: '34px', sm: '44px' },
  h: '53px',
  fontWeight: 600,
  as: 'h2',
}) as BoxProps

export const infoBlockStyles = defineStyle({
  gap: 0,
  mt: '10px',
})

export const degreeStyles = defineStyle({
  as: 'span',
  alignSelf: 'flex-start',
  fontSize: '22px',
}) as TextProps

export const cityNameStyles = defineStyle({
  fontWeight: 500,
  fontSize: { base: '18px', sm: '20px' },
})

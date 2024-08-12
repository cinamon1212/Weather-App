import { defineStyle, TextProps } from '@chakra-ui/react'

export const weatherParamsStackStyles = defineStyle({
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: { base: 'column', sm: 'row' },
  gap: { base: '20px', sm: 0 },
  w: '100%',
  mt: { base: '24px', sm: '40px' },
  px: '10px',
})

export const weatherParamHStackStyles = defineStyle({
  alignItems: 'center',
  gap: { base: '15px', sm: '8px' },
  w: { base: '100%', sm: '50%' },
})

export const weatherParamImgStyles = defineStyle({
  w: { base: '20%', sm: '30%' },
})

export const paramValueStyles = defineStyle({
  as: 'h3',
  alignSelf: 'flex-start',
  fontWeight: 500,
  fontSize: { base: '18px', sm: '22px' },
}) as TextProps

export const paramLabelStyles = defineStyle({
  fontSize: { base: '12px', sm: '14px' },
})

import { defineStyle, BoxProps, TextProps } from '@chakra-ui/react'

export const containerStyles = defineStyle({
  alignItems: 'center',
  textAlign: 'center',
}) as BoxProps

export const errorMessageStyles = defineStyle({
  as: 'h2',
  fontWeight: 500,
  fontSize: { base: '16px', sm: '20px' },
  mt: '10px',
}) as TextProps

import { defineStyle, InputProps } from '@chakra-ui/react'

export const addonStyles = defineStyle({
  h: '100%',
  cursor: 'pointer',
  _hover: { color: 'pink.100' },
})

export const inputStyles = defineStyle({
  borderWidth: '1.5px',
  borderRadius: '12px',
  placeholder: 'Enter Location',
  color: 'white',
  type: 'text',
  h: { base: '38px', sm: '48px' },
  pl: '40px',
  fontSize: { base: '15px', sm: '18px' },
  _placeholder: {
    color: 'whiteAlpha.700',
  },
  _focusVisible: {
    borderColor: 'pink.400',
  },
  autoFocus: true,
}) as InputProps

export const searchIconStyles = defineStyle({
  boxSize: { base: '14px', sm: '16px' },
})

export const closeIconStyles = defineStyle({
  boxSize: { base: '12px', sm: '14px' },
})

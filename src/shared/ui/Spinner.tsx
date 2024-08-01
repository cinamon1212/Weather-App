import { Spinner as ChakraSpinner, defineStyle } from '@chakra-ui/react'
import { memo } from 'react'

const spinnerStyles = defineStyle({
  size: { base: 'lg', sm: 'xl' },
  mb: '20px',
})

export const Spinner = memo(() => {
  return <ChakraSpinner {...spinnerStyles} />
})

import { Spinner as ChakraSpinner, defineStyle } from '@chakra-ui/react'

const spinnerStyles = defineStyle({
  size: { base: 'lg', sm: 'xl' },
  mb: '20px',
})

export const Spinner = () => {
  return <ChakraSpinner {...spinnerStyles} />
}

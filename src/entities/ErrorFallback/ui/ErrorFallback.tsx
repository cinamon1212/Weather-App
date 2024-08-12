import { ErrorStatuses, useAppTheme } from '@/shared'
import { Image, Text, VStack } from '@chakra-ui/react'
import { containerStyles, errorMessageStyles, fallbackImageStyles } from './styles'

type Props = {
  error: ErrorStatuses
}

export const ErrorFallback = ({ error }: Props) => {
  const { animations } = useAppTheme()
  const errorMessage = error === '404' ? 'Location not found!' : 'Something went wrong!'

  return (
    <VStack {...containerStyles}>
      <Image {...fallbackImageStyles} animation={animations.imgAnimation} />
      <Text {...errorMessageStyles}>Oops! {errorMessage}</Text>
    </VStack>
  )
}

import { ErrorStatuses, ThemeType } from '@/shared'
import { Image, Text, VStack } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import { containerStyles, errorMessageStyles } from './styles'

type Props = {
  error: ErrorStatuses
}

export const ErrorFallback = ({ error }: Props) => {
  const { animations } = useTheme() as ThemeType
  const errorMessage = error === '404' ? 'Location not found!' : 'Something went wrong!'

  return (
    <VStack {...containerStyles}>
      <Image src='/images/404.png' alt='fallback' animation={animations.imgAnimation} />
      <Text {...errorMessageStyles}>Oops! {errorMessage}</Text>
    </VStack>
  )
}

import { ErrorStatus, ThemeType } from '@/shared'
import { BoxProps, defineStyle, Image, Text, VStack } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'

const containerStyles = defineStyle({
  alignItems: 'center',
  textAlign: 'center',
}) as BoxProps

type Props = {
  error: ErrorStatus
}

export const ErrorFallback = ({ error }: Props) => {
  const { animations } = useTheme() as ThemeType
  const errorMessage =
    error === '404' ? 'Location not found!' : 'Something went wrong!'

  return (
    <VStack {...containerStyles}>
      <Image
        src='/images/404.png'
        alt='not found'
        animation={animations.imgAnimation}
      />
      <Text
        as={'h2'}
        fontWeight={500}
        fontSize={{ base: '16px', sm: '20px' }}
        mt={'10px'}>
        Oops! {errorMessage}
      </Text>
    </VStack>
  )
}

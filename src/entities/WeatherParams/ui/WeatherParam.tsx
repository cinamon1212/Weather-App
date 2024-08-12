import { BoxProps, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { paramLabelStyles, paramValueStyles, weatherParamHStackStyles, weatherParamImgStyles } from './styles'

type Props = {
  iconName: string
  value: string
  label: string
} & BoxProps

export const WeatherParam = ({ iconName, label, value, ...props }: Props) => {
  return (
    <HStack {...weatherParamHStackStyles} {...props}>
      <Image src={`/icons/${iconName}.svg`} alt={label} {...weatherParamImgStyles} />
      <VStack gap={0}>
        <Text {...paramValueStyles}>{value}</Text>
        <Text {...paramLabelStyles}>{label}</Text>
      </VStack>
    </HStack>
  )
}

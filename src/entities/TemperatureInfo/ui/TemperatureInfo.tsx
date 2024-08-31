import { HStack, Text, VStack } from '@chakra-ui/react'
import {
  cityNameStyles,
  degreeStyles,
  infoBlockStyles,
  tempBlockStyles,
} from './styles'

type Props = {
  temperature: number
  cityName: string
}

export const TemperatureInfo = ({ temperature, cityName }: Props) => {
  return (
    <VStack {...infoBlockStyles}>
      <HStack {...tempBlockStyles}>
        <Text as={'span'}>{temperature}</Text>
        <Text {...degreeStyles}>°C</Text>
      </HStack>
      <Text {...cityNameStyles}>{cityName}</Text>
    </VStack>
  )
}

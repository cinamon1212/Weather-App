import { BoxProps, defineStyle, HStack, Text, VStack } from '@chakra-ui/react'

type Props = {
  temperature: number
  cityName: string
}

const tempHStyles = defineStyle({
  gap: '3px',
  fontSize: { base: '34px', sm: '44px' },
  h: '53px',
  fontWeight: 600,
}) as BoxProps

export const TemperatureInfo = ({ temperature, cityName }: Props) => {
  return (
    <VStack gap={0} mt='10px'>
      <HStack {...tempHStyles} as={'h2'}>
        <Text as={'span'}>{temperature}</Text>
        <Text as={'span'} alignSelf={'flex-start'} fontSize={'22px'}>
          °C
        </Text>
      </HStack>
      <Text fontWeight={500} fontSize={{ base: '18px', sm: '20px' }}>
        {cityName}
      </Text>
    </VStack>
  )
}

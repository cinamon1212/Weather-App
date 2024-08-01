import { defineStyle, Stack } from '@chakra-ui/react'
import { WeatherParam } from './WeatherParam'
import { memo } from 'react'

const stackStyles = defineStyle({
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: { base: 'column', sm: 'row' },
  gap: { base: '20px', sm: 0 },
  w: '100%',
  mt: { base: '24px', sm: '40px' },
  px: '10px',
})

type Props = {
  humidity: number
  wind: number
}

export const WeatherParams = memo(({ humidity, wind }: Props) => {
  const fields = [
    {
      iconName: 'humidity',
      label: 'Humidity',
      value: `${humidity} %`,
      justifyContent: { base: 'center', sm: 'flex-start' },
    },
    {
      iconName: 'wind',
      label: 'Wind speed',
      value: `${wind} Km/h`,
      justifyContent: { base: 'center', sm: 'flex-end' },
    },
  ]
  return (
    <Stack {...stackStyles}>
      {fields.map((field) => (
        <WeatherParam {...field} key={field.iconName} />
      ))}
    </Stack>
  )
})

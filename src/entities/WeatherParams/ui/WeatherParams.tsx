import { Stack } from '@chakra-ui/react'
import { WeatherParam } from './WeatherParam'
import { weatherParamsStackStyles } from './styles'

type Props = {
  humidity: number
  wind: number
}

export const WeatherParams = ({ humidity, wind }: Props) => {
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
    <Stack {...weatherParamsStackStyles}>
      {fields.map((field) => (
        <WeatherParam {...field} key={field.iconName} />
      ))}
    </Stack>
  )
}

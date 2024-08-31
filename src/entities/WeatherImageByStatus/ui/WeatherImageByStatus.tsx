import { WeatherStatus, useAppTheme } from '@/shared'
import { Image } from '@chakra-ui/react'
import { getWeatherPathFromStatus } from '../helpers'
import { weatherImgStyles } from './styles'

type Props = {
  status: WeatherStatus
}

export const WeatherImageByStatus = ({ status }: Props) => {
  const imgSrc = getWeatherPathFromStatus(status)
  const { animations } = useAppTheme()

  return (
    <Image
      {...weatherImgStyles}
      src={imgSrc}
      animation={animations.imgAnimation}
    />
  )
}

import { WeatherStatus, useAppTheme } from '@/shared'
import { Image } from '@chakra-ui/react'
import { getWeatherPathFromStatus } from '../helpers'
import { memo } from 'react'
import { weatherImgStyles } from './styles'

type Props = {
  status: WeatherStatus
}

export const WeatherImageByStatus = memo(({ status }: Props) => {
  const imgSrc = getWeatherPathFromStatus(status)
  const { animations } = useAppTheme()

  return <Image {...weatherImgStyles} src={imgSrc} animation={animations.imgAnimation} />
})

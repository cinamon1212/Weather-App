import { WeatherStatus, ThemeType } from '@/shared'
import { defineStyle, Image } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import { getWeatherPathFromStatus } from '../helpers'
import { memo } from 'react'

type Props = {
  status: WeatherStatus
}

const imgStyles = defineStyle({
  w: '60%',
})

export const WeatherImageByStatus = memo(({ status }: Props) => {
  const imgSrc = getWeatherPathFromStatus(status)
  const { animations } = useTheme() as ThemeType

  return <Image {...imgStyles} src={imgSrc} alt='weather' animation={animations.imgAnimation} />
})

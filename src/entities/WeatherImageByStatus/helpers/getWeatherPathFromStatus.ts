import { WeatherStatus } from '@/shared'

export const getWeatherPathFromStatus = (status: WeatherStatus) => {
  let imgSrc = '/images/'

  switch (status) {
    case 'Clear':
      imgSrc += 'sunny'
      break

    case 'Rain':
      imgSrc += 'rainy'
      break

    case 'Snow':
      imgSrc += 'moonlit'
      break

    case 'Clouds':
      imgSrc += 'cloudy'
      break

    case 'Mist':
      imgSrc += 'windy'
      break

    case 'Haze':
      imgSrc += 'windy'
      break

    default:
      imgSrc += 'cloudy'
  }

  imgSrc += '.png'

  return imgSrc
}

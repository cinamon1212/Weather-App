export type CityResponse = {
  weather: { main: WeatherStatus }[]
  main: { humidity: number; temp: number }
  wind: { speed: number }
  name: string
  cod: number | string
}

export type CityData = {
  status: WeatherStatus
  humidity: number
  wind: number
  temp: number
  name: string
}

export type WeatherStatus =
  | 'Clear'
  | 'Rain'
  | 'Snow'
  | 'Clouds'
  | 'Mist'
  | 'Haze'

export type ErrorStatus = '404' | 'error' | ''

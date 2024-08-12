import { CityData, CityResponse } from '@/shared'

const decimalsValue = 3

export const createCityData = (data: CityResponse): CityData => {
  const { weather, main, wind, name } = data
  return {
    status: weather[0].main,
    humidity: main.humidity,
    wind: parseFloat(wind.speed.toFixed(decimalsValue)),
    temp: parseFloat(main.temp.toFixed(decimalsValue)),
    name,
  }
}

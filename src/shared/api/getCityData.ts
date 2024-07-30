import { CityData, CityResponse, ErrorStatus } from '../types'
import { API_KEY, BASE_URL } from './apiConstants'

export const getCityData = async (
  city: string,
): Promise<ErrorStatus | CityData> => {
  try {
    const response = await fetch(BASE_URL + `&q=${city}&appid=${API_KEY}`)
    const data = (await response.json()) as CityResponse
    if (data.cod == 200) {
      const { weather, main, wind, name } = data
      return {
        status: weather[0].main,
        humidity: main.humidity,
        wind: +wind.speed.toString().slice(0, 3),
        temp: +main.temp.toString().slice(0, 3),
        name,
      }
    } else if (data.cod == 404) return '404'
    else return 'error'
  } catch (error) {
    console.log(error)
    return 'error'
  }
}

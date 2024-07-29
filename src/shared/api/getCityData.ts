import { CityData, CityResponse } from '../types';
import { API_KEY, BASE_URL } from './apiConstants';

export const getCityData = async (
  city: string
): Promise<CityData | 'error'> => {
  try {
    const response = await fetch(BASE_URL + `&q=${city}&appid=${API_KEY}`);
    if (!response.ok) return 'error';
    else {
      const data: CityResponse = await response.json();
      if (data.cod == 200) {
        const { weather, main, wind, name } = data;
        return {
          status: weather[0].main,
          humidity: main.humidity,
          wind: +wind.speed.toString().slice(0, 3),
          temp: +main.temp.toString().slice(0, 3),
          name,
        };
      }
      return 'error';
    }
  } catch (error) {
    console.log(error);
    return 'error';
  }
};

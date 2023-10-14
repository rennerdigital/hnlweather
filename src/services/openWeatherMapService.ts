// src/services/openWeatherMapService.ts

import axios from 'axios';
import { Weather } from '@/types/Weather';

const API_KEY = 'd1a675ed3aeea9ce3f3445eb18d6872a';

export async function getCurrentWeather(city: string): Promise<Weather> {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });

  const data = response.data;
  const weather: Weather = {
    temp: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    date: new Date(data.dt * 1000).toLocaleDateString(),
  };
  return weather;
}

export async function getWeatherForecast(city: string): Promise<Weather[]> {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });

  const data = response.data;
  const forecast: Weather[] = data.list.map((item: any) => ({
    temp: item.main.temp,
    description: item.weather[0].description,
    icon: item.weather[0].icon,
    date: new Date(item.dt * 1000).toLocaleDateString(),
  }));
  return forecast;
}

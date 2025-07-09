/*Creo interfaces para  los
datos del clima que intentamos recuperar 
de openWeather Map */


// src/types/climaDatos.ts

// src/types/climaDatos.ts

// Interfaz más completa para la respuesta de la API del clima
export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WindData {
  speed: number;
  deg: number;
}

export interface CloudsData {
  all: number;
}

export interface SysData {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

// Renombra tu verificar para que contenga todos estos campos si los vas a usar
export interface Verificar { // Este nombre ahora representa la respuesta completa
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherCondition[];
  base: string;
  main: MainData;
  visibility: number;
  wind: WindData;
  clouds: CloudsData;
  dt: number;
  sys: SysData;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  message?: string;
}
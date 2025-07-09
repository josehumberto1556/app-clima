// src/hooks/useWeather.ts (o CilmaHook.ts)
import { useState, useCallback } from 'react';
// Asegúrate de usar la interfaz completa si quieres más datos, o extiende ClimaApi
import type{ Verificar } from '../types/climaDatos'; // O WeatherApiResponse o la que uses

const API_KEY = '4cb525cce137c6938c00d6ad22e94242'; // ¡Reemplaza con tu propia API Key!

// Actualiza esta interfaz para que devuelva el objeto completo
interface UseWeatherResult {
  datosClima: Verificar | null; // Cambiado para devolver el objeto completo
  cargando: boolean;
  error: string;
  buscarClimaPorCiudad: (ciudad: string) => Promise<void>; // Cambiado el nombre de la función para mayor claridad
}

export const useWeather = (): UseWeatherResult => {
  const [datosClima, setDatosClima] = useState<Verificar | null>(null); // Guardamos el objeto completo
  const [cargando, setCargando] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const buscarClimaPorCiudad = useCallback(async (ciudad: string) => {
    if (!ciudad.trim()) {
      setError('Ingresa una ciudad.');
      setDatosClima(null);
      return;
    }

    setCargando(true);
    setError('');
    setDatosClima(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
      );
      // Asegúrate de que 'data' coincida con ClimaApi o WeatherApiResponse
      const data: Verificar = await response.json(); // Usamos ClimaApi aquí

      if (response.ok) {
        setDatosClima(data); // Almacenamos el objeto de datos completo
      } else {
        setError(data.message || 'Error al obtener clima.');
      }
    } catch (err) {
      setError('Error de conexión.');
    } finally {
      setCargando(false);
    }
  }, []);

  return { datosClima, cargando, error, buscarClimaPorCiudad }; // Devolvemos datosClima
};
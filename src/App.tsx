
import { useState, type FormEvent } from 'react';
// Asegúrate de que el import del hook sea correcto según tu nombre de archivo
// Si tu hook se llama CilmaHook.ts, sería './hooks/CilmaHook'
import { useWeather } from './hooks/cilmaHook';
import './App.css'; // Importa el archivo de estilos

// Importa los iconos que podrías usar (ej. con react-icons)
// npm install react-icons
import { FaCloud, FaWind, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

function App() {
  const [ciudadInput, setCiudadInput] = useState<string>('');
  // Asumiendo que tu hook ahora devuelve más detalles si los hubieras añadido,
  // como la descripción del clima y el ícono.
  // Si no, seguiremos usando solo temperatura y ciudadNombre
  const { datosClima, cargando, error, buscarClimaPorCiudad } = useWeather(); // Cambiado a datosClima para más detalles

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    buscarClimaPorCiudad(ciudadInput);
  };

 

  return (
    <div className="weather-app-container">
      <div className="weather-app-card">
        <header className="app-header">
          <h1>Clima Hoy</h1>
        </header>

        <main className="main-content">
          <form onSubmit={handleSubmit} className="search-form">
            <input
              type="text"
              value={ciudadInput}
              onChange={(e) => setCiudadInput(e.target.value)}
              placeholder="Ej: San Cristobal, Caracas, Madrid"
              className="city-input"
              aria-label="Ingresa el nombre de la ciudad"
            />
            <button type="submit" className="search-button" aria-label="Buscar clima">
              <FaSearch />
            </button>
          </form>

          {cargando && (
            <div className="status-message loading-message">
              <div className="spinner"></div>
              <p>Cargando datos del clima...</p>
            </div>
          )}
          {error && (
            <div className="status-message error-message">
              <p>¡Ups! {error}</p>
              <p>Por favor, intenta con otra ciudad.</p>
            </div>
          )}

          {datosClima && datosClima.main && ( // Aseguramos que datosClima y main existan
            <div className="weather-results">
              <h2 className="city-name">
                <FaMapMarkerAlt className="location-icon" /> {datosClima.name}, {datosClima.sys.country}
              </h2>
              <div className="temperature-section">
                <span className="current-temp">{Math.round(datosClima.main.temp)}°C</span>
                {datosClima.weather && datosClima.weather[0] && (
                  <div className="weather-icon-display">
                    <img
                      src={`http://openweathermap.org/img/wn/${datosClima.weather[0].icon}@4x.png`}
                      alt={datosClima.weather[0].description}
                      className="weather-main-icon"
                    />
                    <p className="weather-description">{datosClima.weather[0].description}</p>
                  </div>
                )}
              </div>

              <div className="weather-details-grid">
                <div className="detail-item">
                  <FaWind className="detail-icon" />
                  <p>Viento</p>
                  <span>{datosClima.wind.speed} m/s</span>
                </div>
                <div className="detail-item">
                  <FaCloud className="detail-icon" />
                  <p>Humedad</p>
                  <span>{datosClima.main.humidity}%</span>
                </div>
                <div className="detail-item">
                  <FaCloud className="detail-icon" /> {/* Podrías usar un icono específico para la sensación térmica */}
                  <p>Sensación</p>
                  <span>{Math.round(datosClima.main.feels_like)}°C</span>
                </div>
              </div>
            </div>
          )}

          {!cargando && !error && !datosClima && (
            <p className="initial-message">Ingresa una ciudad para ver el clima.</p>
          )}
        </main>

        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} Creado para Portafolio con ❤️</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
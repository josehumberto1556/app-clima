# ☀️ Aplicación del Clima con React y Vite

![Weather App Screenshot](https://via.placeholder.com/800x450?text=Captura+de+pantalla+de+la+app)
_Reemplaza esta URL con una captura de pantalla real de tu aplicación._

## ✨ Descripción General

Esta es una moderna aplicación web de consulta del clima, construida con **React**, **Vite** y **TypeScript**. Está diseñada con un enfoque en la experiencia de usuario (UX) y una interfaz de usuario (UI) atractiva y completamente **responsive**, ideal para mostrar en un portafolio.

Permite a los usuarios buscar el clima actual de cualquier ciudad del mundo, mostrando la temperatura, la descripción del cielo, la humedad y la velocidad del viento.

## 🚀 Tecnologías Utilizadas

* **[React](https://react.dev/)**: Biblioteca de JavaScript para construir interfaces de usuario.
* **[Vite](https://vitejs.dev/)**: Herramienta de construcción rápida para proyectos web modernos.
* **[TypeScript](https://www.typescriptlang.org/)**: JavaScript con tipado estático para código más robusto y escalable.
* **[OpenWeatherMap API](https://openweathermap.org/)**: Fuente de datos del clima.
* **[React Icons](https://react-icons.github.io/react-icons/)**: Colección de íconos populares para React.
* **CSS3**: Estilos personalizados con variables CSS, Flexbox y Grid para un diseño responsive y moderno.

## 🌟 Características Destacadas

* **Búsqueda Rápida de Ciudades**: Encuentra el clima de cualquier ciudad global al instante.
* **UI/UX Limpia y Moderna**: Diseño intuitivo con animaciones sutiles y feedback claro al usuario.
* **Completamente Responsive**: Adaptable a diferentes tamaños de pantalla (móvil, tablet, escritorio).
* **Manejo de Estados Robustos**: Indicadores de carga y mensajes de error detallados.
* **Arquitectura Modular**: Lógica de API separada en un Custom Hook (`useWeather`) y tipos de datos definidos con TypeScript para una mejor mantenibilidad.

## 📦 Cómo Ejecutar el Proyecto Localmente

Sigue estos pasos para tener una copia local del proyecto funcionando en tu máquina.

### Prerrequisitos

Asegúrate de tener instalado:
* [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
* [npm](https://www.npmjs.com/) (viene con Node.js)

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
    cd tu-repositorio-del-clima
    ```
    _Reemplaza `tu-usuario` y `tu-repositorio` con los datos de tu GitHub._

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura tu API Key de OpenWeatherMap:**
    * Regístrate en [OpenWeatherMap](https://openweathermap.org/) y obtén tu API Key.
    * Abre el archivo `src/hooks/useWeather.ts` (o `src/hooks/CilmaHook.ts` si lo nombraste así).
    * Reemplaza `TU_API_KEY_DE_OPENWEATHERMAP` con tu clave real:
        ```typescript
        const API_KEY = 'TU_API_KEY_DE_OPENWEATHERMAP'; // <-- ¡Tu clave aquí!
        ```

4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación se abrirá en tu navegador en `http://localhost:5173/` (o un puerto similar).

## 📄 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](https://opensource.org/licenses/MIT). Puedes cambiarla si lo deseas.

## 📧 Contacto

* **Jose Morales** - josehumberto1556@gmail.com
* [Tu Perfil de GitHub]:josehumberto1556

---

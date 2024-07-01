# Triqui (Tic-Tac-Toe) en React

Este proyecto es una implementación del clásico juego de Triqui (Tic-Tac-Toe) utilizando React. La aplicación permite a dos jugadores turnarse para marcar X y O en un tablero de 3x3, determinando un ganador o un empate. Este proyecto demuestra el manejo de estados, componentes, y enrutamiento en React.

## Características

- **Tablero interactivo** de 3x3 para el juego de Triqui.
- **Cambio de turno** entre dos jugadores (X y O).
- **Detección automática** de ganador o empate.
- **Reinicio del juego** con un solo clic.

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. Clona este repositorio:
    ```bash
    git clone https://github.com/tu-usuario/triqui-react.git
    cd app-react
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia la aplicación:
    ```bash
    npm start
    ```

4. Abre tu navegador en `http://localhost:3000` para ver la aplicación en funcionamiento.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

```
triqui-react/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── actions/
│   │   └── resetGame.js
│   │
│   ├── components/
│   │   ├── Square.js
│   │   └── WinnerModal.js
│   │
│   ├── constants/
│   │   └── index.js
│   │
│   ├── logic/
│   │   └── board.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── ...
│
├── package.json
└── README.md
```

### Archivos y Directorios Principales

- **`src/App.js`**: Componente principal de la aplicación que maneja el estado del tablero, el turno, y el ganador.
- **`src/components/Square.js`**: Componente para representar una casilla del tablero.
- **`src/components/WinnerModal.js`**: Componente para mostrar el modal del ganador.
- **`src/actions/resetGame.js`**: Función para reiniciar el juego.
- **`src/constants/index.js`**: Constantes del juego, como los turnos.
- **`src/logic/board.js`**: Lógica para verificar el ganador.

## Uso

1. Al abrir la aplicación, verás un tablero de 3x3.
2. Los jugadores se turnan para hacer clic en las casillas vacías para colocar su marca (X o O).
3. El juego detecta automáticamente si hay un ganador o un empate.
4. Si hay un ganador, se muestra un mensaje con el ganador y un botón para reiniciar el juego.
5. Puedes reiniciar el juego en cualquier momento haciendo clic en el botón "Reiniciar".

## Tecnologías Utilizadas

- **React**: Librería principal para la construcción de la interfaz de usuario.
- **JavaScript (ES6+)**: Lenguaje de programación utilizado.
- **CSS**: Para el estilo y diseño de la aplicación.
- **Canvas Confetti**: Para la animación de confeti al detectar un ganador.

---

Este proyecto de Triqui en React demuestra habilidades clave en el desarrollo de aplicaciones web con React, incluyendo el manejo de estados, componentes funcionales y lógica de negocio. 

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const TURNS = {	//turnos
  X: "x", //true
  O: "o"  //false
}


const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
    }
    return (
      <div className={className} onClick={handleClick}>
          {children}
      </div>
    )
}


function App() {

  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);
  const updateBoard = (index) => {
    const newBoard = [...board]; //Copia el tablero
    newBoard[index] = turn; //Cambia el valor de la casilla
    setBoard(newBoard); // Es un tipo de retorno a la función
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; //Compara si el turno es igual a X, si es así, cambia a O, si no, cambia a X
    setTurn (newTurn) // Es un tipo de retorno a la función
  }
  

  return (
    <div>
      <header className="App-header">
        <h1>Juego de Triqui</h1>
      </header>
      <h2 className="App-header">Por Felipe Rueda</h2>
        <main className='board'>
          <section className='game'>
            {
              board.map((_, index) => {
                return (
                  // Se le pasa la función updateBoard a Square para que seap qué tiene que hacer
                  <Square key={index} index={index} updateBoard={updateBoard}>
                    {board[index]}
                    </Square>

                  )
                })
            }
          </section>
          <section className='turn'>
             {/* isSelected es un prop de React que se conecta con Square ya que se lo pasamos cómo entrada */}
            <Square isSelected={ turn === TURNS.X} >{TURNS.X}</Square>
            <Square isSelected={ turn === TURNS.O} >{TURNS.O}</Square>
          </section>
        </main>
    </div>
  );
}

export default App;

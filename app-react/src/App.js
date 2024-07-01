import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const TURNS = {	//turnos
  X: "x", //true
  O: "o"  //false
}
const Combinations = [ //Combinaciones ganadoras
  [0, 1, 2], //Horizontal
  [3, 4, 5], //Horizontal
  [6, 7, 8], //Horizontal
  [0, 3, 6], //Vertical
  [1, 4, 7], //Vertical
  [2, 5, 8], //Vertical
  [0, 4, 8], //Diagonal
  [2, 4, 6]  //Diagonal
]


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

  // null significa que no hay ganador y false significa que hay empate
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardTocheck) => {
    for (const combination of Combinations) {
      const [a, b, c] = combination;
      if (boardTocheck[a] && boardTocheck[a] === boardTocheck[b] && boardTocheck[a] === boardTocheck[c]) {
        return boardTocheck[a];
      }
    }
    return null;
  }

  const updateBoard = (index) => {
    if (board[index] !== null || winner) { //Si la casilla ya tiene un valor, no se puede cambiar
      return;
    }
    //actualizar tablero
    const newBoard = [...board]; //Copia el tablero, se hace la copia poque no se puede mutar nunca las props y el estado
    newBoard[index] = turn; //Cambia el valor de la casilla
    setBoard(newBoard); // Es un tipo de retorno a la función
    

    //Cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X; //Compara si el turno es igual a X, si es así, cambia a O, si no, cambia a X
    setTurn (newTurn) // Es un tipo de retorno a la función

    //Verificar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      //alert(`El ganador es ${newWinner}`);
      setWinner(newWinner);
      return;
    }
    //Verificar si hay empate
    if (!newBoard.includes(null)) {
      //alert('Empate');
      setWinner(false);
    }

    
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    
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

          {/* Decir quien gana otra vez y terminar el juego */}
          {
            winner !== null && (
              <section className='winner'>
                <h1 className='text'>
                {winner ? `El ganador es ${winner}` : 'Empate'}
                <footer>
                  <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
                </h1>
                
              </section>)

          }
          <button onClick={resetGame}>Reiniciar</button>
        </main>
    </div>
  );
}

export default App;

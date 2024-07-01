import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Square } from './components/square';
import { TURNS } from './constants';
import { checkWinner } from './logic/board';
import { WinnerModal } from './components/winnerModal';
import { resetGame } from './actions/resetGame';





function App() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X); 
  const [winner, setWinner] = useState(null); // null significa que no hay ganador y false significa que hay empate



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
      confetti();
      return;
    }
    //Verificar si hay empate
    if (!newBoard.includes(null)) {
      //alert('Empate');
      setWinner(false);
    }
  }

  

  return (
    <div>
      <header className="App-header">
        <h1> Bienvenido  </h1>
      </header>
      <h2 className="App-header">Juego de Triqui creado por Felipe Rueda</h2>
        <main className='board'>
          <section className='game'>
            {
              board.map((square, index) => {
                return (
                  // Se le pasa la función updateBoard a Square para que seap qué tiene que hacer
                  <Square key={index} index={index} updateBoard={updateBoard}>
                    {square}
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
          <WinnerModal winner= {winner} setBoard = {setBoard} setTurn = {setTurn} setWinner ={setWinner}/>
          <button onClick={() => resetGame( {setBoard, setTurn, setWinner} )}>Reiniciar</button>
        </main>
    </div>
  );
}

export default App;

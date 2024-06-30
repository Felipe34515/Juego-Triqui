import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const TURNS = {	
  X: "x",
  O: "o"
}


 const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard()
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
  const updateBoard = () => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn (newTurn)
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
                  <Square key={index} index={index} updateBoard={updateBoard}>
                    {board[index]}
                    </Square>

                  )
                })
            }
          </section>
          <section className='turn'>
            <Square isSelected={ turn === TURNS.X} >{TURNS.X}</Square>
            <Square isSelected={ turn === TURNS.O} >{TURNS.O}</Square>
          </section>
        </main>
    </div>
  );
}

export default App;

import React from 'react'
import { resetGame } from "../actions/resetGame"

export function WinnerModal ({winner, setBoard, setTurn, setWinner}) {

    if (winner === null) return null

    const winnerTest = winner  ? `El ganador es ${winner}` : 'Empate'
    return (
        <section className='winner'>
            <h1 className='text'>
            {winnerTest}
            <footer>
            <button onClick={() => resetGame({setBoard, setTurn, setWinner })}>Empezar de nuevo</button>
            </footer>
            </h1>
        </section>
        
    )
}


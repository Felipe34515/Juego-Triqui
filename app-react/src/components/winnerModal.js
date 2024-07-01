
export function WinnerModal ({winner, resetGame}) {

    if (winner === null) return null

    const winnerTest = winner  ? `El ganador es ${winner}` : 'Empate'
    return (
        <section className='winner'>
            <h1 className='text'>
            {winnerTest}
            <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
            </h1>
        </section>
        
    )
}


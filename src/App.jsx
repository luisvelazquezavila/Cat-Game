// import { PropTypes } from "prop-types";
import { useState } from "react";
import Square from "./components/Square";
import { TURNS } from './constans'
import { checkWinner, checkEndGame } from "./logic/board";
import WinnerModal from "./components/WinnerModal";
import Board from "./components/Board";
import confetti from "canvas-confetti";
import { saveGameToStorage, resetGameToStorage } from "./logic/storage";

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');  
   
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {  
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.x;
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null);

    // Resetear partida
    resetGameToStorage();
  }

   const updateBoard = (index) => {
    // No actualizar la casilla si ya tiene algo
    if (board[index] || winner) return;

    // Actializar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar el turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    // Guardar partida
    saveGameToStorage({
      newBoard,
      newTurn
   })

    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  }  

  return (
    <>
    <main className="board">
      <h1>Cat Game</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      
      <Board board={board} updateBoard={updateBoard} />

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>

        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
    </>
  )
}

export default App
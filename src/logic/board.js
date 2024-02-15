import { WINNER_COMBOS } from "../constans";

export const checkWinner = (boardToCheck) => {
  // Revisamos todas las combinaciones ganadoras para ver si hay un ganador 
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // Si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // Revisamos si hay empete, si noy hay especios vacíos
  return newBoard.every(square => square !== null)
}


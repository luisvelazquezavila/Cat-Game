

export function saveGameToStorage({ newBoard, newTurn }) {
  localStorage.setItem('board', JSON.stringify(newBoard));
  localStorage.setItem('turn', newTurn);
}

export function resetGameToStorage() {
  localStorage.removeItem('board');
  localStorage.removeItem('turn');
}
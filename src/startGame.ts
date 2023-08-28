import endGame from "./endGame";

const nameInput: any = document.getElementById('playerNameInput');
let playerNameOutput = document.getElementById('playerNameOutput') as HTMLSpanElement;

export const addName = () => {
  console.warn('name ', nameInput.value)
  if (nameInput.value.length <= 3) {
    alert('please enter a name');
  }
  else {
    playerNameOutput.innerHTML = nameInput.value;
    localStorage.setItem('playerName', nameInput.value);
  }
}

export const getName = () => {
  const playerName = localStorage.getItem('playerName');
  if (playerName !== null) {
    nameInput.value = playerName;
    playerNameOutput.innerHTML = playerName;
  }
}

export const getGameStatus = () => {
  const gameStatus = localStorage.getItem('gameOver');
  if (gameStatus === 'true') {
    endGame();
  }
}
import endGame from "./endGame";

const playerNameOutput: any = () => document.getElementById("playerNameOutput");
const nameInput: any = () => document.getElementById("playerNameInput");

export const startGameModule = {
  nameInput,
  playerNameOutput,

  addName: (): void => {
    if (nameInput().value.length <= 3) {
      alert("please enter a name");
    } else {
      playerNameOutput().innerHTML = nameInput().value;
      localStorage.setItem("playerName", nameInput().value);
    }
  },

  getName: (): void => {
    const playerName = localStorage.getItem("playerName");
    if (playerName !== null) {
      nameInput().value = playerName;
      playerNameOutput().innerHTML = playerName;
    }
  },

  getGameStatus: (): void => {
    const gameStatus = localStorage.getItem("gameOver");
    if (gameStatus === "true") {
      endGame();
    }
  },
};

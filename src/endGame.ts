import buildHive from "./hiveBuilder";
import swarmMembers from "./swarmData";

export default function endGame(): void {
  const statusMessage = document.getElementById(
    "statusMessage"
  ) as HTMLParagraphElement;
  statusMessage.innerHTML = `Game over, please click the "Play another game button"`;

  localStorage.setItem("gameOver", "true");
  const hitBeeButton = document.getElementById("hitBee") as HTMLButtonElement;
  hitBeeButton.style.display = "none";
  const restartGameButton = document.getElementById(
    "restartGame"
  ) as HTMLButtonElement;
  restartGameButton.style.display = "block";
  restartGameButton.addEventListener("click", function () {
    buildHive(swarmMembers, true);
    localStorage.setItem("gameOver", "false");
    restartGameButton.style.display = "none";
    hitBeeButton.style.display = "block";
    statusMessage.innerHTML = `New game started`;
  });
}

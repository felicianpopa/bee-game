import buildHive from "./hiveBuilder";
import swarmMembers from "./swarmData";
import hitBeeActions from "./hitBee";
import { startGameModule } from "./startGame";

startGameModule.getName();
startGameModule.getGameStatus();
buildHive(swarmMembers);

const addNameSelector = document.getElementById("addName");
addNameSelector?.addEventListener("click", function () {
  startGameModule.addName();
});

const hitBee = document.getElementById("hitBee");
hitBee?.addEventListener("click", function () {
  hitBeeActions();
});

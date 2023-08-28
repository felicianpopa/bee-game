import buildHive from './hiveBuilder';
import swarmMembers from './swarmData'
import hitBeeActions from './hitBee';
import {addName, getName, getGameStatus} from './startGame';

getName();
getGameStatus();
buildHive(swarmMembers);

const addNameSelector = document.getElementById('addName')
addNameSelector?.addEventListener('click', function () {
  addName();
});

const hitBee = document.getElementById('hitBee')
hitBee?.addEventListener('click', function () {
  hitBeeActions()
});

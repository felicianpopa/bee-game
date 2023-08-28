import hiveUI from './hiveUI';
import { SwarmData } from './SwarmInterface';


export default function buildHive(swarmData: SwarmData, restartGame:boolean = false) {
  const hiveData = localStorage.getItem('hive');
  let populatedHive = hiveData ? JSON.parse(hiveData) : null;

  if (populatedHive === null || restartGame) {
    populatedHive = { ...swarmData };

    for (const key in swarmData) {
      const bees: number[] = new Array(swarmData[key].numberOfBees).fill(swarmData[key].health);
      swarmData[key]['bees'] = bees;
    }
    localStorage.setItem('hive', JSON.stringify(populatedHive));
  }

  hiveUI(populatedHive);
  
  return populatedHive;
}

import { SwarmData } from './SwarmInterface';

export default function hiveUI(swarmData: SwarmData) {
  const hiveContainer = document.getElementById('hive') as HTMLDivElement;
  hiveContainer.innerHTML = "";

  function createBeeTypeElement(key: string) {
    const beeType = document.createElement('div');
    beeType.classList.add('bee-type');
    const h3 = document.createElement('h3');
    h3.textContent = key;
    beeType.appendChild(h3);
    hiveContainer.appendChild(beeType);
    return beeType;
  }

  function createBeeElement(health: number) {
    const bee = document.createElement('div');
    bee.textContent = health.toString();
    return bee;
  }


  for (const key in swarmData) {
    const beeType = createBeeTypeElement(key);
    const bees = swarmData[key].bees
    const beesContainer = document.createElement('div');
    beesContainer.classList.add('bees');
    const beeElements = bees.map(createBeeElement);
    beesContainer.append(...beeElements);
    beeType.append(beesContainer);
  }

  localStorage.setItem('hive', JSON.stringify(swarmData));
}


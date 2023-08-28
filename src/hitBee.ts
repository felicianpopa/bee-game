import hiveUI from './hiveUI';
import endGame from './endGame';

export default function hitBeeActions() {
  const hiveData = localStorage.getItem('hive');
  const populatedHive = hiveData ? JSON.parse(hiveData) : null;
  const generateRandomNumber = (interval: number): number => {
    return Math.floor(Math.random() * interval);
  };
  const beeTypes = Object.keys(populatedHive);
  const beeTypeLength = beeTypes.length;
  const hitBeeType = beeTypes[generateRandomNumber(beeTypeLength)];

  const beesArray = populatedHive[hitBeeType].bees
  const beesArrayLength = beesArray.length;
  const randomBeeToHit = generateRandomNumber(beesArrayLength)

  populatedHive[hitBeeType].bees[randomBeeToHit] = populatedHive[hitBeeType].bees[randomBeeToHit] - 
    populatedHive[hitBeeType].damage
  const statusMessage = document.getElementById('statusMessage') as HTMLParagraphElement
  statusMessage.innerHTML = `You have hit a ${hitBeeType} and caused ${populatedHive[hitBeeType].damage} damage`

  // If the bee is dead remove it from the hive
  populatedHive[hitBeeType].bees = populatedHive[hitBeeType].bees.filter((item: number) => item > 0);
  
  hiveUI(populatedHive);

  // If all the bees from a certain type are dead check if that type is required
  if (populatedHive[hitBeeType].bees.length === 0 && populatedHive[hitBeeType].isRequiredForSwarn) {
    endGame();
  }
  
}
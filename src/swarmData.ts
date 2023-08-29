import { SwarmMembersInterface } from "./SwarmInterface";
const swarmMembers: SwarmMembersInterface = {
  queen: {
    isRequiredForSwarn: true,
    health: 100,
    damage: 8,
    numberOfBees: 1,
  },
  worker: {
    isRequiredForSwarn: false,
    health: 75,
    damage: 10,
    numberOfBees: 5,
  },
  drone: {
    isRequiredForSwarn: false,
    health: 50,
    damage: 12,
    numberOfBees: 8,
  },
};

export default swarmMembers;

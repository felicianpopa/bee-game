interface BeeType {
  isRequiredForSwarn: boolean;
  health: number;
  damage: number;
  numberOfBees: number;
};

export type SwarmMembersInterface = {
  [key: string]: BeeType;
};

export interface SwarmData {
  [key: string]: any;
};
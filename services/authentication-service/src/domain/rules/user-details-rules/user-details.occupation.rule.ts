export interface IUserDetailsOccupationRule {
  LENGTH: {
    MAX: number;
    MIN: number;
  };
}

export const userDetailsOccupationRule: IUserDetailsOccupationRule = {
  LENGTH: {
    MAX: 50,
    MIN: 3
  }
};

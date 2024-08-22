export interface IUserDetailsHobbyRule {
  LENGTH: {
    MAX: number;
    MIN: number;
  };
}

export const userDetailsHobbyRule: IUserDetailsHobbyRule = {
  LENGTH: {
    MAX: 50,
    MIN: 3
  }
};

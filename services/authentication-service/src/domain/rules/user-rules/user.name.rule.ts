export interface IUserNameRule {
  LENGTH: {
    MAX: number;
    MIN: number;
  };
  REG_EXP: {
    LETTERS_ONLY: RegExp;
  };
}

export const userNameRule: IUserNameRule = {
  LENGTH: {
    MAX: 30,
    MIN: 3
  },
  REG_EXP: {
    LETTERS_ONLY: /^[a-zA-Z]+$/
  }
};

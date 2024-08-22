export interface IUserUsernameRule {
  LENGTH: {
    MAX: number;
    MIN: number;
  };
  REG_EXP: {
    HYPHENS_LETTERS_ONLY: RegExp;
  };
}

export const userUsernameRule: IUserUsernameRule = {
  LENGTH: {
    MAX: 20,
    MIN: 3
  },
  REG_EXP: {
    HYPHENS_LETTERS_ONLY: /^[A-Za-z-]+$/
  }
};

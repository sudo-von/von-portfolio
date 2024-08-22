export interface IUserPasswordRule {
  ALLOWED_SPECIAL_CHARACTERS: string[];
  LENGTH: {
    MAX: number;
    MIN: number;
  };
  REG_EXP: {
    NUMBER_REQUIRED: RegExp;
    UPPERCASE_REQUIRED: RegExp;
  };
}

export const userPasswordRule: IUserPasswordRule = {
  ALLOWED_SPECIAL_CHARACTERS: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='],
  LENGTH: {
    MAX: 100,
    MIN: 10
  },
  REG_EXP: {
    NUMBER_REQUIRED: /\d/,
    UPPERCASE_REQUIRED: /[A-Z]/
  }
};

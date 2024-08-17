import { IUserPasswordRule } from '@domain/user/interfaces/user.password.rule.interface';

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

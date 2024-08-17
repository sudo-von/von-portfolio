import { IUserPasswordRule } from '@domain/user/interfaces/user.password.rule.interface';

export const userPasswordRule: IUserPasswordRule = {
  LENGTH: {
    MAX: 100,
    MIN: 10
  },
  REG_EXP: {
    NUMBER_REQUIRED: /\d/,
    SPECIAL_CHARACTER_REQUIRED: /[!@#$%^&*()-=]/,
    UPPERCASE_REQUIRED: /[A-Z]/
  }
};

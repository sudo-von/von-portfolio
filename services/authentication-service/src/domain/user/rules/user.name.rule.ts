import { IUserNameRule } from '@domain/user/interfaces/user.name.rule.interface';

export const userNameRule: IUserNameRule = {
  LENGTH: {
    MAX: 30,
    MIN: 3
  },
  REG_EXP: {
    LETTERS_ONLY: /^[a-zA-Z]+$/
  }
};

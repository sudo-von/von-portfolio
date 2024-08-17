import { IUserUsernameRule } from '@domain/user/interfaces/user.username.rule.interface';

export const userUsernameRule: IUserUsernameRule = {
  LENGTH: {
    MAX: 20,
    MIN: 3
  },
  REG_EXP: {
    HYPHENS_LETTERS_ONLY: /^[A-Za-z-]+$/
  }
};

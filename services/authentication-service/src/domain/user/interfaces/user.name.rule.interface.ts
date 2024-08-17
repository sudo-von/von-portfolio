export interface IUserNameRule {
  LENGTH: {
    MAX: number;
    MIN: number;
  };
  REG_EXP: {
    LETTERS_ONLY: RegExp;
  };
}

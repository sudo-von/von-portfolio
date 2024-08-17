export interface IUserUsernameRule {
  LENGTH: {
    MAX: number;
    MIN: number;
  };
  REG_EXP: {
    HYPHENS_LETTERS_ONLY: RegExp;
  };
}

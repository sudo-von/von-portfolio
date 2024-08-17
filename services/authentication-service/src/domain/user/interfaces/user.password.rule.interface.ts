export interface IUserPasswordRule {
  LENGTH: {
    MAX: number;
    MIN: number;
  };
  REG_EXP: {
    NUMBER_REQUIRED: RegExp;
    SPECIAL_CHARACTER_REQUIRED: RegExp;
    UPPERCASE_REQUIRED: RegExp;
  };
}

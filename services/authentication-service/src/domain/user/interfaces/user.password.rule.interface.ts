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

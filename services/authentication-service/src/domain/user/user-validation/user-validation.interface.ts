export interface IUserValidationNameRule {
  MAX_LENGTH: number;
  MIN_LENGTH: number;
  REG_EXP: RegExp;
}

export interface IUserValidationPasswordRule {
  MAX_LENGTH: number;
  MIN_LENGTH: number;
  REG_EXP: RegExp;
}

export interface IUserValidationUsernameRule {
  MAX_LENGTH: number;
  MIN_LENGTH: number;
  REG_EXP: RegExp;
}

export interface IUserValidationRules {
  name: IUserValidationNameRule;
  password: IUserValidationPasswordRule;
  username: IUserValidationUsernameRule;
}

export interface IUserValidation {
  rules: IUserValidationRules;
}

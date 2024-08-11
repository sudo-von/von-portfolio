export interface IUserValidationNameRule {
  MAX_LENGTH: number;
  MIN_LENGTH: number;
  REG_EXP: RegExp;
}

export interface IUserValidationRules {
  name: IUserValidationNameRule;
}

export interface IUserValidation {
  rules: IUserValidationRules;
}

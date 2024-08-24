import { IUserRules } from '@domain/rules/user-rules/user.rules';

export interface IUserValidationServiceReader {
  validateName: (name: string) => void;
  validatePassword: (password: string) => void;
  validateUsername: (username: string) => void;
}

export interface IUserValidationService extends IUserValidationServiceReader {
  userRules: IUserRules;
}

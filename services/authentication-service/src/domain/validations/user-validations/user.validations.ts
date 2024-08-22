import { IUserRules } from '@domain/rules/user-rules/user.rules';

export interface IUserValidationsReader {
  validateName: (name: string) => void;
  validatePassword: (password: string) => void;
  validateUsername: (username: string) => void;
}

export interface IUserValidations extends IUserValidationsReader {
  userRules: IUserRules;
}

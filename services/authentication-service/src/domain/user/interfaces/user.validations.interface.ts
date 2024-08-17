import { IUserRules } from '@domain/user/interfaces/user.rules.interface';

export interface IUserValidationsReader {
  validateName: (name: string) => void;
  validatePassword: (password: string) => void;
  validateUsername: (username: string) => void;
}

export interface IUserValidations extends IUserValidationsReader {
  userRules: IUserRules;
}

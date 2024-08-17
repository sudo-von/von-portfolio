import { IUserDetailsRules } from '@domain/user-details/interfaces/user-details.rules.interface';

export interface IUserDetailsValidationsReader {
  validateHobby: (hobby: string) => void;
  validateOccupation: (occupation: string) => void;
}

export interface IUserDetailsValidations extends IUserDetailsValidationsReader {
  userDetailsRules: IUserDetailsRules;
}

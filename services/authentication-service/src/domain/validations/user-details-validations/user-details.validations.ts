import { IUserDetailsRules } from '@domain/rules/user-details-rules/user-details.rules';

export interface IUserDetailsValidationsReader {
  validateHobby: (hobby: string) => void;
  validateOccupation: (occupation: string) => void;
}

export interface IUserDetailsValidations extends IUserDetailsValidationsReader {
  userDetailsRules: IUserDetailsRules;
}

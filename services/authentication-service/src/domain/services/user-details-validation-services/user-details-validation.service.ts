import { IUserDetailsRules } from '@domain/rules/user-details-rules/user-details.rules';

export interface IUserDetailsValidationServiceReader {
  validateHobby: (hobby: string) => void;
  validateOccupation: (occupation: string) => void;
}

export interface IUserDetailsValidationService extends IUserDetailsValidationServiceReader {
  userDetailsRules: IUserDetailsRules;
}

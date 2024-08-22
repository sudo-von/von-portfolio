import {
  IUserDetailsHobbyRule,
  userDetailsHobbyRule
} from '@domain/rules/user-details-rules/user-details.hobby.rule';
import {
  IUserDetailsOccupationRule,
  userDetailsOccupationRule
} from '@domain/rules/user-details-rules/user-details.occupation.rule';

export interface IUserDetailsRules {
  hobby: IUserDetailsHobbyRule;
  occupation: IUserDetailsOccupationRule;
}

export const userDetailsRules: IUserDetailsRules = {
  hobby: userDetailsHobbyRule,
  occupation: userDetailsOccupationRule
};

import { IUserDetailsRules } from '@domain/user-details/interfaces/user-details.rules.interface';
import { userDetailsHobbyRule } from '@domain/user-details/rules/user-details.hobby.rule';
import { userDetailsOccupationRule } from '@domain/user-details/rules/user-details.occupation.rule';

export const userDetailsRules: IUserDetailsRules = {
  hobby: userDetailsHobbyRule,
  occupation: userDetailsOccupationRule
};

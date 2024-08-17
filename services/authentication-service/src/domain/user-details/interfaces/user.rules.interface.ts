import { IUserDetailsHobbyRule } from '@domain/user-details/interfaces/user-details.hobby.rule.interface';
import { IUserDetailsOccupationRule } from '@domain/user-details/interfaces/user-details.occupation.rule.interface';

export interface IUserDetailsRules {
  hobby: IUserDetailsHobbyRule;
  occupation: IUserDetailsOccupationRule;
}

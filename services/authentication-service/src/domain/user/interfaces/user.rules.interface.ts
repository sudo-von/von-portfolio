import { IUserNameRule } from '@domain/user/interfaces/user.name.rule.interface';
import { IUserPasswordRule } from '@domain/user/interfaces/user.password.rule.interface';
import { IUserUsernameRule } from '@domain/user/interfaces/user.username.rule.interface';

export interface IUserRules {
  name: IUserNameRule;
  password: IUserPasswordRule;
  username: IUserUsernameRule;
}

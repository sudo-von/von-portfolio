import { IUserNameRule, userNameRule } from '@domain/rules/user-rules/user.name.rule';
import { IUserPasswordRule, userPasswordRule } from '@domain/rules/user-rules/user.password.rule';
import { IUserUsernameRule, userUsernameRule } from '@domain/rules/user-rules/user.username.rule';

export interface IUserRules {
  name: IUserNameRule;
  password: IUserPasswordRule;
  username: IUserUsernameRule;
}

export const userRules: IUserRules = {
  name: userNameRule,
  password: userPasswordRule,
  username: userUsernameRule
};

import { IUserRules } from '@domain/user/interfaces/user.rules.interface';
import { userNameRule } from '@domain/user/rules/user.name.rule';
import { userPasswordRule } from '@domain/user/rules/user.password.rule';
import { userUsernameRule } from '@domain/user/rules/user.username.rule';

export const userRules: IUserRules = {
  name: userNameRule,
  password: userPasswordRule,
  username: userUsernameRule
};

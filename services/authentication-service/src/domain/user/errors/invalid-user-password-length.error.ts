import { Error } from '@domain/error/entities/error.entity';
import { userPasswordRule } from '@domain/user/rules/user.password.rule';

export class InvalidUserPasswordLength extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_PASSWORD_LENGTH',
      message: `Please provide a password that consists of ${userPasswordRule.LENGTH.MIN} to ${userPasswordRule.LENGTH.MAX} characters.`
    });
  }
}

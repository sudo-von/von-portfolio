import { DomainError } from '@domain/errors/error';
import { userPasswordRule } from '@domain/rules/user-rules/user.password.rule';

export class UserPasswordLengthError extends DomainError {
  constructor() {
    super({
      code: 'USER_PASSWORD_LENGTH_ERROR',
      message: `Please provide a password that consists of ${userPasswordRule.LENGTH.MIN} to ${userPasswordRule.LENGTH.MAX} characters.`
    });
  }
}

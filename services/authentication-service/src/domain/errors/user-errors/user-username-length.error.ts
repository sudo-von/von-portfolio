import { DomainError } from '@domain/errors/error';
import { userUsernameRule } from '@domain/rules/user-rules/user.username.rule';

export class UserUsernameLengthError extends DomainError {
  constructor() {
    super({
      code: 'USER_USERNAME_LENGTH_ERROR',
      message: `Please provide a username that consists of ${userUsernameRule.LENGTH.MIN} to ${userUsernameRule.LENGTH.MAX} characters.`
    });
  }
}

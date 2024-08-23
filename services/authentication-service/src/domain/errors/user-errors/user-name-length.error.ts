import { DomainError } from '@domain/errors/error';
import { userNameRule } from '@domain/rules/user-rules/user.name.rule';

export class UserNameLengthError extends DomainError {
  constructor() {
    super({
      code: 'USER_NAME_LENGTH_ERROR',
      message: `Please provide a name that consists of ${userNameRule.LENGTH.MIN} to ${userNameRule.LENGTH.MAX} characters.`
    });
  }
}

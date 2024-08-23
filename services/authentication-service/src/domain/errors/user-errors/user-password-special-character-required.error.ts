import { DomainError } from '@domain/errors/error';
import { userPasswordRule } from '@domain/rules/user-rules/user.password.rule';

export class UserPasswordSpecialCharacterRequiredError extends DomainError {
  constructor() {
    super({
      code: 'USER_PASSWORD_SPECIAL_CHARACTER_REQUIRED_ERROR',
      message: `Please provide a password that contains at least one special character from the following list: ${userPasswordRule.ALLOWED_SPECIAL_CHARACTERS.join(',')}.`
    });
  }
}

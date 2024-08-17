import { Error } from '@domain/error/entities/error.entity';
import { userPasswordRule } from '@domain/user/rules/user.password.rule';

export class InvalidUserPasswordSpecialCharacterRequired extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_PASSWORD_SPECIAL_CHARACTER_REQUIRED',
      message: `Please provide a password that contains at least one special character from the following list: ${userPasswordRule.ALLOWED_SPECIAL_CHARACTERS.join(',')}.`
    });
  }
}

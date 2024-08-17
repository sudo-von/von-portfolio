import { Error } from '@domain/error/entities/error.entity';
import { userUsernameRule } from '@domain/user/rules/user.username.rule';

export class InvalidUserUsernameLength extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_USERNAME_LENGTH',
      message: `Please provide a username that consists of ${userUsernameRule.LENGTH.MIN} to ${userUsernameRule.LENGTH.MAX} characters.`
    });
  }
}

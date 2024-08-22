import { Error } from '@domain/error/entities/error.entity';
import { userNameRule } from '@domain/rules/user-rules/user.name.rule';

export class InvalidUserNameLength extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_NAME_LENGTH',
      message: `Please provide a name that consists of ${userNameRule.LENGTH.MIN} to ${userNameRule.LENGTH.MAX} characters.`
    });
  }
}

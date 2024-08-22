import { Error } from '@domain/error/entities/error.entity';
import { userDetailsHobbyRule } from '@domain/rules/user-details-rules/user-details.hobby.rule';

export class InvalidUserDetailsHobbyLength extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_DETAILS_HOBBY_LENGTH',
      message: `Please provide a hobby that consists of ${userDetailsHobbyRule.LENGTH.MIN} to ${userDetailsHobbyRule.LENGTH.MAX} characters.`
    });
  }
}

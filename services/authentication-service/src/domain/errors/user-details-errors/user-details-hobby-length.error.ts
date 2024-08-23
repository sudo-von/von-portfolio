import { DomainError } from '@domain/errors/error';
import { userDetailsHobbyRule } from '@domain/rules/user-details-rules/user-details.hobby.rule';

export class UserDetailsHobbyLengthError extends DomainError {
  constructor() {
    super({
      code: 'USER_DETAILS_HOBBY_LENGTH_ERROR',
      message: `Please provide a hobby that consists of ${userDetailsHobbyRule.LENGTH.MIN} to ${userDetailsHobbyRule.LENGTH.MAX} characters.`
    });
  }
}

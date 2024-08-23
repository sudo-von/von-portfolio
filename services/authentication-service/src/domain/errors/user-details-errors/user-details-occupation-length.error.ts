import { DomainError } from '@domain/errors/error';
import { userDetailsOccupationRule } from '@domain/rules/user-details-rules/user-details.occupation.rule';

export class UserDetailsOccupationLengthError extends DomainError {
  constructor() {
    super({
      code: 'USER_DETAILS_OCCUPATION_LENGTH_ERROR',
      message: `Please provide an occupation that consists of ${userDetailsOccupationRule.LENGTH.MIN} to ${userDetailsOccupationRule.LENGTH.MAX} characters.`
    });
  }
}

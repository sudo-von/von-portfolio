import { Error } from '@domain/error/entities/error.entity';
import { userDetailsOccupationRule } from '@domain/rules/user-details-rules/user-details.occupation.rule';

export class InvalidUserDetailsOccupationLength extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_DETAILS_OCCUPATION_LENGTH',
      message: `Please provide an occupation that consists of ${userDetailsOccupationRule.LENGTH.MIN} to ${userDetailsOccupationRule.LENGTH.MAX} characters.`
    });
  }
}

import { DomainError } from '@domain/errors/error';

export class UserUsernameNoLeadingHyphenError extends DomainError {
  constructor() {
    super({
      code: 'USER_USERNAME_NO_LEADING_HYPHEN_ERROR',
      message: 'Please provide a username that does not start with a hyphen.'
    });
  }
}

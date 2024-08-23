import { DomainError } from '@domain/errors/error';

export class UserUsernameNoTrailingHyphenError extends DomainError {
  constructor() {
    super({
      code: 'USER_USERNAME_NO_TRAILING_HYPHEN_ERROR',
      message: 'Please provide a username that does not end with a hyphen.'
    });
  }
}

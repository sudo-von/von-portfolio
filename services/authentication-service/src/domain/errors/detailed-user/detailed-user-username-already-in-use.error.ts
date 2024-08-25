import { DomainError } from '@domain/errors/error';

export class DetailedUserUsernameAlreadyInUseError extends DomainError {
  constructor() {
    super({
      code: 'DETAILED_USER_USERNAME_ALREADY_IN_USE_ERROR',
      message: "Please provide a different username as the one you've chosen is already in use."
    });
  }
}

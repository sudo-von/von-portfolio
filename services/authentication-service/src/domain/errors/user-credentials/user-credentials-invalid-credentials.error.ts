import { DomainError } from '@domain/errors/error';

export class UserCredentialsInvalidCredentialsError extends DomainError {
  constructor() {
    super({
      code: 'USER_CREDENTIALS_INVALID_CREDENTIALS_ERROR',
      message: 'Please verify your credentials and try again.'
    });
  }
}

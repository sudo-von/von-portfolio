import { DomainError } from '@domain/errors/error';

export class UserPasswordNumberRequiredError extends DomainError {
  constructor() {
    super({
      code: 'USER_PASSWORD_NUMBER_REQUIRED_ERROR',
      message: 'Please provide a password that contains at least one number.'
    });
  }
}

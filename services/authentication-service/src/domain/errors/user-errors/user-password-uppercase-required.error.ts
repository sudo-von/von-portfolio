import { DomainError } from '@domain/errors/error';

export class UserPasswordUppercaseRequiredError extends DomainError {
  constructor() {
    super({
      code: 'INVALID_USER_PASSWORD_UPPERCASE_REQUIRED_ERROR',
      message: 'Please provide a password that contains at least one uppercase letter.'
    });
  }
}

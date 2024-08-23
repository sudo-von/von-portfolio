import { DomainError } from '@domain/errors/error';

export class UserNameError extends DomainError {
  constructor() {
    super({
      code: 'USER_NAME_ERROR',
      message: 'Please provide a name that contains only letters.'
    });
  }
}

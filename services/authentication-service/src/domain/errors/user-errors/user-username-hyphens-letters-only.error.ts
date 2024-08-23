import { DomainError } from '@domain/errors/error';

export class UserUsernameHyphensLettersOnlyError extends DomainError {
  constructor() {
    super({
      code: 'USER_USERNAME_HYPHENS_LETTERS_ONLY_ERROR',
      message: 'Please provide a username that consists of only letters and hyphens.'
    });
  }
}

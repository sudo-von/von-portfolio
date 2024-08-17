import { Error } from '@domain/error/entities/error.entity';

export class InvalidUserUsernameHyphensLettersOnly extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_USERNAME_HYPHENS_LETTERS_ONLY',
      message: `Please provide a username that consists of only letters and hyphens.`
    });
  }
}

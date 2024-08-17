import { Error } from '@domain/error/entities/error.entity';

export class InvalidUserUsernameNoTrailingHyphen extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_USERNAME_NO_TRAILING_HYPHEN',
      message: `Please provide a username that does not end with a hyphen.`
    });
  }
}

import { Error } from '@domain/error/entities/error.entity';

export class InvalidUserUsernameNoLeadingHyphen extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_USERNAME_NO_LEADING_HYPHEN',
      message: `Please provide a username that does not start with a hyphen.`
    });
  }
}

import { Error } from '@domain/error/entities/error.entity';

export class InvalidUserPasswordUppercaseRequired extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_PASSWORD_UPPERCASE_REQUIRED',
      message: `Please provide a password that contains at least one uppercase letter.`
    });
  }
}

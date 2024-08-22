import { Error } from '@domain/error/entities/error.entity';

export class InvalidUserPasswordNumberRequired extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_PASSWORD_NUMBER_REQUIRED',
      message: `Please provide a password that contains at least one number.`
    });
  }
}

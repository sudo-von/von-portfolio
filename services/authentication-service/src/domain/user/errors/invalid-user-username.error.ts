import { Error } from '@domain/error/entities/error.entity';

export class InvalidUserUsernameError extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_USERNAME',
      message: `Please provide a username that consists of only letters, numbers and hyphens.`
    });
  }
}

import { Error } from '@domain/error/entities/error.entity';

export class InvalidUserName extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_NAME',
      message: `Please provide a name that contains only letters.`
    });
  }
}

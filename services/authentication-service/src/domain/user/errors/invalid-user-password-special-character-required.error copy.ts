import { Error } from '@domain/error/entities/error.entity';

export class InvalidUserPasswordSpecialCharacterRequired extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_PASSWORD_SPECIAL_CHARACTER_REQUIRED',
      message: `Please provide a password that contains at least one special character (e.g., !@#$%^&*()-=).`
    });
  }
}

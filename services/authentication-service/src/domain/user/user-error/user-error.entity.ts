import { Error } from '@domain/error/error.entity';

export class InvalidUserMethodNotImplementedYetError extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_METHOD_NOT_IMPLEMENTED_YET',
      message: 'Please provide an implementation for the requested user method.'
    });
  }
}

export class InvalidUserNameError extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_NAME',
      message: 'Please provide a name that consists of only letters.'
    });
  }
}

export class InvalidUserNameLengthError extends Error {
  constructor(maxLength: number, minLength: number) {
    super({
      code: 'INVALID_USER_NAME_LENGTH',
      message: `Please provide a name that consists of ${minLength} to ${maxLength} characters.`
    });
  }
}

export class InvalidUserPasswordError extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_PASSWORD',
      message: `Please provide a password that contains at least one uppercase letter and one symbol.`
    });
  }
}

export class InvalidUserPasswordLengthError extends Error {
  constructor(maxLength: number, minLength: number) {
    super({
      code: 'INVALID_USER_PASSWORD_LENGTH',
      message: `Please provide a password that consists of ${minLength} to ${maxLength} characters.`
    });
  }
}

export class InvalidUserUsernameError extends Error {
  constructor() {
    super({
      code: 'INVALID_USER_USERNAME',
      message: `Please provide a username that consists of only letters, numbers and underscores.`
    });
  }
}

export class InvalidUserUsernameLengthError extends Error {
  constructor(maxLength: number, minLength: number) {
    super({
      code: 'INVALID_USER_USERNAME_LENGTH',
      message: `Please provide a username that consists of ${minLength} to ${maxLength} characters.`
    });
  }
}

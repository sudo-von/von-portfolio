import { AbstractUserValidation } from '@domain/user/user-validation/user-validation.abstract';
import { IUserValidationRules } from '@domain/user/user-validation/user-validation.interface';
import {
  InvalidUserNameLengthError,
  InvalidUserNameError,
  InvalidUserPasswordError,
  InvalidUserPasswordLengthError,
  InvalidUserUsernameError
} from '@domain/user/user-error/user-error.entity';

export class UserValidation extends AbstractUserValidation {
  constructor(protected userValidationRules: IUserValidationRules) {
    super(userValidationRules);
  }

  validateName(name: string) {
    const { MAX_LENGTH, MIN_LENGTH, REG_EXP } = this.userValidationRules.name;

    const formattedName = name.trim();
    if (!REG_EXP.test(formattedName)) {
      throw new InvalidUserNameError();
    }

    const formattedNameLength = formattedName.length;
    if (formattedNameLength > MAX_LENGTH || formattedNameLength < MIN_LENGTH) {
      throw new InvalidUserNameLengthError(MAX_LENGTH, MIN_LENGTH);
    }
  }

  validatePassword(password: string) {
    const { MAX_LENGTH, MIN_LENGTH, REG_EXP } = this.userValidationRules.password;

    const formattedPassword = password.trim();
    if (!REG_EXP.test(formattedPassword)) {
      throw new InvalidUserPasswordError();
    }

    const formattedPasswordLength = formattedPassword.length;
    if (formattedPasswordLength > MAX_LENGTH || formattedPasswordLength < MIN_LENGTH) {
      throw new InvalidUserPasswordLengthError(MAX_LENGTH, MIN_LENGTH);
    }
  }

  validateUsername(username: string) {
    const { MAX_LENGTH, MIN_LENGTH, REG_EXP } = this.userValidationRules.username;

    const formattedUsername = username.trim();
    if (!REG_EXP.test(formattedUsername)) {
      throw new InvalidUserUsernameError();
    }

    const formattedUsernameLength = formattedUsername.length;
    if (formattedUsernameLength > MAX_LENGTH || formattedUsernameLength < MIN_LENGTH) {
      throw new InvalidUserNameLengthError(MAX_LENGTH, MIN_LENGTH);
    }
  }
}

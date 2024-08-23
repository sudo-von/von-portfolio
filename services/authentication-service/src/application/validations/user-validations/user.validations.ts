import { IUserRules } from '@domain/rules/user-rules/user.rules';
import { IUserValidations } from '@domain/validations/user-validations/user.validations';
import { UserNameLengthError } from '@domain/errors/user-errors/user-name-length.error';
import { UserNameError } from '@domain/errors/user-errors/user-name.error';
import { UserPasswordLengthError } from '@domain/errors/user-errors/user-password-length.error';
import { UserPasswordNumberRequiredError } from '@domain/errors/user-errors/user-password-number-required.error';
import { UserPasswordSpecialCharacterRequiredError } from '@domain/errors/user-errors/user-password-special-character-required.error';
import { UserPasswordUppercaseRequiredError } from '@domain/errors/user-errors/user-password-uppercase-required.error';
import { UserUsernameHyphensLettersOnlyError } from '@domain/errors/user-errors/user-username-hyphens-letters-only.error';
import { UserUsernameLengthError } from '@domain/errors/user-errors/user-username-length.error';
import { UserUsernameNoLeadingHyphenError } from '@domain/errors/user-errors/user-username-no-leading-hypen.error';
import { UserUsernameNoTrailingHyphenError } from '@domain/errors/user-errors/user-username-no-trailing-hypen.error';

export class UserValidations implements IUserValidations {
  constructor(public userRules: IUserRules) {}

  public validateName(name: string): void {
    const formattedName = name.trim();
    const formattedNameLength = formattedName.length;

    const { LENGTH, REG_EXP } = this.userRules.name;

    if (formattedNameLength < LENGTH.MIN || formattedNameLength > LENGTH.MAX) {
      throw new UserNameLengthError();
    }

    if (!REG_EXP.LETTERS_ONLY.test(formattedName)) {
      throw new UserNameError();
    }
  }

  public validatePassword(password: string): void {
    const formattedPassword = password.trim();
    const formattedPasswordLength = formattedPassword.length;

    const { ALLOWED_SPECIAL_CHARACTERS, LENGTH, REG_EXP } = this.userRules.password;

    if (formattedPasswordLength < LENGTH.MIN || formattedPasswordLength > LENGTH.MAX) {
      throw new UserPasswordLengthError();
    }

    if (!REG_EXP.NUMBER_REQUIRED.test(formattedPassword)) {
      throw new UserPasswordNumberRequiredError();
    }

    if (
      !ALLOWED_SPECIAL_CHARACTERS.some((specialCharacter) => formattedPassword.includes(specialCharacter))
    ) {
      throw new UserPasswordSpecialCharacterRequiredError();
    }

    if (!REG_EXP.UPPERCASE_REQUIRED.test(formattedPassword)) {
      throw new UserPasswordUppercaseRequiredError();
    }
  }

  public validateUsername(username: string): void {
    const formattedUsername = username.trim();
    const formattedUsernameLength = formattedUsername.length;

    const { LENGTH, REG_EXP } = this.userRules.username;

    if (formattedUsernameLength < LENGTH.MIN || formattedUsernameLength > LENGTH.MAX) {
      throw new UserUsernameLengthError();
    }

    if (!REG_EXP.HYPHENS_LETTERS_ONLY.test(formattedUsername)) {
      throw new UserUsernameHyphensLettersOnlyError();
    }

    if (formattedUsername.startsWith('-')) {
      throw new UserUsernameNoLeadingHyphenError();
    }

    if (formattedUsername.endsWith('-')) {
      throw new UserUsernameNoTrailingHyphenError();
    }
  }
}

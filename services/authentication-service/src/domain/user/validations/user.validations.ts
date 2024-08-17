import { IUserValidations } from '@domain/user/interfaces/user.validations.interface';
import { IUserRules } from '@domain/user/interfaces/user.rules.interface';
import { InvalidUserNameLength } from '@domain/user/errors/invalid-user-name-length.error';
import { InvalidUserName } from '@domain/user/errors/invalid-user-name.error';
import { InvalidUserPasswordLength } from '@domain/user/errors/invalid-user-password-length.error';
import { InvalidUserPasswordNumberRequired } from '@domain/user/errors/invalid-user-password-number-required.error';
import { InvalidUserPasswordSpecialCharacterRequired } from '@domain/user/errors/invalid-user-password-special-character-required.error';
import { InvalidUserPasswordUppercaseRequired } from '@domain/user/errors/invalid-user-password-uppercase-required.error';
import { InvalidUserUsernameHyphensLettersOnly } from '@domain/user/errors/invalid-user-username-hyphens-letters-only.error';
import { InvalidUserUsernameLength } from '@domain/user/errors/invalid-user-username-length.error';
import { InvalidUserUsernameNoLeadingHyphen } from '@domain/user/errors/invalid-user-username-no-leading-hypen.error';
import { InvalidUserUsernameNoTrailingHyphen } from '@domain/user/errors/invalid-user-username-no-trailing-hypen.error';

export class UserValidations implements IUserValidations {
  constructor(public userRules: IUserRules) {}

  public validateName(name: string): void {
    const formattedName = name.trim();
    const formattedNameLength = formattedName.length;

    const { LENGTH, REG_EXP } = this.userRules.name;

    if (formattedNameLength < LENGTH.MIN || formattedNameLength > LENGTH.MAX) {
      throw new InvalidUserNameLength();
    }

    if (!REG_EXP.LETTERS_ONLY.test(formattedName)) {
      throw new InvalidUserName();
    }
  }

  public validatePassword(password: string): void {
    const formattedPassword = password.trim();
    const formattedPasswordLength = formattedPassword.length;

    const { ALLOWED_SPECIAL_CHARACTERS, LENGTH, REG_EXP } = this.userRules.password;

    if (formattedPasswordLength < LENGTH.MIN || formattedPasswordLength > LENGTH.MAX) {
      throw new InvalidUserPasswordLength();
    }

    if (!REG_EXP.NUMBER_REQUIRED.test(formattedPassword)) {
      throw new InvalidUserPasswordNumberRequired();
    }

    if (
      !ALLOWED_SPECIAL_CHARACTERS.some((specialCharacter) => formattedPassword.includes(specialCharacter))
    ) {
      throw new InvalidUserPasswordSpecialCharacterRequired();
    }

    if (!REG_EXP.UPPERCASE_REQUIRED.test(formattedPassword)) {
      throw new InvalidUserPasswordUppercaseRequired();
    }
  }

  public validateUsername(username: string): void {
    const formattedUsername = username.trim();
    const formattedUsernameLength = formattedUsername.length;

    const { LENGTH, REG_EXP } = this.userRules.username;

    if (formattedUsernameLength < LENGTH.MIN || formattedUsernameLength > LENGTH.MAX) {
      throw new InvalidUserUsernameLength();
    }

    if (!REG_EXP.HYPHENS_LETTERS_ONLY.test(formattedUsername)) {
      throw new InvalidUserUsernameHyphensLettersOnly();
    }

    if (formattedUsername.startsWith('-')) {
      throw new InvalidUserUsernameNoLeadingHyphen();
    }

    if (formattedUsername.endsWith('-')) {
      throw new InvalidUserUsernameNoTrailingHyphen();
    }
  }
}

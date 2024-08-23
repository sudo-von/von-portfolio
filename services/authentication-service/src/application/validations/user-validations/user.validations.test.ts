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
import { userRules } from '@domain/rules/user-rules/user.rules';
import { UserValidations } from '@application/validations/user-validations/user.validations';

describe('UserValidations', () => {
  const userValidations = new UserValidations(userRules);

  describe('Name validations', () => {
    describe('When the name is invalid', () => {
      it('Should throw an exception when the name length is shorter than the minimum allowed', () => {
        const shortName = 'a'.repeat(userRules.name.LENGTH.MIN - 1);
        expect(() => userValidations.validateName(shortName)).toThrow(UserNameLengthError);
      });

      it('Should throw an exception when the name length exceeds the maximum allowed', () => {
        const longName = 'a'.repeat(userRules.name.LENGTH.MAX + 1);
        expect(() => userValidations.validateName(longName)).toThrow(UserNameLengthError);
      });

      it('Should throw an exception when the name contains a special character', () => {
        const nameWithSpecialCharacter = `${'a'.repeat(userRules.name.LENGTH.MIN - 1)}@`;
        expect(() => userValidations.validateName(nameWithSpecialCharacter)).toThrow(UserNameError);
      });

      it('Should throw an exception when the name contains a number', () => {
        const nameWithNumber = `${'a'.repeat(userRules.name.LENGTH.MIN - 1)}1`;
        expect(() => userValidations.validateName(nameWithNumber)).toThrow(UserNameError);
      });
    });

    describe('When the name is valid', () => {
      it('Should not throw an exception when the name contains only letters', () => {
        const validName = 'a'.repeat(userRules.name.LENGTH.MIN);
        expect(() => userValidations.validateName(validName)).not.toThrow();
      });
    });
  });

  describe('Password validations', () => {
    describe('When the password is invalid', () => {
      it('Should throw an exception when the password length is shorter than the minimum allowed', () => {
        const shortPassword = 'a'.repeat(userRules.password.LENGTH.MIN - 1);
        expect(() => userValidations.validatePassword(shortPassword)).toThrow(UserPasswordLengthError);
      });

      it('Should throw an exception when the password length exceeds the maximum allowed', () => {
        const longPassword = 'a'.repeat(userRules.password.LENGTH.MAX + 1);
        expect(() => userValidations.validatePassword(longPassword)).toThrow(UserPasswordLengthError);
      });

      it('Should throw an exception when the password does not contain a number', () => {
        const passwordWithoutNumber = 'a'.repeat(userRules.password.LENGTH.MIN);
        expect(() => userValidations.validatePassword(passwordWithoutNumber)).toThrow(
          UserPasswordNumberRequiredError
        );
      });

      it('Should throw an exception when the password does not contain a special character', () => {
        const passwordWithoutSpecialCharacter = `${'a'.repeat(userRules.password.LENGTH.MIN - 1)}1`;
        expect(() => userValidations.validatePassword(passwordWithoutSpecialCharacter)).toThrow(
          UserPasswordSpecialCharacterRequiredError
        );
      });

      it('Should throw an exception when the password does not contain an uppercase letter', () => {
        const passwordWithoutUppercase = `${'a'.repeat(userRules.password.LENGTH.MIN - 2)}1@`;
        expect(() => userValidations.validatePassword(passwordWithoutUppercase)).toThrow(
          UserPasswordUppercaseRequiredError
        );
      });
    });

    describe('When the password is valid', () => {
      it('Should not throw an exception when the password contains letters, a number, a special character, and an uppercase letter', () => {
        const validPassword = `${'a'.repeat(userRules.password.LENGTH.MIN - 3)}1@A`;
        expect(() => userValidations.validatePassword(validPassword)).not.toThrow();
      });
    });
  });

  describe('Username validations', () => {
    describe('When the username is invalid', () => {
      it('Should throw an exception when the username length is shorter than the minimum allowed', () => {
        const shortUsername = 'a'.repeat(userRules.username.LENGTH.MIN - 1);
        expect(() => userValidations.validateUsername(shortUsername)).toThrow(UserUsernameLengthError);
      });

      it('Should throw an exception when the username length exceeds the maximum allowed', () => {
        const longUsername = 'a'.repeat(userRules.username.LENGTH.MAX + 1);
        expect(() => userValidations.validateUsername(longUsername)).toThrow(UserUsernameLengthError);
      });

      it('Should throw an exception when the username contains a special character other than a hyphen', () => {
        const usernameWithSpecialCharacter = `${'a'.repeat(userRules.username.LENGTH.MIN - 1)}@`;
        expect(() => userValidations.validateUsername(usernameWithSpecialCharacter)).toThrow(
          UserUsernameHyphensLettersOnlyError
        );
      });

      it('Should throw an exception when the username starts with a hyphen', () => {
        const usernameStartingWithHyphen = `-${'a'.repeat(userRules.username.LENGTH.MIN - 1)}`;
        expect(() => userValidations.validateUsername(usernameStartingWithHyphen)).toThrow(
          UserUsernameNoLeadingHyphenError
        );
      });

      it('Should throw an exception when the username ends with a hyphen', () => {
        const usernameEndingWithHyphen = `${'a'.repeat(userRules.username.LENGTH.MIN - 1)}-`;
        expect(() => userValidations.validateUsername(usernameEndingWithHyphen)).toThrow(
          UserUsernameNoTrailingHyphenError
        );
      });
    });

    describe('When the username is valid', () => {
      it('Should not throw an exception when the username contains only letters or letters with hyphens', () => {
        const validUsername = `${'a'.repeat(userRules.username.LENGTH.MIN - 2)}-a`;
        expect(() => userValidations.validateUsername(validUsername)).not.toThrow();
      });
    });
  });
});

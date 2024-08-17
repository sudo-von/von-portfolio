import { userRules } from '@domain/user/rules/user.rules';
import { UserValidations } from '@domain/user/validations/user.validations';
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

describe('UserValidations', () => {
  const userValidations = new UserValidations(userRules);

  describe('Name validations', () => {
    describe('When the name is invalid', () => {
      it('Should throw an exception when the name length is shorter than the minimum allowed', () => {
        const shortName = 'a'.repeat(userRules.name.LENGTH.MIN - 1);
        expect(() => userValidations.validateName(shortName)).toThrow(InvalidUserNameLength);
      });

      it('Should throw an exception when the name length exceeds the maximum allowed', () => {
        const longName = 'a'.repeat(userRules.name.LENGTH.MAX + 1);
        expect(() => userValidations.validateName(longName)).toThrow(InvalidUserNameLength);
      });

      it('Should throw an exception when the name contains a special character', () => {
        const nameWithSpecialCharacter = `${'a'.repeat(userRules.name.LENGTH.MIN - 1)}@`;
        expect(() => userValidations.validateName(nameWithSpecialCharacter)).toThrow(InvalidUserName);
      });

      it('Should throw an exception when the name contains a number', () => {
        const nameWithNumber = `${'a'.repeat(userRules.name.LENGTH.MIN - 1)}1`;
        expect(() => userValidations.validateName(nameWithNumber)).toThrow(InvalidUserName);
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
        expect(() => userValidations.validatePassword(shortPassword)).toThrow(InvalidUserPasswordLength);
      });

      it('Should throw an exception when the password length exceeds the maximum allowed', () => {
        const longPassword = 'a'.repeat(userRules.password.LENGTH.MAX + 1);
        expect(() => userValidations.validatePassword(longPassword)).toThrow(InvalidUserPasswordLength);
      });

      it('Should throw an exception when the password does not contain a number', () => {
        const passwordWithoutNumber = 'a'.repeat(userRules.password.LENGTH.MIN);
        expect(() => userValidations.validatePassword(passwordWithoutNumber)).toThrow(
          InvalidUserPasswordNumberRequired
        );
      });

      it('Should throw an exception when the password does not contain a special character', () => {
        const passwordWithoutSpecialCharacter = `${'a'.repeat(userRules.password.LENGTH.MIN - 1)}1`;
        expect(() => userValidations.validatePassword(passwordWithoutSpecialCharacter)).toThrow(
          InvalidUserPasswordSpecialCharacterRequired
        );
      });

      it('Should throw an exception when the password does not contain an uppercase letter', () => {
        const passwordWithoutUppercase = `${'a'.repeat(userRules.password.LENGTH.MIN - 2)}1@`;
        expect(() => userValidations.validatePassword(passwordWithoutUppercase)).toThrow(
          InvalidUserPasswordUppercaseRequired
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
        expect(() => userValidations.validateUsername(shortUsername)).toThrow(InvalidUserUsernameLength);
      });

      it('Should throw an exception when the username length exceeds the maximum allowed', () => {
        const longUsername = 'a'.repeat(userRules.username.LENGTH.MAX + 1);
        expect(() => userValidations.validateUsername(longUsername)).toThrow(InvalidUserUsernameLength);
      });

      it('Should throw an exception when the username contains a special character other than a hyphen', () => {
        const usernameWithSpecialCharacter = `${'a'.repeat(userRules.username.LENGTH.MIN - 1)}@`;
        expect(() => userValidations.validateUsername(usernameWithSpecialCharacter)).toThrow(
          InvalidUserUsernameHyphensLettersOnly
        );
      });

      it('Should throw an exception when the username starts with a hyphen', () => {
        const usernameStartingWithHyphen = `-${'a'.repeat(userRules.username.LENGTH.MIN - 1)}`;
        expect(() => userValidations.validateUsername(usernameStartingWithHyphen)).toThrow(
          InvalidUserUsernameNoLeadingHyphen
        );
      });

      it('Should throw an exception when the username ends with a hyphen', () => {
        const usernameEndingWithHyphen = `${'a'.repeat(userRules.username.LENGTH.MIN - 1)}-`;
        expect(() => userValidations.validateUsername(usernameEndingWithHyphen)).toThrow(
          InvalidUserUsernameNoTrailingHyphen
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

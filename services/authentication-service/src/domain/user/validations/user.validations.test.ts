import { userRules } from '@domain/user/rules/user.rules';
import { UserValidations } from '@domain/user/validations/user.validations';
import { InvalidUserNameLength } from '@domain/user/errors/invalid-user-name-length.error';
import { InvalidUserName } from '@domain/user/errors/invalid-user-name.error';

describe('UserValidations', () => {
  const userValidations = new UserValidations(userRules);

  describe('Name Validation', () => {
    describe('When the name is invalid', () => {
      it('Should throw an exception when the name length is shorter than the minimum allowed', () => {
        const shortName = 'a'.repeat(userRules.name.LENGTH.MIN - 1);
        expect(() => userValidations.validateName(shortName)).toThrow(InvalidUserNameLength);
      });

      it('Should throw an exception when the name length exceeds the maximum allowed', () => {
        const longName = 'a'.repeat(userRules.name.LENGTH.MAX + 1);
        expect(() => userValidations.validateName(longName)).toThrow(InvalidUserNameLength);
      });

      it('Should throw an exception when the name contains special characters', () => {
        const nameWithSpecialChars = '@'.repeat(userRules.name.LENGTH.MIN);
        expect(() => userValidations.validateName(nameWithSpecialChars)).toThrow(InvalidUserName);
      });

      it('Should throw an exception when the name contains numbers', () => {
        const nameWithNumbers = '1'.repeat(userRules.name.LENGTH.MIN);
        expect(() => userValidations.validateName(nameWithNumbers)).toThrow(InvalidUserName);
      });
    });

    describe('When the name is valid', () => {
      it('Should not throw an exception when the name contains only letters', () => {
        const validName = 'a'.repeat(userRules.name.LENGTH.MIN);
        expect(() => userValidations.validateName(validName)).not.toThrow();
      });
    });
  });
});

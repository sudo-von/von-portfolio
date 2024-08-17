import { userDetailsRules } from '@domain/user-details/rules/user-details.rules';
import { UserDetailsValidations } from '@domain/user-details/validations/user-details.validations';
import { InvalidUserDetailsHobbyLength } from '@domain/user-details/errors/invalid-user-details-hobby-length.error';
import { InvalidUserDetailsOccupationLength } from '@domain/user-details/errors/invalid-user-details-occupation-length.error';

describe('UserDetailsValidations', () => {
  const userDetailsValidations = new UserDetailsValidations(userDetailsRules);

  describe('Hobby validations', () => {
    describe('When the hobby is invalid', () => {
      it('Should throw an exception when the hobby length is shorter than the minimum allowed', () => {
        const shortHobby = 'a'.repeat(userDetailsRules.hobby.LENGTH.MIN - 1);
        expect(() => userDetailsValidations.validateHobby(shortHobby)).toThrow(InvalidUserDetailsHobbyLength);
      });

      it('Should throw an exception when the hobby length exceeds the maximum allowed', () => {
        const longHobby = 'a'.repeat(userDetailsRules.hobby.LENGTH.MAX + 1);
        expect(() => userDetailsValidations.validateHobby(longHobby)).toThrow(InvalidUserDetailsHobbyLength);
      });
    });

    describe('When the hobby is valid', () => {
      it('Should not throw an exception', () => {
        const validHobby = 'a'.repeat(userDetailsRules.hobby.LENGTH.MIN);
        expect(() => userDetailsValidations.validateHobby(validHobby)).not.toThrow();
      });
    });
  });

  describe('Occupation validations', () => {
    describe('When the occupation is invalid', () => {
      it('Should throw an exception when the occupation length is shorter than the minimum allowed', () => {
        const shortOccupation = 'a'.repeat(userDetailsRules.occupation.LENGTH.MIN - 1);
        expect(() => userDetailsValidations.validateOccupation(shortOccupation)).toThrow(
          InvalidUserDetailsOccupationLength
        );
      });

      it('Should throw an exception when the occupation length exceeds the maximum allowed', () => {
        const longOccupation = 'a'.repeat(userDetailsRules.occupation.LENGTH.MAX + 1);
        expect(() => userDetailsValidations.validateOccupation(longOccupation)).toThrow(
          InvalidUserDetailsOccupationLength
        );
      });
    });

    describe('When the occupation is valid', () => {
      it('Should not throw an exception', () => {
        const validOccupation = 'a'.repeat(userDetailsRules.occupation.LENGTH.MIN);
        expect(() => userDetailsValidations.validateOccupation(validOccupation)).not.toThrow();
      });
    });
  });
});

import { userDetailsRules } from '@domain/rules/user-details-rules/user-details.rules';
import { UserDetailsHobbyLengthError } from '@domain/errors/user-details-errors/user-details-hobby-length.error';
import { UserDetailsOccupationLengthError } from '@domain/errors/user-details-errors/user-details-occupation-length.error';
import { UserDetailsValidationService } from '@application/services/user-details-validation-services/user-details-validation.service';

describe('UserDetailsValidationService', () => {
  const userDetailsValidationService = new UserDetailsValidationService(userDetailsRules);

  describe('Hobby validations', () => {
    describe('When the hobby is invalid', () => {
      it('Should throw an exception when the hobby length is shorter than the minimum allowed', () => {
        const shortHobby = 'a'.repeat(userDetailsRules.hobby.LENGTH.MIN - 1);
        expect(() => userDetailsValidationService.validateHobby(shortHobby)).toThrow(
          UserDetailsHobbyLengthError
        );
      });

      it('Should throw an exception when the hobby length exceeds the maximum allowed', () => {
        const longHobby = 'a'.repeat(userDetailsRules.hobby.LENGTH.MAX + 1);
        expect(() => userDetailsValidationService.validateHobby(longHobby)).toThrow(
          UserDetailsHobbyLengthError
        );
      });
    });

    describe('When the hobby is valid', () => {
      it('Should not throw an exception', () => {
        const validHobby = 'a'.repeat(userDetailsRules.hobby.LENGTH.MIN);
        expect(() => userDetailsValidationService.validateHobby(validHobby)).not.toThrow();
      });
    });
  });

  describe('Occupation validations', () => {
    describe('When the occupation is invalid', () => {
      it('Should throw an exception when the occupation length is shorter than the minimum allowed', () => {
        const shortOccupation = 'a'.repeat(userDetailsRules.occupation.LENGTH.MIN - 1);
        expect(() => userDetailsValidationService.validateOccupation(shortOccupation)).toThrow(
          UserDetailsOccupationLengthError
        );
      });

      it('Should throw an exception when the occupation length exceeds the maximum allowed', () => {
        const longOccupation = 'a'.repeat(userDetailsRules.occupation.LENGTH.MAX + 1);
        expect(() => userDetailsValidationService.validateOccupation(longOccupation)).toThrow(
          UserDetailsOccupationLengthError
        );
      });
    });

    describe('When the occupation is valid', () => {
      it('Should not throw an exception', () => {
        const validOccupation = 'a'.repeat(userDetailsRules.occupation.LENGTH.MIN);
        expect(() => userDetailsValidationService.validateOccupation(validOccupation)).not.toThrow();
      });
    });
  });
});

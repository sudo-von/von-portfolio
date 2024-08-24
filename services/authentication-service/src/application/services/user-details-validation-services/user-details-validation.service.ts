import { UserDetailsHobbyLengthError } from '@domain/errors/user-details-errors/user-details-hobby-length.error';
import { UserDetailsOccupationLengthError } from '@domain/errors/user-details-errors/user-details-occupation-length.error';
import { IUserDetailsValidationService } from '@domain/services/user-details-validation-services/user-details-validation.service';
import { IUserDetailsRules } from '@domain/rules/user-details-rules/user-details.rules';

export class UserDetailsValidationService implements IUserDetailsValidationService {
  constructor(public userDetailsRules: IUserDetailsRules) {}

  public validateHobby(hobby: string): void {
    const formattedHobby = hobby.trim();
    const formattedHobbyLength = formattedHobby.length;

    const { LENGTH } = this.userDetailsRules.hobby;

    if (formattedHobbyLength < LENGTH.MIN || formattedHobbyLength > LENGTH.MAX) {
      throw new UserDetailsHobbyLengthError();
    }
  }

  public validateOccupation(occupation: string): void {
    const formattedOccupation = occupation.trim();
    const formattedOccupationLength = formattedOccupation.length;

    const { LENGTH } = this.userDetailsRules.hobby;

    if (formattedOccupationLength < LENGTH.MIN || formattedOccupationLength > LENGTH.MAX) {
      throw new UserDetailsOccupationLengthError();
    }
  }
}

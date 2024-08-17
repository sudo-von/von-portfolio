import { IUserDetailsValidations } from '@domain/user-details/interfaces/user-details.validations.interface';
import { IUserDetailsRules } from '@domain/user-details/interfaces/user-details.rules.interface';
import { InvalidUserDetailsHobbyLength } from '@domain/user-details/errors/invalid-user-details-hobby-length.error';
import { InvalidUserDetailsOccupationLength } from '@domain/user-details/errors/invalid-user-details-occupation-length.error';

export class UserDetailsValidations implements IUserDetailsValidations {
  constructor(public userDetailsRules: IUserDetailsRules) {}

  public validateHobby(hobby: string): void {
    const formattedHobby = hobby.trim();
    const formattedHobbyLength = formattedHobby.length;

    const { LENGTH } = this.userDetailsRules.hobby;

    if (formattedHobbyLength < LENGTH.MIN || formattedHobbyLength > LENGTH.MAX) {
      throw new InvalidUserDetailsHobbyLength();
    }
  }

  public validateOccupation(occupation: string): void {
    const formattedOccupation = occupation.trim();
    const formattedOccupationLength = formattedOccupation.length;

    const { LENGTH } = this.userDetailsRules.hobby;

    if (formattedOccupationLength < LENGTH.MIN || formattedOccupationLength > LENGTH.MAX) {
      throw new InvalidUserDetailsOccupationLength();
    }
  }
}

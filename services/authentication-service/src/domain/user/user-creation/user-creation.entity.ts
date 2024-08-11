import { IUserCreation } from '@domain/user/user-creation/user-creation.interface';
import { AbstractUserCreation } from '@domain/user/user-creation/user-creation.abstract';
import { AbstractUserValidation } from '@domain/user/user-validation/user-validation.abstract';

export class UserCreation extends AbstractUserCreation {
  constructor(
    protected userCreation: IUserCreation,
    protected userValidation: AbstractUserValidation
  ) {
    super(userCreation, userValidation);

    this.userValidation.validateName(userCreation.name);
    this.userValidation.validatePassword(userCreation.password);
    this.userValidation.validateUsername(userCreation.username);
  }
}

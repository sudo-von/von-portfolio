import { IUserCreation } from '@domain/user/user-creation/user-creation.interface';
import { AbstractUserValidation } from '@domain/user/user-validation/user-validation.abstract';

export abstract class AbstractUserCreation {
  constructor(
    protected userCreation: IUserCreation,
    protected validateUser: AbstractUserValidation
  ) {}
}

import { IUser } from '@domain/user/user.interface';
import { AbstractUser } from '@domain/user/user.abstract';
import { AbstractUserValidation } from '@domain/user/user-validation/user-validation.abstract';

export class User extends AbstractUser {
  constructor(
    protected user: IUser,
    protected userValidation: AbstractUserValidation
  ) {
    super(user, userValidation);
  }
}

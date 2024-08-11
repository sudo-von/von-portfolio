import { IUser } from '@domain/user/user.interface';
import { AbstractUserValidation } from '@domain/user/user-validation/user-validation.abstract';

export abstract class AbstractUser {
  constructor(
    protected user: IUser,
    protected validateUser: AbstractUserValidation
  ) {}
}

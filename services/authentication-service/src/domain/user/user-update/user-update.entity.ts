import { IUserUpdate } from '@domain/user/user-update/user-update.interface';

export class UserUpdate implements IUserUpdate {
  constructor(
    public name?: string,
    public username?: string
  ) {}
}

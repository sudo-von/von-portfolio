import { IUpdateUser } from '@domain/user/interfaces/update-user.interface';

export class UpdateUser implements IUpdateUser {
  constructor(
    public name?: string,
    public username?: string
  ) {}
}

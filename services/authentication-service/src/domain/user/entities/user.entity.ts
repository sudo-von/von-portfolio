import { IUser } from '@domain/user/interfaces/user.interface';

export class User implements IUser {
  constructor(
    public id: string,
    public name: string,
    public password: string,
    public username: string
  ) {}
}

import { ICreateUser } from '@domain/user/interfaces/create-user.interface';

export class CreateUser implements ICreateUser {
  constructor(
    public name: string,
    public password: string,
    public username: string
  ) {}
}

import { IUserCreation } from '@domain/user/user-creation/user-creation.interface';

export class UserCreation implements IUserCreation {
  constructor(
    public name: string,
    public password: string,
    public username: string
  ) {}
}

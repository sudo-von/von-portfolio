import { IUserCredentialds } from '@domain/user-credentials/interfaces/user-credentials.interface';

export class UserCredentials implements IUserCredentialds {
  constructor(
    public password: string,
    public username: string
  ) {}
}

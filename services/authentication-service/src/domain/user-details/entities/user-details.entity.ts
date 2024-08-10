import { IUserDetails } from '@domain/user-details/interfaces/user-details.interface';

export class UserDetails implements IUserDetails {
  constructor(
    public hobby: string,
    public occupation: string
  ) {}
}

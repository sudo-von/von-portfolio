import { IDetailedUser } from '@domain/detailed-user/interfaces/detailed-user.interface';
import { IUserDetails } from '@domain/user-details/interfaces/user-details.interface';

export class DetailedUser implements IDetailedUser {
  constructor(
    public id: string,
    public name: string,
    public password: string,
    public username: string,
    public details?: IUserDetails
  ) {}
}

import { ICreateDetailedUser } from '@domain/detailed-user/interfaces/create-detailed-user.interface';
import { IUserDetails } from '@domain/user-details/interfaces/user-details.interface';

export class CreateDetailedUser implements ICreateDetailedUser {
  constructor(
    public name: string,
    public password: string,
    public username: string,
    public details?: IUserDetails
  ) {}
}

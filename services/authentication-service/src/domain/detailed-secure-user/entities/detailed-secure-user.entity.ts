import { IDetailedSecureUser } from '@domain/detailed-secure-user/interfaces/detailed-secure-user.interface';
import { IUserDetails } from '@domain/user-details/interfaces/user-details.interface';

export class DetailedSecureUser implements IDetailedSecureUser {
  constructor(
    public id: string,
    public name: string,
    public username: string,
    public details?: IUserDetails
  ) {}
}

import { IUser } from '@domain/user/interfaces/user.interface';
import { IUserDetails } from '@domain/user-details/interfaces/user-details.interface';

export interface IDetailedUser extends IUser {
  details?: IUserDetails;
}

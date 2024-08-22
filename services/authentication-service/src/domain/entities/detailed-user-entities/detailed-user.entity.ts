import { IUser } from '@domain/entities/user-entities/user.entity';
import { IUserDetails } from '@domain/entities/user-details-entities/user-details.entity';

export interface IDetailedUser extends IUser {
  avatar?: string;
  details?: IUserDetails;
}

import { IDetailedSecureUser } from '@domain/entities/detailed-secure-user-entities/detailed-secure-user.entity';
import { IDetailedUser } from '@domain/entities/detailed-user-entities/detailed-user.entity';

export const detailedUserToDetailedSecureUser = (detailedUser: IDetailedUser): IDetailedSecureUser => ({
  avatar: detailedUser.avatar,
  details: detailedUser.details,
  id: detailedUser.id,
  name: detailedUser.name,
  username: detailedUser.username
});

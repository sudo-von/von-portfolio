import { IDetailedUser } from '@domain/entities/detailed-user-entities/detailed-user.entity';

export interface IDetailedSecureUser extends Omit<IDetailedUser, 'password'> {}

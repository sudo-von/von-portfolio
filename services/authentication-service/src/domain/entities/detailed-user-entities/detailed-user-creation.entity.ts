import { IDetailedUser } from '@domain/entities/detailed-user-entities/detailed-user.entity';

export interface IDetailedUserCreation extends Omit<IDetailedUser, 'id'> {}

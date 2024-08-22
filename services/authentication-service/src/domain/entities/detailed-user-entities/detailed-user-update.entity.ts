import { IDetailedUser } from '@domain/entities/detailed-user-entities/detailed-user.entity';

export interface IDetailedUserUpdate extends Partial<Omit<IDetailedUser, 'id'>> {}

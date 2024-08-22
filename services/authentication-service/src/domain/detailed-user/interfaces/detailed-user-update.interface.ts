import { IDetailedUser } from '@domain/detailed-user/interfaces/detailed-user.interface';

export interface IDetailedUserUpdate extends Partial<Omit<IDetailedUser, 'id'>> {}

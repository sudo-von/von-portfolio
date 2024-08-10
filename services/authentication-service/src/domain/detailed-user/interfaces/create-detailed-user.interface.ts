import { IDetailedUser } from '@domain/detailed-user/interfaces/detailed-user.interface';

export interface ICreateDetailedUser extends Omit<IDetailedUser, 'id'> {}

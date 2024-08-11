import { IUser } from '@domain/user/user.interface';

export interface IUserCreation extends Omit<IUser, 'id'> {}

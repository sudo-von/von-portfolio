import { IUser } from '@domain/user/interfaces/user.interface';

export interface IUserCreation extends Omit<IUser, 'id'> {}

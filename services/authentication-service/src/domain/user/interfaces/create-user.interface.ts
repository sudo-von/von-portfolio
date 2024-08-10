import { IUser } from '@domain/user/interfaces/user.interface';

export interface ICreateUser extends Omit<IUser, 'id'> {}

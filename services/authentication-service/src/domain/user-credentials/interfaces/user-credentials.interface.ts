import { IUser } from '@domain/user/interfaces/user.interface';

export interface IUserCredentials extends Pick<IUser, 'username' | 'password'> {}

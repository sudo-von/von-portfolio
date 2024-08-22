import { IUser } from '@domain/entities/user-entities/user.entity';

export interface IUserCredentials extends Pick<IUser, 'password' | 'username'> {}

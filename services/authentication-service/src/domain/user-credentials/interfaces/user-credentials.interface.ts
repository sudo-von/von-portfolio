import { IUser } from '@domain/user/interfaces/user.interface';

export interface IUserCredentialds extends Pick<IUser, 'password' | 'username'> {}

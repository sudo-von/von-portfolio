import { IUser } from '@domain/user/user.interface';

export interface IUserUpdate extends Partial<Omit<IUser, 'id' | 'password'>> {}

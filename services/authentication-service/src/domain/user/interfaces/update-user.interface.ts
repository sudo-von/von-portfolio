import { IUser } from '@domain/user/interfaces/user.interface';

export interface IUpdateUser extends Partial<Pick<IUser, 'name' | 'username'>> {}

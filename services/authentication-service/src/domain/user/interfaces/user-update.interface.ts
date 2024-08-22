import { IUser } from '@domain/user/interfaces/user.interface';

export interface IUserUpdate extends Partial<Omit<IUser, 'id'>> {}

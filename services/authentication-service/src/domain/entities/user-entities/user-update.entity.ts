import { IUser } from '@domain/entities/user-entities/user.entity';

export interface IUserUpdate extends Partial<Omit<IUser, 'id'>> {}

import { IUser } from '@domain/entities/user-entities/user.entity';

export interface IUserCreation extends Omit<IUser, 'id'> {}

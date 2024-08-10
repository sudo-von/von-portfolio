import { IDetailedUser } from '@domain/detailed-user/interfaces/detailed-user.interface';

export interface IDetailedSecureUser extends Omit<IDetailedUser, 'password'> {}

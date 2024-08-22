import { IUserDetails } from '@domain/user-details/interfaces/user-details.interface';

export interface IUserDetailsUpdate extends Partial<Omit<IUserDetails, 'id'>> {}

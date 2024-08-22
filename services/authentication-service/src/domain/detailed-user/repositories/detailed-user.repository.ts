import { IDetailedUser } from '@domain/detailed-user/interfaces/detailed-user.interface';
import { IDetailedUserCreation } from '@domain/detailed-user/interfaces/detailed-user-creation.interface';
import { IDetailedUserUpdate } from '@domain/detailed-user/interfaces/detailed-user-update.interface';

export interface IDetailedUserRepositoryReader {
  getDetailedUser: (username: string) => Promise<IDetailedUser | null>;
}

export interface IDetailedUserRepositoryWriter {
  createDetailedUser: (payload: IDetailedUserCreation) => Promise<IDetailedUser>;
  updateDetailedUser: (username: string, payload: IDetailedUserUpdate) => Promise<IDetailedUser | null>;
}

export interface IDetailedUserRepository
  extends IDetailedUserRepositoryReader,
    IDetailedUserRepositoryWriter {}

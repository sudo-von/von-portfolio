import { IDetailedUser } from '@domain/entities/detailed-user-entities/detailed-user.entity';
import { IDetailedUserCreation } from '@domain/entities/detailed-user-entities/detailed-user-creation.entity';
import { IDetailedUserUpdate } from '@domain/entities/detailed-user-entities/detailed-user-update.entity';

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

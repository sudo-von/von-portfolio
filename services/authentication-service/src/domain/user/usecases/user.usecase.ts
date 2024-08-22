import { IDetailedUser } from '@domain/detailed-user/interfaces/detailed-user.interface';
import { IDetailedUserRepository } from '@domain/detailed-user/repositories/detailed-user.repository';
import { IPasswordService } from '@domain/detailed-user/services/password.service';
import { IUserCreation } from '@domain/user/interfaces/user-creation.interface';
import { IUserUpdate } from '@domain/user/interfaces/user-update.interface';

export abstract class AbstractUserUsecase {
  constructor(
    protected readonly detailedUserRepository: IDetailedUserRepository,
    protected readonly passwordService: IPasswordService
  ) {}

  abstract updateUser: (username: string, payload: IUserUpdate) => Promise<IDetailedUser>;
}

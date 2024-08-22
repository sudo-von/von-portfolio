import { IDetailedSecureUser } from '@domain/entities/detailed-secure-user-entities/detailed-secure-user.entity';
import { IDetailedUserRepository } from '@domain/repositories/detailed-user-repositories/detailed-user.repository';
import { IPasswordService } from '@domain/services/password-services/password.service';
import { IUserUpdate } from '@domain/entities/user-entities/user-update.entity';

export abstract class AbstractUserUsecase {
  constructor(
    protected readonly detailedUserRepository: IDetailedUserRepository,
    protected readonly passwordService: IPasswordService
  ) {}

  abstract updateUser: (username: string, payload: IUserUpdate) => Promise<IDetailedSecureUser>;
}

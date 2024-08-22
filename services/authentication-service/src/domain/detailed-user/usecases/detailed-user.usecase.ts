import { IDetailedUser } from '@domain/detailed-user/interfaces/detailed-user.interface';
import { IDetailedUserRepository } from '@domain/detailed-user/repositories/detailed-user.repository';
import { IPasswordService } from '@domain/detailed-user/services/password.service';

export abstract class AbstractDetailedUserUsecase {
  constructor(
    protected readonly detailedUserRepository: IDetailedUserRepository,
    protected readonly passwordService: IPasswordService
  ) {}

  abstract getDetailedUser: (username: string) => Promise<IDetailedUser>;
}

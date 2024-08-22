import { IDetailedSecureUser } from '@domain/entities/detailed-secure-user-entities/detailed-secure-user.entity';
import { IDetailedUserRepository } from '@domain/repositories/detailed-user-repositories/detailed-user.repository';

export abstract class AbstractDetailedSecureUserUsecase {
  constructor(protected readonly detailedUserRepository: IDetailedUserRepository) {}

  abstract getDetailedSecureUser: (username: string) => Promise<IDetailedSecureUser>;
}

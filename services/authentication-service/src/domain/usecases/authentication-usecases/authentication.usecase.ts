import { IDetailedSecureUser } from '@domain/entities/detailed-secure-user-entities/detailed-secure-user.entity';
import { IDetailedUserRepository } from '@domain/repositories/detailed-user-repositories/detailed-user.repository';
import { IPasswordService } from '@domain/services/password-services/password.service';
import { IUserCreation } from '@domain/entities/user-entities/user-creation.entity';
import { IUserCredentials } from '@domain/entities/user-credentials-entities/user-credentials.entity';

export abstract class AbstractAuthenticationUsecase {
  constructor(
    protected readonly detailedUserRepository: IDetailedUserRepository,
    protected readonly passwordService: IPasswordService
  ) {}

  abstract signup: (payload: IUserCreation) => Promise<IDetailedSecureUser>;

  abstract signin: (credentials: IUserCredentials) => Promise<IDetailedSecureUser>;
}

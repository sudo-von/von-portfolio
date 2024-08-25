import { AbstractAuthenticationUsecase } from '@domain/usecases/authentication-usecases/authentication.usecase';
import { detailedUserToDetailedSecureUser } from '@domain/mappers/detailed-user-mappers/detailed-user-to-detailed-secure-user.mapper';
import { DetailedUserUsernameAlreadyInUseError } from '@domain/errors/detailed-user/detailed-user-username-already-in-use.error';
import { IDetailedSecureUser } from '@domain/entities/detailed-secure-user-entities/detailed-secure-user.entity';
import { IDetailedUserRepository } from '@domain/repositories/detailed-user-repositories/detailed-user.repository';
import { IPasswordService } from '@domain/services/password-services/password.service';
import { IUserCreation } from '@domain/entities/user-entities/user-creation.entity';
import { IUserCredentials } from '@domain/entities/user-credentials-entities/user-credentials.entity';
import { IUserValidationService } from '@domain/services/user-validation-services/user-validation.service';
import { UserCredentialsInvalidCredentialsError } from '@domain/errors/user-credentials/user-credentials-invalid-credentials.error';

class AuthenticationUsecase extends AbstractAuthenticationUsecase {
  constructor(
    protected readonly detailedUserRepository: IDetailedUserRepository,
    protected readonly passwordService: IPasswordService,
    protected readonly userValidationService: IUserValidationService
  ) {
    super(detailedUserRepository, passwordService, userValidationService);
  }

  signup = async (userCreation: IUserCreation): Promise<IDetailedSecureUser> => {
    this.userValidationService.validateName(userCreation.name);
    this.userValidationService.validatePassword(userCreation.password);
    this.userValidationService.validateUsername(userCreation.username);

    const existingDetailedUser = await this.detailedUserRepository.getDetailedUser(userCreation.username);
    if (existingDetailedUser) throw new DetailedUserUsernameAlreadyInUseError();

    const hashedPassword = await this.passwordService.hashPassword(userCreation.password);

    const createdDetailedUser = await this.detailedUserRepository.createDetailedUser({
      name: userCreation.name,
      username: userCreation.username,
      password: hashedPassword
    });

    const detailedSecureUser = detailedUserToDetailedSecureUser(createdDetailedUser);
    return detailedSecureUser;
  };

  signin = async (userCredentials: IUserCredentials): Promise<IDetailedSecureUser> => {
    this.userValidationService.validateUsername(userCredentials.username);
    this.userValidationService.validatePassword(userCredentials.password);

    const detailedUser = await this.detailedUserRepository.getDetailedUser(userCredentials.username);
    if (!detailedUser) throw new UserCredentialsInvalidCredentialsError();

    const areCredentialsValid = await this.passwordService.comparePasswords(
      userCredentials.password,
      detailedUser.password
    );
    if (!areCredentialsValid) throw new UserCredentialsInvalidCredentialsError();

    const detailedSecureUser = detailedUserToDetailedSecureUser(detailedUser);
    return detailedSecureUser;
  };
}

export default AuthenticationUsecase;

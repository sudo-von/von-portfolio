import { AbstractAuthenticationUsecase } from '@domain/usecases/authentication-usecases/authentication.usecase';
import { IDetailedSecureUser } from '@domain/entities/detailed-secure-user-entities/detailed-secure-user.entity';
import { IDetailedUserRepository } from '@domain/repositories/detailed-user-repositories/detailed-user.repository';
import { IPasswordService } from '@domain/services/password-services/password.service';
import { IUserCreation } from '@domain/entities/user-entities/user-creation.entity';
import { IUserCredentials } from '@domain/entities/user-credentials-entities/user-credentials.entity';

class AuthenticationUsecaseApplication extends AbstractAuthenticationUsecase {
  constructor(
    protected readonly detailedUserRepository: IDetailedUserRepository,
    protected readonly passwordService: IPasswordService
  ) {
    super(detailedUserRepository, passwordService);
  }

  signup = async (userCreation: IUserCreation): Promise<IDetailedSecureUser> => {
    validateUserCreation(userCreation);

    const user = await this.userRepository.getUser();
    if (user) throw SingleUserOnlyError;

    const hashedPassword = await this.passwordService.hashPassword(userCreation.password);

    const createdUser = await this.userRepository.createUser({
      name: userCreation.name,
      email: userCreation.email,
      username: userCreation.username,
      password: hashedPassword,
      socialNetworks: []
    });

    const secureUser = detailedToSecureUser(createdUser);
    return secureUser;
  };

  signin = async (userCredentials: IUserCredentials): Promise<DetailedSecureUser> => {
    const user = await this.userRepository.getUser();
    if (!user) throw InvalidCredentialsError;

    const areCredentialsValid = await this.passwordService.comparePasswords(
      userCredentials.password,
      user.password
    );
    if (!areCredentialsValid || userCredentials.email !== user.email) throw InvalidCredentialsError;

    const secureUser = detailedToSecureUser(user);
    return secureUser;
  };
}

export default AuthenticationUsecaseApplication;

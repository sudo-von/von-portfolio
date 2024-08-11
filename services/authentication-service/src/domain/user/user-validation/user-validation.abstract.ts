import { IUserValidationRules } from '@domain/user/user-validation/user-validation.interface';
import { InvalidUserMethodNotImplementedYetError } from '@domain/user/user-error/user-error.entity';

export abstract class AbstractUserValidation {
  constructor(protected userValidationRules: IUserValidationRules) {}

  public validateName(name: string): void {
    throw new InvalidUserMethodNotImplementedYetError();
  }
}

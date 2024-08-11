import { AbstractUserValidation } from '@domain/user/user-validation/user-validation.abstract';
import { IUserValidationRules } from '@domain/user/user-validation/user-validation.interface';
import { InvalidUserNameLengthError, InvalidUserNameError } from '@domain/user/user-error/user-error.entity';

export class UserValidation extends AbstractUserValidation {
  constructor(protected userValidationRules: IUserValidationRules) {
    super(userValidationRules);
  }

  validateName(name: string) {
    const { MAX_LENGTH, MIN_LENGTH, REG_EXP } = this.userValidationRules.name;

    const formattedName = name.trim();
    if (!REG_EXP.test(formattedName)) {
      throw new InvalidUserNameError();
    }

    const formattedNameLength = formattedName.length;
    if (formattedNameLength > MAX_LENGTH || formattedNameLength < MIN_LENGTH) {
      throw new InvalidUserNameLengthError(MAX_LENGTH, MIN_LENGTH);
    }
  }
}

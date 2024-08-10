import { IUpdateUserDetails } from '@domain/user-details/interfaces/update-user-details.interface';

export class UpdateUserDetails implements IUpdateUserDetails {
  constructor(
    public hobby?: string,
    public occupation?: string
  ) {}
}

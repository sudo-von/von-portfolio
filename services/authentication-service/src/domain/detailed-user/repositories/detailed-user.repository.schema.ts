import { IUserDetailsRepositorySchema } from '@domain/user-details/repositories/user-details.repository.schema';

export type IDetailedUserRepositorySchema = {
  avatar?: string;
  id: string;
  name: string;
  password: string;
  username: string;
  details?: IUserDetailsRepositorySchema;
};

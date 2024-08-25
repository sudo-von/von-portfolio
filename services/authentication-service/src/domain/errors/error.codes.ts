import { DetailedUserErrorCodes } from '@domain/errors/detailed-user/detailed-user.error.codes';
import { UserCredentialsErrorCodes } from '@domain/errors/user-credentials/user-credentials.error.codes';
import { UserDetailsErrorCodes } from '@domain/errors/user-details-errors/user-details.error.codes';
import { UserErrorCodes } from '@domain/errors/user-errors/user.error.codes';

export type ErrorCodes =
  | DetailedUserErrorCodes
  | UserCredentialsErrorCodes
  | UserDetailsErrorCodes
  | UserErrorCodes;

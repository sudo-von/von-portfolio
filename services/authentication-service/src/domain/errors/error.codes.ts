import { UserErrorCodes } from '@domain/errors/user-errors/user.error.codes';
import { UserDetailsErrorCodes } from '@domain/errors/user-details-errors/user-details.error.codes';

export type ErrorCodes = UserErrorCodes | UserDetailsErrorCodes;

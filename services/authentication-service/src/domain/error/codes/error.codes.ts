import { UserErrorCodes } from '@domain/error/codes/user.error.codes';
import { UserDetailsErrorCodes } from '@domain/error/codes/user-details.error.codes';

export type ErrorCodes = UserErrorCodes | UserDetailsErrorCodes;

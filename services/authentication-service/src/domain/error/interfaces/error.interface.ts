import { ErrorCodes } from '@domain/error/codes/error.codes';

export interface IError {
  code: ErrorCodes;
  message: string;
}

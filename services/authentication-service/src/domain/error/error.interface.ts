import { ErrorCode } from '@domain/error/error.code';

export interface IError {
  code: ErrorCode;
  message: string;
}

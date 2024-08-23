import { ErrorCodes } from '@domain/errors/error.codes';

export interface IError {
  code: ErrorCodes;
  message: string;
}

export class DomainError extends Error {
  constructor(public error: IError) {
    const { message } = error;
    super(message);
  }
}

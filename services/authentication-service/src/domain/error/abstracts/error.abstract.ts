import { IError } from '@domain/error/interfaces/error.interface';

export abstract class AbstractError extends Error {
  constructor(public error: IError) {
    const { message } = error;
    super(message);
  }
}

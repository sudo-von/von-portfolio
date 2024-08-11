import { IError } from '@domain/error/error.interface';

export abstract class AbstractError extends Error {
  constructor(protected error: IError) {
    const { message } = error;
    super(message);
  }
}

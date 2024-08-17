import { IError } from '@domain/error/interfaces/error.interface';
import { AbstractError } from '@domain/error/abstracts/error.abstract';

export class Error extends AbstractError {
  constructor(public error: IError) {
    super(error);
  }
}

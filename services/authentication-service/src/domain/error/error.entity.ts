import { IError } from '@domain/error/error.interface';
import { AbstractError } from '@domain/error/error.abstract';

export class Error extends AbstractError {
  constructor(protected error: IError) {
    super(error);
  }
}

export interface IPasswordServiceReader {
  comparePasswords: (plainPassword: string, hashedPassword: string) => Promise<boolean>;
}

export interface IPasswordServiceWriter {
  hashPassword: (password: string) => Promise<string>;
}

export interface IPasswordService extends IPasswordServiceReader, IPasswordServiceWriter {}

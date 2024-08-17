import { IAvatarSizeRule } from '@domain/avatar/interfaces/avatar.size.rule.interface';

export const avatarSizeRule: IAvatarSizeRule = {
  BYTES: {
    MAX: 1_000_000,
    MIN: 100
  }
};

import { IAvatarMimeTypeRule } from '@domain/avatar/interfaces/avatar.mime-type.rule.interface';

export const avatarMimeTypeRule: IAvatarMimeTypeRule = {
  ALLOWED_MIME_TYPES: ['image/gif', 'image/jpeg', 'image/jpg', 'image/png']
};

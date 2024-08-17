import { IAvatarRules } from '@domain/avatar/interfaces/avatar.rules.interface';
import { avatarMimeTypeRule } from '@domain/avatar/rules/avatar.mime-type.rule';
import { avatarSizeRule } from '@domain/avatar/rules/avatar.size.rule';

export const avatarRules: IAvatarRules = {
  mimeType: avatarMimeTypeRule,
  size: avatarSizeRule
};

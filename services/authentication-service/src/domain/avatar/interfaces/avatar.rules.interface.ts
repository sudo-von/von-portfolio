import { IAvatarMimeTypeRule } from '@domain/avatar/interfaces/avatar.mime-type.rule.interface';
import { IAvatarSizeRule } from '@domain/avatar/interfaces/avatar.size.rule.interface';

export interface IAvatarRules {
  mimeType: IAvatarMimeTypeRule;
  size: IAvatarSizeRule;
}

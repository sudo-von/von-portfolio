import { IDetailedSecureUser } from '@domain/entities/detailed-secure-user-entities/detailed-secure-user.entity';
import { IDetailedUser } from '@domain/entities/detailed-user-entities/detailed-user.entity';
import { detailedUserToDetailedSecureUser } from '@domain/mappers/detailed-user-to-detailed-secure-user.mapper';

describe('detailedUserToDetailedSecureUser', () => {
  it('Should return the expected detailed secure user', () => {
    const detailedSecureUser: IDetailedSecureUser = {
      avatar: 'fake-avatar',
      details: {
        hobby: 'fake-hobby',
        occupation: 'fake-occupation'
      },
      id: 'fake-id',
      name: 'fake-name',
      username: 'fake-username'
    };

    const detailedUser: IDetailedUser = {
      ...detailedSecureUser,
      password: 'fake-password'
    };

    const result = detailedUserToDetailedSecureUser(detailedUser);
    expect(result).toEqual(detailedSecureUser);
  });
});

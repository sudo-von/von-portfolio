import { UserValidation } from '@domain/user/user-validation/user-validation.entity';
import { User } from '@domain/user/user.entity';

const userValidation = new UserValidation({
  name: {
    MAX_LENGTH: 5,
    MIN_LENGTH: 3,
    REG_EXP: /^[a-zA-Z]+$/
  }
});

const user = new User(
  {
    id: 'id',
    name: 'name',
    password: 'password',
    username: 'username'
  },
  userValidation
);

console.log(user);

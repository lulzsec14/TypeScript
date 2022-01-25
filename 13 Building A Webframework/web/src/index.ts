// import { UserForm } from './Views/UserForm';
// import { User } from './models/User';
// import { UserEdit } from './Views/UserEdit';

// const user = User.buildUser({ name: 'NAME', age: 20 });

// const root = document.getElementById('root');

// if (root) {
//   // const userForm = new UserForm(root, user);
//   const userEdit = new UserEdit(root, user);
//   // userForm.render();

//   userEdit.render();
//   // console.log(userEdit);
// } else {
//   throw new Error('Root element not found!');
// }

// // 192

import { UserList } from './Views/UserList';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

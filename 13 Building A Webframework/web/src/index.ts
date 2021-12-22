import { User } from './models/user';

const user = new User({ name: 'Sourav', age: 0 });

// user.set({ name: 'new name', age: 999 });

user.save();

// 153
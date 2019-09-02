import { UsersStore, usersStore } from './user.store'

import { of } from 'rxjs'
import { ID } from '@datorama/akita'
import { User } from './user.model'

const count = 10;
const data = [] as User[];

for (let i = 0; i < count; i++) {
  data.push({
    id: Math.random(),
    username: 'saul',
    email: 'zhuliminl@gmail.com',
    avatar: 'http://www.'
  });
}


export class UsersService {
  constructor(private usersStore: UsersStore) { }

  get() {
    of(data).subscribe(entities => {
      this.usersStore.set(entities)
    })
  }

  setActive(id: ID) {
    this.usersStore.setActive(id)
  }

  updateActive(user: User) {
    this.usersStore.updateActive(user)
  }
}

export const usersService = new UsersService(usersStore)
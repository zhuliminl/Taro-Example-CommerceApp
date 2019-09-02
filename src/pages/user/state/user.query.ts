import { Query } from '@datorama/akita'

import { UserStore, userStore } from './user.store'

import { User } from './user.model'

export class UserQuery extends Query<User> {
  constructor(protected store: UserStore) {
    super(store)
  }
}

export const userQuery = new UserQuery(userStore)
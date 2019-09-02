import { QueryEntity } from '@datorama/akita'

import { UsersStore, UsersState, usersStore } from './user.store'

import { User } from './user.model'

export class UsersQuery extends QueryEntity<UsersState, User> {
  constructor(protected store: UsersStore) {
    super(store)
  }
}

export const userQuery = new UsersQuery(usersStore)
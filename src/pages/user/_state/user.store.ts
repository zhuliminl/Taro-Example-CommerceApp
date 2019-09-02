import { Store, StoreConfig } from '@datorama/akita'
import { User } from './user.model'

export function createInitialState(): User {
  return {
    id: '2143',
    username: '小石头',
    email: 'zhuliminl@gmail.com',
    avatar: 'https://s.gravatar.com/avatar/3b1d61ea5012bf77e59a91af3234b298?s=80'
  }
}

@StoreConfig({ name: 'user' })
export class UserStore extends Store<User> {
  constructor() {
    super(createInitialState())
  }
}

export const userStore = new UserStore()
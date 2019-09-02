import { UserStore, userStore } from './user.store'

import { of } from 'rxjs'
import { User } from './user.model'


/*
const fakeUserData = {
  id: '123456',
  username: '小石头',
  email: 'zhuliminl@gmai.com',
  avatar: 'https://s.gravatar.com/avatar/3b1d61ea5012bf77e59a91af3234b298?s=80',
} as User
*/


export class UserService {
  constructor(private userStore: UserStore) { }

  /*
  get() {
    of(fakeUserData).subscribe(entities => {
      console.log('FIN 初始话用户数据', entities)
      this.usersStore.set(entities)
    })
  }
  */

  // setActive(id: ID) {
  //   this.usersStore.setActive(id)
  // }

  // updateActive(user: User) {
  //   this.usersStore.updateActive(user)
  // }

  updateUserName(userName: string) {
    this.userStore.update(state => {
      return {
        username: userName,
      }
    })
  }

}

export const userService = new UserService(userStore)
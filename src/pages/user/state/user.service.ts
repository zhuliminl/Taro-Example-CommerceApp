import { of, from } from 'rxjs';
import { User } from './user.model';
import { UserStore, userStore } from './user.store';
import Taro from '@tarojs/taro';



const fakeUserData = {
  username: '汪慧明',
  email: 'zhuliminl@gmai.com',
  avatar: 'https://s.gravatar.com/avatar/3b1d61ea5012bf77e59a91af3234b298?s=80',
} as User

// 假的 api
const url = 'https://v2.api.haodanku.com/super_classify/apikey/saul'

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

  get() {
    /*
    of(fakeUserData).subscribe(user => {
      this.userStore.update(user)
    })
    */
    const source$ = from(Taro.request({ url }))
    source$.subscribe(data => {
      if (data && data['statusCode'] === 200) {
        // this.userStore
        this.userStore.update({ ...fakeUserData })
      }
    })

  }

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
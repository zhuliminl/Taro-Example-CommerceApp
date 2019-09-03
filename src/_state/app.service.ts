import { of, from } from 'rxjs';
import { App } from './app.model';
import { AppStore, appStore } from './app.store';
import Taro from '@tarojs/taro';
import { getHotSearch, pushHistory } from './search/searchs.service'



const fakeAppData = {
  appname: '汪慧明',
  email: 'zhuliminl@gmai.com',
  avatar: 'https://s.gravatar.com/avatar/3b1d61ea5012bf77e59a91af3234b298?s=80',
} as App

// 假的 api
const url = 'https://v2.api.haodanku.com/super_classify/apikey/saul'

export class AppService {
  constructor(private userStore: AppStore) {
  }

  public get() {
    const source$ = from(Taro.request({ url }))
    source$.subscribe(data => {
      if (data && data['statusCode'] === 200) {
        // this.userStore
        this.userStore.update({ ...fakeAppData })
      }
    })
  }

  public getHotSearch() {
    getHotSearch()
  }

  public pushHistory(data: string) {
    pushHistory(data)
  }

}

export const appService = new AppService(appStore)

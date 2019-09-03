import { Store, StoreConfig } from '@datorama/akita'
import { App } from './app.model'

export function createInitialState(): App {
  return {
    id: '2143',
    appname: '小石头',
    email: 'zhuliminl@gmail.com',
    avatar: 'https://s.gravatar.com/avatar/3b1d61ea5012bf77e59a91af3234b298?s=80'
  }
}

@StoreConfig({ name: 'app' })
export class AppStore extends Store<App> {
  constructor() {
    super(createInitialState())
  }
}

export const appStore = new AppStore()
import { Query } from '@datorama/akita'

import { AppStore, appStore } from './app.store'

import { App } from './app.model'

export class AppQuery extends Query<App> {
  constructor(protected store: AppStore) {
    super(store)
  }
}

export const appQuery = new AppQuery(appStore)
import { Query } from '@datorama/akita'

import { AppStore, appStore } from './app.store'

import { App } from './app.model'
import { searchsQuery } from './search';

export class AppQuery extends Query<App> {
  searchs: any;
  constructor(protected store: AppStore) {
    super(store)
    this.searchs = searchsQuery
  }

}

export const appQuery = new AppQuery(appStore)
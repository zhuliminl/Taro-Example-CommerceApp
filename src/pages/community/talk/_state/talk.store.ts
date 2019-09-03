import { Talk } from './talk.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TalksState extends EntityState<Talk> {
  data: any;
}

@StoreConfig({ name: 'talks', idKey: 'id' })
export class TalksStore extends EntityStore<TalksState, Talk> {
  constructor() {
    super({
      data: {}
    });
  }
}

export const talksStore = new TalksStore();

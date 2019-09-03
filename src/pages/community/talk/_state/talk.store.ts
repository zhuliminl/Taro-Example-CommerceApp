import { Talk } from './talk.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TalksState extends EntityState<Talk> {
}

@StoreConfig({ name: 'talks', idKey: 'id' })
export class TalksStore extends EntityStore<TalksState, Talk> {
  constructor() {
    super({
    });
  }
}

export const talksStore = new TalksStore();

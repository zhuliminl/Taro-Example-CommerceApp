import { TalksStore, TalksState, talksStore } from './talk.store';
import { Talk } from './talk.model';
import { QueryEntity } from '@datorama/akita';

export class TalksQuery extends QueryEntity<TalksState, Talk> {
  constructor(protected store: TalksStore) {
    super(store);
  }
}

export const talksQuery = new TalksQuery(talksStore);

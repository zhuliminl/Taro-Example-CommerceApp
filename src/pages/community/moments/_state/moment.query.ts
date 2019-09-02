import { MomentsStore, MomentsState, momentsStore } from './moment.store';
import { Moment } from './moment.model';
import { QueryEntity } from '@datorama/akita';

export class MomentsQuery extends QueryEntity<MomentsState, Moment> {
  constructor(protected store: MomentsStore) {
    super(store);
  }
}

export const momentsQuery = new MomentsQuery(momentsStore);

import { Moment } from './moment.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface MomentsState extends EntityState<Moment> {
  min_id: number;
}

@StoreConfig({ name: 'moments', idKey: 'edit_id' })
export class MomentsStore extends EntityStore<MomentsState, Moment> {
  constructor() {
    super({min_id: 1,});
  }
}

export const momentsStore = new MomentsStore();

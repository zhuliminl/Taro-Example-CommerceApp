import { Topic } from './topic.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface TopicsState extends EntityState<Topic> {
  // min_id: number;
  // firstLoading: boolean;
}

@StoreConfig({ name: 'topics', idKey: 'edit_id' })
export class TopicsStore extends EntityStore<TopicsState, Topic> {
  constructor() {
    super({
      // min_id: 1,
      // firstLoading: true,
    });
  }
}

export const topicsStore = new TopicsStore();

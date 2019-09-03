import { TopicsStore, TopicsState, topicsStore } from './topic.store';
import { Topic } from './topic.model';
import { QueryEntity } from '@datorama/akita';

export class TopicsQuery extends QueryEntity<TopicsState, Topic> {
  constructor(protected store: TopicsStore) {
    super(store);
  }
}

export const topicsQuery = new TopicsQuery(topicsStore);

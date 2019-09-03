import { createEntityQuery } from '@datorama/akita';
import { searchsStore } from './searchs.store';

export const searchsQuery = createEntityQuery(searchsStore);

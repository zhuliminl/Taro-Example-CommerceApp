import { createEntityQuery } from '@datorama/akita';
import { momentsStore } from './moments.store';

export const momentsQuery = createEntityQuery(momentsStore);

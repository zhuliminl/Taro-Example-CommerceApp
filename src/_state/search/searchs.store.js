import { createEntityStore } from '@datorama/akita';

const initialState = {
  list: [
    'xxxx',
    'jjjj'
  ]
};

export const searchsStore = createEntityStore(initialState, { name: 'searchs' });


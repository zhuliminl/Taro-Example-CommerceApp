import { createEntityStore } from '@datorama/akita';

const initialState = {
  hotList: [],
  historys: [],
};

export const searchsStore = createEntityStore(initialState, { name: 'searchs' });


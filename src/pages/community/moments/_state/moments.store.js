import { createEntityStore } from '@datorama/akita';

const initialState = {
  title: 'saul',

};

export const momentsStore = createEntityStore(initialState, { name: 'moments' });


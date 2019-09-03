import { searchsStore } from './searchs.store';

export async function update(id, data) {
  await Promise.resolve();
  searchsStore.update(id, data);
}

export async function remove(id) {
  await Promise.resolve();
  searchsStore.remove(id);
}

import { momentsStore } from './moments.store';

export async function update(id, data) {
  await Promise.resolve();
  momentsStore.update(id, data);
}

export async function remove(id) {
  await Promise.resolve();
  momentsStore.remove(id);
}

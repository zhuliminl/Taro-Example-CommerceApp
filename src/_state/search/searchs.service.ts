import { searchsStore } from './searchs.store';
import Taro from '@tarojs/taro'
import { from } from 'rxjs'
import { searchsQuery } from '../../../rn_temp/_state/state';

export function getHotSearch() {
  const url = 'https://v2.api.haodanku.com/hot_key/apikey/saul/back/15'
  try {
    const source$ = from(Taro.request({ url }))
    source$.subscribe(data => {
      if (data && data['statusCode'] === 200) {
        const hotListData = data['data'] && data['data']['data'] || []
        let hotList = hotListData.map((item, i) => ({
          key: i,
          title: item.keyword
        }))
        searchsStore.update({
          hotList,
        })
      }
    })

  } catch (err) {
    console.log('FIN get hot history err', err)
  }
}

export function pushHistory(title: string) {
  // ===================== 常规的更新 state 的方法 ===============
  searchsStore.update((state) => {
    const { historys = [] } = state
    if (historys.includes(title as never)) {
      return { historys }
    }
    return {
      historys: [...historys, title] as never
    }
  })
  // ===================== 常规的更新 state 的方法 ===============
}

export function clearHistory() {
  searchsStore.update({
    historys: []
  })
}

export async function update(id, data) {
  await Promise.resolve();
  searchsStore.update(id, data);
}

export async function remove(id) {
  await Promise.resolve();
  searchsStore.remove(id);
}

import { TopicsStore, topicsStore } from './topic.store';
import { from } from 'rxjs';
import Taro from '@tarojs/taro';


export class TopicsService {
  constructor(private topicsStore: TopicsStore) { }

  get() {
    this.topicsStore.setLoading(true)

    const url = `https://v2.api.haodanku.com/get_subject/apikey/saul`

    const source$ = from(Taro.request({ url }))
    source$.subscribe(data => {
      if (data && data['statusCode'] === 200) {
        const entities = data['data'] && data['data']['data'] || []
        // console.log('FIn entities', entities)

        this.topicsStore.add(entities)
        this.topicsStore.setLoading(false)
      }
    })

  }
}

export const topicsService = new TopicsService(topicsStore)
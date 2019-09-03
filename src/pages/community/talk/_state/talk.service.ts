import { TalksStore, talksStore } from './talk.store';
import { from } from 'rxjs';
import Taro from '@tarojs/taro';


export class TalksService {
  constructor(private talksStore: TalksStore) { }

  get() {
    this.talksStore.setLoading(true)

    const url = `https://v2.api.haodanku.com/get_subject/apikey/saul`

    const source$ = from(Taro.request({ url }))
    source$.subscribe(data => {
      if (data && data['statusCode'] === 200) {
        const entities = data['data'] && data['data']['data'] || []
        // console.log('FIn entities', entities)

        this.talksStore.add(entities)
        this.talksStore.setLoading(false)
      }
    })

  }
}

export const talksService = new TalksService(talksStore)
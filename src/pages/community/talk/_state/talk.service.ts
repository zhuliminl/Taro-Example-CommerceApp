import { TalksStore, talksStore } from './talk.store';
import { from } from 'rxjs';
import Taro from '@tarojs/taro';

/* eslint:disable */
const host = HOST
/* eslint:enable */

export class TalksService {
  constructor(private talksStore: TalksStore) { }

  get() {
    this.talksStore.setLoading(true)

    // const url = `https://v2.api.haodanku.com/talent_info/apikey/saul/talentcat/1`
    const url = `${host}/talent_info/apikey/saul/talentcat/0`

    const source$ = from(Taro.request({ url }))
    source$.subscribe(data => {
      if (data && data['statusCode'] === 200) {
        const talkData = data['data'] && data['data']['data'] || []

        this.talksStore.update({
          data: talkData,
        })
        this.talksStore.setLoading(false)
      }
    })

  }
}

export const talksService = new TalksService(talksStore)
import { MomentsStore, momentsStore } from './moment.store';
import { from } from 'rxjs';
import Taro from '@tarojs/taro';
// import { Moment } from './moment.model';
// import { ID } from '@datorama/akita';
import { momentsQuery } from './moment.query'


export class MomentsService {
  constructor(private momentsStore: MomentsStore) { }

  get() {
    this.momentsStore.setLoading(true)
    const min_id = momentsQuery.getValue().min_id || 1
    const url = `https://v2.api.haodanku.com/selected_item/apikey/saul/min_id/${min_id}`  

    const source$ = from(Taro.request({ url }))
    source$.subscribe(data => {
      console.log('FIN row data', data)
      if (data && data['statusCode'] === 200) {
        const entities = data['data'] && data['data']['data'] || []
        // console.log('FIn entities', entities)
        const min_id = data['data'] && data['data']['min_id'] || 1
        this.momentsStore.update({
          min_id,
        })

        this.momentsStore.add(entities)
        this.momentsStore.setLoading(false)
      }
    })
  }
}

export const momentsService = new MomentsService(momentsStore);
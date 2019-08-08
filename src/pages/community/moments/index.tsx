import Taro, { FunctionComponent } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import React from 'react'
import MomentImgGallery from './moment-img-gallery'
import './index.scss'
import arrow_share from '@/assets/image/arrow_share.png'
import arrow_download from '@/assets/image/arrow_download.png'

import { parseToMinuteago } from '@/utils/date'

interface MomentsInterface {
  moments: any[];
}

const Moments: FunctionComponent<MomentsInterface> = (props) => {
  const { moments = [] } = props

  return (
    <View className="moments-comp">
      {
        moments.map((moment, i) => {
          let itemtitle = moment['itemtitle'] || ''
          if (itemtitle.length >= 6) {
            itemtitle = itemtitle.substr(0, 6) + '...'
          }
          const imgList = moment['itempic'] || []

          const dateStr = moment['show_time'] || 0

          return (
            <View className='moment-wrap' key={i}>
              {/* 头像  */}
              <View className='moment-avatar-wrap'>
                <Image className='moment-avatar-img' src={moment['sola_image']} />
              </View>

              {/* 头像右边的内容 */}
              <View className='moment-right-wrap'>

                <View className='moment-right-top-wrap'>
                  {/* 标题和描述 */}
                  <View className='moment-title-wrap'>
                    <Text className='moment-title-txt'>{itemtitle}</Text>
                    <View className='moment-title-desc-wrap'>
                      <View className='moment-title-tag-wrap'>
                        <Text className='moment-title-tag-txt'>精选</Text>
                      </View>
                      <Text className='moment-title-date-txt'>{parseToMinuteago(dateStr)}分钟之前发布</Text>
                    </View>
                  </View>

                  {/* 分享和下载 */}
                  <View className='moment-share-wrap'>
                    <View className='moment-share-number-wrap'>
                      <Image className='moment-share-number-img' src={arrow_share} />
                      <Text className='moment-share-number-txt'>{moment['dummy_click_statistics']}</Text>
                    </View>
                    <View className='moment-share-download-wrap'>
                      <Image className='moment-share-download-img' src={arrow_download} />
                      <Text className='moment-share-download-txt'>下载发图</Text>
                    </View>
                  </View>

                </View>

                {/* 中间实体内容文字和图片、视频 */}
                <View className='moment-right-middle-wrap'>
                  <Text className='moment-content-txt'>{moment['content']}</Text>
                  <MomentImgGallery imgList={imgList} />

                </View>

              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default Moments

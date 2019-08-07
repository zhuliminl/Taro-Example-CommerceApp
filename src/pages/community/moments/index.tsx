import Taro, { FunctionComponent } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import React from 'react'
import './index.scss'
import arrow_share from '@/assets/image/arrow_share.png'
import arrow_download from '@/assets/image/arrow_download.png'

interface MomentsInterface {
  moments: any[];
}

const Moments : FunctionComponent<MomentsInterface> = (props) => {
  const {moments} = props

  return (
    <View className="moments-comp">
      {
        moments.map((moment, i) => {
          let itemtitle = moment['itemtitle'] || ''
          if(itemtitle.length >= 6) {
            itemtitle = itemtitle.substr(0,6) + '...'
          }
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
                      <Text className='moment-title-date-txt'>33分钟之前发布</Text>
                    </View>
                  </View>

                  {/* 分享和下载 */}
                  <View className='moment-share-wrap'>
                    <View className='moment-share-number-wrap'>
                      <Image className='moment-share-number-img' src={arrow_share}/>
                      <Text className='moment-share-number-txt'>2342</Text>
                    </View>
                    <View className='moment-share-download-wrap'>
                      <Image className='moment-share-download-img' src={arrow_download}/>
                      <Text className='moment-share-download-txt'>下载发图</Text>
                    </View>
                  </View>

                </View>

                {/* 中间实体内容文字和图片、视频 */}
                <View className='moment-right-middle-wrap'>
                  <Text className='moment-content-txt'>{moment['content']}</Text>
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

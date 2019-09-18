import Taro, { FunctionComponent } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import React from 'react'
import './index.scss'
import { navigateTo } from '@/utils/navigation'

interface ImgNavInterface {
  imgNavData: any;
}

const ImgNav: FunctionComponent<ImgNavInterface> = (props) => {
  const { imgNavData = {} } = props

  return (
    <View className="img-nav-comp">
      {
        imgNavData && imgNavData.data && imgNavData.data.map((mainItem, i) => {
          return (
            <View className='img-nav-main-item-wrap' key={i}>
              <Text className='img-nav-main-item-title-txt'>{mainItem.next_name}</Text>
              <View className='img-nav-sub-wrap'>
                {
                  mainItem && mainItem.info && mainItem.info.map((item, j) => {
                    return (
                      <View className='img-nav-sub-item-wrap' key={j} onClick={() => {
                        const { son_name = "" } = item
                        navigateTo('search', { keyword: son_name })
                      }}>
                        <Image className='img-nav-img' src={item.imgurl} />
                        <Text className='img-nav-sub-item-txt'>{item.son_name}</Text>
                      </View>
                    )
                  })
                }
              </View>
            </View>
          )
        })
      }
    </View>
  )
}


export default ImgNav
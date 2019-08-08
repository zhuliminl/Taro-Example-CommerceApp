import './index.scss'

import { Image, Text, View } from '@tarojs/components'
import Taro, { FunctionComponent } from '@tarojs/taro'

import React from 'react'
import { navigateTo } from '@/utils/navigation'

interface MomentImgGalleryInterface {
  imgList: any[];
}

const MomentImgGallery: FunctionComponent<MomentImgGalleryInterface> = (props) => {
  const { imgList = [] } = props
  // console.log('FIN imglist', imgList)

  return (
    <View className="moment-img-gallery-comp">
      {
        imgList.map((item, i) => {
          return (
            <View key={i} onClick={() => {
              // RN 端不能响应图片点击事件，必须要用 View 来包裹
              navigateTo('img_gallery', {
                current: i,
                imgList,
              })
            }}>
              <Image className='moment-img' src={item || ''} style={{}} />
            </View>
          )
        })
      }
    </View>
  )
}

export default MomentImgGallery

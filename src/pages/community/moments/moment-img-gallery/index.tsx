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
  console.log('FIN imglist', imgList)

  return (
    <View className="moment-img-gallery-comp">
      {
        imgList.map((item, i) => {
          return (
            <Image className='moment-img' src={item || ''} key={i} style={{}} onClick={() => {
              navigateTo('img_gallery', {
                current: i,
                imgList,
              })
            }} />
          )
        })
      }
    </View>
  )
}

export default MomentImgGallery

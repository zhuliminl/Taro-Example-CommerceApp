import Taro, { FunctionComponent } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import React from 'react'
import './index.scss'

interface MomentCommentInterface {
  comment: string;
}

const MomentComment: FunctionComponent<MomentCommentInterface> = (props) => {
  const { comment: commentStr = '' } = props
  const comments = commentStr.split('|') || []
  console.log('FIN comments', comments)

  return (
    <View className="moment-comment-comp">
      {
        comments && comments.map((item, i) => {
          return (
            <View className='moment-comment-item-wrap' key={i}>
              <Text className='moment-comment-txt'>{item}</Text>
            </View>
          )
        })
      }

      <View className='moment-comment-copy-wrap'>
        <Text className='moment-comment-copy-txt'>复制评论</Text>
      </View>
    </View>
  )
}

export default MomentComment

import Taro, { FunctionComponent, useCallback, useEffect } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

// interface MomentCommentInterface {
//   comment: string;
// }

// const MomentCommentBar: FunctionComponent<MomentCommentInterface> = (props) => {
//   const { comment: commentStr = '' } = props
//   const comments = commentStr.split('|') || []

//   const hanldeOnCopyClick = useCallback(() => {
//     Taro.showToast({
//       title: 'useCallback'
//     })
//   }, [])

//   // console.log('Use callback', Taro)

//   // useEffect(() => {
//   //   // console.log('FIN use effect in MomentComment')
//   // })
//   // const hanldeOnCopyClick = () => {
//   //   Taro.showToast({
//   //     title: '复制成功'
//   //   })
//   // }

//   return (
//     <View className="moment-comment-comp">
//       {
//         comments && comments.map((item, i) => {
//           return (
//             <View className='moment-comment-item-wrap' key={i}>
//               <Text className='moment-comment-txt'>{item}</Text>
//             </View>
//           )
//         })
//       }

//       <View className='moment-comment-copy-wrap' onClick={hanldeOnCopyClick} >
//         <Text className='moment-comment-copy-txt'>复制评论</Text>
//       </View>
//     </View>
//   )
// }

function MomentComment(props) {

  const { comment: commentStr = '' } = props
  const comments = commentStr.split('|') || []

  // const hanldeOnCopyClick = useCallback(() => {
  //   Taro.showToast({
  //     title: 'useCallback'
  //   })
  // }, [])

  // console.log('Use callback', Taro)

  // Taro.useEffect(() => {
  //   console.log('FIN use effect in MomentComment')
  // })
  const hanldeOnCopyClick = () => {
    Taro.showToast({
      title: '复制成功'
    })
  }

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

      <View className='moment-comment-copy-wrap' onClick={hanldeOnCopyClick} >
        <Text className='moment-comment-copy-txt'>复制评论</Text>
      </View>
    </View>
  )
}

export default MomentComment

import './index.scss';

import { Image, ScrollView, Text, View } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';

import MomentComment from './moment-comment';
import MomentCoupon from './moment-coupon';
import MomentImgGallery from './moment-img-gallery';
import Spin from '@/components/spin';
import arrow_download from '@/assets/image/arrow_download.png';
import arrow_share from '@/assets/image/arrow_share.png';
import bg_triangle from '@/assets/image/triangle.png';
import { parseToMinuteago } from '@/utils/date';

import { MyMomentsLoader } from '@/components-poly/skeleton-poly/index'
import { momentsService } from './_state/moment.service';

interface MomentsInterface {
  scrollStyle: any;
  moments: any[];
  firstLoading: boolean;
  loading: boolean;
}

export default class Moments extends Component<MomentsInterface, {}> {


  handleOnScrollToLower = () => {
    momentsService.get()
  }


  render() {
    const { moments = [], firstLoading = true, loading = true } = this.props

    if (firstLoading) {
      return (<MyMomentsLoader />)
    }


    return (
      <ScrollView
        scrollY
        style={this.props.scrollStyle}
        onScrollToLower={this.handleOnScrollToLower.bind(this)}
      >
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
                      <MomentCoupon item={moment} />

                      {/* 箭头图标各平台不能统一位置，需要后期集中处理 */}
                      <Image src={bg_triangle} className='moment-comment-triangle-img' />
                      <MomentComment comment={moment['comment']} />
                    </View>

                  </View>
                </View>
              )
            })
          }
        </View>
        <Spin isShow={loading} />
      </ScrollView >
    )
  }
}

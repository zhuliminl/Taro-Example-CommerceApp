import './talent_article.scss'

import { Image, Text, View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'

import ArticleInfo from './article-info'
import HeaderWebpage from '@/components/header-webpage'
import RichTextPoly from '@/components-poly/rich-text-poly/index'
import { device } from '@/utils/device'
import { escape2Html } from '@/utils/stringhelper'
import { parseUrlParams } from '@/utils/navigation'

const host = HOST

export default class TalentArticle extends Component {
  config = {
    navigationBarTitleText: 'talent_article',
    disableScroll: true,
  }

  state = {
    loading: true,
    data: {}
  }

  componentDidMount = async () => {
    const params = parseUrlParams(this.$router.params)
    const id = params['id'] || ''

    // const url = `https://v2.api.haodanku.com/talent_article/apikey/saul/id/${id}`
    const url = `${host}/talent_article/apikey/saul/id/${id}`

    try {
      const resp = await Taro.request({ url })
      const data = resp && resp.data && resp.data.data
      // console.log('FIN 文章详情', data)
      this.setState({ data, loading: false })
    } catch (err) {
      console.log('FIN get article err', err)
    }
  }

  render() {
    const { data = {} } = this.state
    const nodes = data['article'] || ''
    return (
      <View className="talent_article-page">
        <HeaderWebpage backgroundColor={'#FFF'} titleColor={'#333'} title={'达人文章'} />
        {device.isH5() && (<View style={{ height: 50 }}></View>)}
        {device.isIOS() && (<View style={{ height: 70 }}></View>)}

        {/* 除了富文本，富文本外围还有其他组件 */}
        <Image
          className='talent-article-top-banner-img'
          src={data['article_banner'] || ''} />

        <View className='talent-article-wrap'>
          <ArticleInfo data={data} />
          <RichTextPoly
            frameStyle={{
              overflow: 'hidden',
            }}
            nodes={escape2Html(nodes)} />
        </View>
      </View>
    )
  }
}

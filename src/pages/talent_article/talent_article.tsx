import './talent_article.scss'

import { Image, Text, View, ScrollView } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'

import ArticleBottom from './article-bottom'
import ArticleInfo from './article-info'
import HeaderWebpage from '@/components/header-webpage'
import RichTextPoly from '@/components-poly/rich-text-poly/index'
import WavePoly from '@/components-poly/wave-poly/index'
import { device } from '@/utils/device'
import { escape2Html } from '@/utils/stringhelper'
import { parseUrlParams } from '@/utils/navigation'

// import { MyTalentArticleLoader } from '@/components-poly/skeleton-poly'

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
    let scrollHeight: any = device.windowHeight
    let blankHeight: any = 50
    if (device.isIOS()) {
      blankHeight = 50 + 20
      scrollHeight = device.windowHeight - 70
    }

    if (device.isH5()) {
      scrollHeight = device.windowHeight - 50
    }

    if (device.isWeChat()) {
      blankHeight = (50 + 20) + 'px'
      scrollHeight = (device.windowHeight - 10) + 'px'   // 微信很奇怪，
    }

    if (device.isAndroid()) {
      blankHeight = 48
      scrollHeight = device.windowHeight - 48 - 24   
    }




    const { data = {} } = this.state
    const nodes = data['article'] || ''
    return (
      <View className="talent_article-page">
        <HeaderWebpage backgroundColor={'#FFF'} titleColor={'#333'} title={'达人文章'} />
        {device.isH5() && (<View style={{ height: 50 }}></View>)}
        {device.isIOS() && (<View style={{ height: 70 }}></View>)}
        {device.isAndroid() && (<View style={{ height: 48 }}></View>)}
        {device.isWeChat() && (<View style={{ height: '70px' }}></View>)}

        <ScrollView
          scrollY
          style={{
            height: scrollHeight,
          }}
        >
          {/* 除了富文本，富文本外围还有其他组件 */}
          <Image
            className='talent-article-top-banner-img'
            src={data['article_banner'] || ''} />

          <View className='talent-article-wrap'>
            <ArticleInfo data={data} />
            {
              // this.state.loading ? <MyTalentArticleLoader />:
              this.state.loading ? null:
              <RichTextPoly nodes={escape2Html(nodes)} />
            }
            {/* <RichTextPoly nodes={getHtml_()} /> */}
          </View>

          {/* <View className='wave-poly-wrap'>
            <WavePoly />
          </View> */}
          <ArticleBottom data={data} />
        </ScrollView>
      </View>
    )
  }
}



// 后期对富文本中优惠券样式做编辑的时候可能会用到作为参考
function getHtml_() {
  // const height = 123
  // return `
  // <div style="height: ${height - 16}px;width: 568px; background-color: blue;">
  // </div>
  // `
  return `
  <div style="height: 100px; width: 100px; background-color: blue;">
    <h1> xxxxxxxxx </h1>
  </div>
  `
}

function getHtml() {
  return `<section class="section-style" style="margin: 22px 0;">
  <section style="font-size: 1.4rem; color: #635959; text-align: center; margin-top: 12px; padding: 0 5px;">
     <p style="margin: 0;"></p>
  </section>
</section>
<p style="text-align: center;">嗨，我是你们的时尚小编<br/></p>
<p style="text-align: center;">不知道大家有没有跟我一样</p>
<p style="text-align: center;">每次去逛街，或是刷朋友圈</p>
<p style="text-align: center;">看着别人家可爱又漂亮的小女儿</p>
<p style="text-align: center;">心就有那么一瞬间被萌化了</p>
<p><br/></p>
<p style="text-align: center;"><img class="rich-img" src="http://img.fqapps.com/Fs6YbNzVTQEaUuIu3k7K_Xbv-JMQ-600" _src="http://img.fqapps.com/Fs6YbNzVTQEaUuIu3k7K_Xbv-JMQ-600"/></p>
<p><br/></p>
<p style="text-align: center;">而且我发现当下的潮妈都特会打扮</p>
<p style="text-align: center;">每每看到她们一起自拍晒图</p>
<p style="text-align: center;">我都有会这样的想法</p>
<p style="text-align: center;">那就是生个软萌萌的女儿</p>
<p style="text-align: center;">把她也打扮成小公主</p>
<p style="text-align: center;">然后带着她一起出去逛街街</p>
<p style="text-align: center;"><br/></p>
<p style="text-align: center;"><img class="rich-img" src="http://img.fqapps.com/Fu-sq2wyZAdcMjBqUd7ngVU8YTcW-600" _src="http://img.fqapps.com/Fu-sq2wyZAdcMjBqUd7ngVU8YTcW-600"/></p>
<p style="text-align: center;"><br/></p>
<p style="text-align: center;">正因为这个想法</p>
<p style="text-align: center;">我最近就想出个女萌娃的穿搭文章</p>
<p style="text-align: center;">帮助对穿搭比较不上手的宝妈们</p>
<p style="text-align: center;">大家一起来看看吧~~</p>
<p style="text-align: center;"><br/></p>
<p style="text-align: center;"></p>
<section class="section-style" style="padding: 16px 0; display: flex; justify-content: center;">
  <section style="display: inline-block;">
     <section style="display: flex; justify-content: space-between;">
        <section style="width: 10px; height: 10px; border-left: 1px solid #aacedb; border-top:1px solid #aacedb; margin-left: -20px;"></section>
        <section style="width: 10px; height: 10px; border-right: 1px solid #aacedb; border-top:1px solid #aacedb; margin-right:-20px;"></section>
     </section>
     <section style="font-size: 16px; font-weight: bold; color: #333333; letter-spacing: 1.5px;">可爱女生T恤穿搭法</section>
     <section style="display: flex; justify-content: space-between;">
        <section style="width: 10px; height: 10px; border-left: 1px solid #aacedb; border-bottom:1px solid #aacedb; margin-left: -20px;"></section>
        <section style="width: 10px; height: 10px; border-right: 1px solid #aacedb; border-bottom:1px solid #aacedb; margin-right: -20px;"></section>
     </section>
  </section>
</section>
<p></p>
<p><br/></p>
<p>都说无T恤，不夏天，孩子们的穿搭也是一样，毕竟T恤不仅舒适，搭配方式也是十分丰富的，甜美、帅气、可爱统统都能驾驭，是夏日出街的必备单品啊！</p>
<p><br/></p>
<p style="text-align: center;"><img class="rich-img" src="http://img.fqapps.com/FlRa-BOKASJlxzSfQ_Mw8_iRUh-S-600" _src="http://img.fqapps.com/FlRa-BOKASJlxzSfQ_Mw8_iRUh-S-600"/></p>
<p></p>
<p><br/></p>
<p></p>
<section class="section-style" style="padding:16px 0px; display: flex; justify-content: center;">
  <section style="display: inline-block;">
     <section style="background: rgb(253,253,253); border-radius: 6px; box-shadow: 1px -1px  2px rgb(233,233,233); -webkit-transform: rotate(135deg); transform: rotate(135deg);">
        <section style="display: inline-block; padding: 3px;">
           <section style="background: #fb6b7c; border-radius: 6px; box-shadow: 1px -1px  2px rgb(233,233,233);">
              <section style="width: 24px; height: 24px; transform: rotate(-135deg); -webkit-transform: rotate(-135deg);">
                 <section style="line-height: 22px; text-align: center; color: #fff; font-size: 16px;">1</section>
              </section>
           </section>
        </section>
     </section>
  </section>
  <section style="margin-top: 1px; margin-left: 6px;">
     <section style="font-weight: bold; line-height: 28px; letter-spacing: 1.5px; font-size: 16px; color: #fb7585;">&nbsp;T恤+俏皮背带裤</section>
  </section>
</section>
<p></p>
<p><br/></p>
<p>背带裤将孩子们与生俱来的俏皮和活泼发挥得淋漓尽致。款式的版型不落潮流，孩子穿上舒适又自由。夏天搭配一件T恤，就能简单的穿出自己的风格。<br/></p>
<p><br/></p>
<p><img class="rich-img" src="http://img.fqapps.com/Frqcxm-bQd10i1cCu1BUTJqN-Xbw-600" _src="http://img.fqapps.com/Frqcxm-bQd10i1cCu1BUTJqN-Xbw-600"/></p>
<p><br/></p>
<p>这件背带裤，颜色相对会成熟一些，小女孩穿的话，会有别样的风采。</p>
<p>简单舒适的T恤衫，搭配可爱俏皮的背带裤，轻松搞定各种场合，宝妈也能省去搭配的烦恼。</p>
<p><br/></p>
<div class="single-content-one">
  <div class="single-info-one js_tobuy" id="itemid597648273529">

     <img class="rich-img" src="http://img.alicdn.com/imgextra/i4/1809908328/O1CN01fSTq1m2BOGz7pymRH_!!1809908328.jpg" alt="" class="getitemid" data-itemid="597648273529" data-tkrates="20" data-itemsale="94"/>

     <div class="single-details-one">
        <span class="phone-title single-title-one">洋气女童背带裤+上衣两件套童装 </span>
        <div class="single-coupon-one"><span class="coupon-style"><span>券</span><span class="coupon">100</span></span><span>已售 <span class="itemsale">94</span></span></div>
        <div class="single-message single-message-one"><span class="single-price"><span>券后</span><span class="price">59</span></span><span class="single-tkmoney"><span>佣金</span><span class="tkmoney">11</span></span><span class="single-tkrates"><span>营销</span><span class="tkrates">20</span></span></div>
     </div>
  </div>
</div>
<p>
</p>
<p><br/></p>
<p>墨绿色和粉色都很推荐哦！真的超可爱哒~~<br/></p>
<p><br/></p>
<div class="single-content-one">
  <div class="single-info-one js_tobuy" id="itemid587818074493">
     <img class="rich-img" src="http://img.alicdn.com/imgextra/i1/3791322241/O1CN01dmE2Bz1SQQ67XSrPa_!!3791322241.jpg" alt="" class="getitemid" data-itemid="587818074493" data-tkrates="30" data-itemsale="3737"/>
     <div class="single-details-one">
        <span class="phone-title single-title-one">【拍3件21.8！】儿童洋气T恤</span>
        <div class="single-coupon-one"><span class="coupon-style"><span>券</span><span class="coupon">10</span></span><span>已售 <span class="itemsale">3737</span></span></div>
        <div class="single-message single-message-one"><span class="single-price"><span>券后</span><span class="price">11.9</span></span><span class="single-tkmoney"><span>佣金</span><span class="tkmoney">3</span></span><span class="single-tkrates"><span>营销</span><span class="tkrates">30</span></span></div>
     </div>
  </div>
</div>
<p>
</p>
<p><br/></p>
<p>这一家的T恤衫是100%纯棉的，孩子夏天穿柔软又透气，而且款式特别多，价格也很实惠，宝妈可以多挑几款，给孩子搭配衣服穿。</p>
<p><br/></p>
<p></p>
<section class="section-style" style="padding:16px 0px; display: flex; justify-content: center;">
  <section style="display: inline-block;">
     <section style="background: rgb(253,253,253); border-radius: 6px; box-shadow: 1px -1px  2px rgb(233,233,233); -webkit-transform: rotate(135deg); transform: rotate(135deg);">
        <section style="display: inline-block; padding: 3px;">
           <section style="background: #fb6b7c; border-radius: 6px; box-shadow: 1px -1px  2px rgb(233,233,233);">
              <section style="width: 24px; height: 24px; transform: rotate(-135deg); -webkit-transform: rotate(-135deg);">
                 <section style="line-height: 22px; text-align: center; color: #fff; font-size: 16px;">2</section>
              </section>
           </section>
        </section>
     </section>
  </section>
  <section style="margin-top: 1px; margin-left: 6px;">
     <section style="font-weight: bold; line-height: 28px; letter-spacing: 1.5px; font-size: 16px; color: #fb7585;">T恤+短裙</section>
  </section>
</section>
<p></p>
<p><br/></p>
<p>小女孩夏季最常见的打扮就是T恤加上短裤或是短裙。这样的穿搭比较日常又很舒适。再说了，这大热天的，穿得清爽靓丽才是追求啊！</p>
<p><br/></p>
<p><img class="rich-img" src="http://img.fqapps.com/FkjaoruHBs1amCkcFJSFt8N4k-bY-600" _src="http://img.fqapps.com/FkjaoruHBs1amCkcFJSFt8N4k-bY-600"/></p>
<p><br/></p>
<p>一件美丽的T恤衫和一条仙女系的小纱裙，能让小女孩在这个夏季变得耀眼夺目。</p>
<p><br/></p>
<div class="am-g commodity-group">
  <div class="commodity-info js_tobuy even-commodity" id="itemid45481244002">
     <div class="adaptive-picture"><img class="rich-img" src="https://img.alicdn.com/imgextra/i1/804373617/O1CN01Pfj38Y1cad727jGyB_!!804373617.jpg" alt="" class="getitemid" data-itemid="45481244002" data-tkrates="20" data-itemsale="63"/></div>
     <div class="commodity-details">
        <span class="phone-title details-title">夏装珍珠蓬蓬裙女童网纱裙半身裙</span>
        <div class="commodity-message">
           <div class="message-left"><span class="commodity-price"><span>券后</span><span class="price">19</span></span><span class="commodity-tkmoney"><span>佣金</span><span class="tkmoney">3</span></span><span class="commodity-tkrates"><span>营销</span><span class="tkrates">20%</span></span></div>
           <div class="message-right"><span>已售 <span class="itemsale">63</span></span><span class="coupon-style"><span>券</span><span class="coupon">20</span></span></div>
        </div>
     </div>
  </div>
  <div class="commodity-info js_tobuy even-commodity" id="itemid591303262454">
     <div class="adaptive-picture"><img class="rich-img" src="https://img.alicdn.com/imgextra/i3/4060338653/O1CN01WTvQUv2Dn7ftFgqCs_!!4060338653.jpg" alt="" class="getitemid" data-itemid="591303262454" data-tkrates="30" data-itemsale="2608"/></div>
     <div class="commodity-details">
        <span class="phone-title details-title">2019夏季新款女童洋气t恤</span>
        <div class="commodity-message">
           <div class="message-left"><span class="commodity-price"><span>券后</span><span class="price">19.8</span></span><span class="commodity-tkmoney"><span>佣金</span><span class="tkmoney">5</span></span><span class="commodity-tkrates"><span>营销</span><span class="tkrates">30%</span></span></div>
           <div class="message-right"><span>已售 <span class="itemsale">2608</span></span><span class="coupon-style"><span>券</span><span class="coupon">10</span></span></div>
        </div>
     </div>
  </div>
</div>
<p>
</p>
<p><br/></p>
<p>蓬蓬的纱裙百搭又休身材，材质透气舒适，小珍珠的点缀，在阳光的照射下更有闪闪发亮的效果。很吸睛哦！<br/></p>
<p><br/></p>
<p></p>
<section class="section-style" style="padding:16px 0px; display: flex; justify-content: center;">
  <section style="display: inline-block;">
     <section style="background: rgb(253,253,253); border-radius: 6px; box-shadow: 1px -1px  2px rgb(233,233,233); -webkit-transform: rotate(135deg); transform: rotate(135deg);">
        <section style="display: inline-block; padding: 3px;">
           <section style="background: #fb6b7c; border-radius: 6px; box-shadow: 1px -1px  2px rgb(233,233,233);">
              <section style="width: 24px; height: 24px; transform: rotate(-135deg); -webkit-transform: rotate(-135deg);">
                 <section style="line-height: 22px; text-align: center; color: #fff; font-size: 16px;">3</section>
              </section>
           </section>
        </section>
     </section>
  </section>
  <section style="margin-top: 1px; margin-left: 6px;">
     <section style="font-weight: bold; line-height: 28px; letter-spacing: 1.5px; font-size: 16px; color: #fb7585;">T恤+短裤</section>
  </section>
</section>
<p></p>
<p><br/></p>
<p>一件T恤，休闲百搭，随意搭配一条简单的小短裤，就可以轻便出街啦！简约又不失时髦。</p>
<p><br/></p>
<p><img class="rich-img" src="http://img.fqapps.com/FpM-bLy9Kty8YViWsI9BRhXM2qFw-600" _src="http://img.fqapps.com/FpM-bLy9Kty8YViWsI9BRhXM2qFw-600"/></p>
<p><br/></p>
<p>荷花边的腰间设计，为简单的款式增加一些小女人味，修饰T恤的效果也特别好，高腰的，孩子穿还显腿长哦！</p>
<p><br/></p>
<div class="am-g commodity-group">
  <div class="commodity-info js_tobuy even-commodity" id="itemid592984465596">
     <div class="adaptive-picture"><img class="rich-img" src="https://img.alicdn.com/imgextra/i1/3001077245/O1CN0149GJ0q23OG1COgNHE_!!3001077245.jpg" alt="" class="getitemid" data-itemid="592984465596" data-tkrates="30" data-itemsale="636"/></div>
     <div class="commodity-details">
        <span class="phone-title details-title">夏薄款女童百搭洋气短裤纯棉宽松裤</span>
        <div class="commodity-message">
           <div class="message-left"><span class="commodity-price"><span>券后</span><span class="price">19.9</span></span><span class="commodity-tkmoney"><span>佣金</span><span class="tkmoney">5</span></span><span class="commodity-tkrates"><span>营销</span><span class="tkrates">30%</span></span></div>
           <div class="message-right"><span>已售 <span class="itemsale">636</span></span><span class="coupon-style"><span>券</span><span class="coupon">10</span></span></div>
        </div>
     </div>
  </div>
  <div class="commodity-info js_tobuy even-commodity" id="itemid591596906649">
     <div class="adaptive-picture"><img class="rich-img" src="http://img.alicdn.com/imgextra/i2/3819222125/O1CN01lT55Xj1RZIADabl5q_!!0-item_pic.jpg" alt="" class="getitemid" data-itemid="591596906649" data-tkrates="30" data-itemsale="912"/></div>
     <div class="commodity-details">
        <span class="phone-title details-title">纯棉【彩珠片绣】儿童洋气短袖T恤</span>
        <div class="commodity-message">
           <div class="message-left"><span class="commodity-price"><span>券后</span><span class="price">12.9</span></span><span class="commodity-tkmoney"><span>佣金</span><span class="tkmoney">3</span></span><span class="commodity-tkrates"><span>营销</span><span class="tkrates">30%</span></span></div>
           <div class="message-right"><span>已售 <span class="itemsale">912</span></span><span class="coupon-style"><span>券</span><span class="coupon">30</span></span></div>
        </div>
     </div>
  </div>
</div>
<p>
</p>
<p></p>
<p>套装对于搭配的新手宝妈来讲，会省心很多，而且现在大多款式在搭配上都很不错。鲜艳的颜色搭配，凸显孩子的夏季活力，服饰上的鲜花立体刺绣为整体气质提升了不少，，宝妈必入啊！</p>
<p><br/></p>
<div class="single-content-one">
  <div class="single-info-one js_tobuy" id="itemid593034351088">
     <img class="rich-img" src="http://img.alicdn.com/imgextra/i2/2200784731006/O1CN01FORe6r1JImygkECcR_!!2200784731006.jpg" alt="" class="getitemid" data-itemid="593034351088" data-tkrates="20" data-itemsale="10956"/>
     <div class="single-details-one">
        <span class="phone-title single-title-one">女童短袖短裤两件套女孩童装套装</span>
        <div class="single-coupon-one"><span class="coupon-style"><span>券</span><span class="coupon">200</span></span><span>已售 <span class="itemsale">10956</span></span></div>
        <div class="single-message single-message-one"><span class="single-price"><span>券后</span><span class="price">39</span></span><span class="single-tkmoney"><span>佣金</span><span class="tkmoney">7</span></span><span class="single-tkrates"><span>营销</span><span class="tkrates">20</span></span></div>
     </div>
  </div>
</div>
<p>
</p>
<p><br/></p>
<p></p>
<section class="section-style" style="padding:16px 0px; display: flex; justify-content: center;">
  <section style="display: inline-block;">
     <section style="background: rgb(253,253,253); border-radius: 6px; box-shadow: 1px -1px  2px rgb(233,233,233); -webkit-transform: rotate(135deg); transform: rotate(135deg);">
        <section style="display: inline-block; padding: 3px;">
           <section style="background: #fb6b7c; border-radius: 6px; box-shadow: 1px -1px  2px rgb(233,233,233);">
              <section style="width: 24px; height: 24px; transform: rotate(-135deg); -webkit-transform: rotate(-135deg);">
                 <section style="line-height: 22px; text-align: center; color: #fff; font-size: 16px;">4</section>
              </section>
           </section>
        </section>
     </section>
  </section>
  <section style="margin-top: 1px; margin-left: 6px;">
     <section style="font-weight: bold; line-height: 28px; letter-spacing: 1.5px; font-size: 16px; color: #fb7585;">&nbsp;T恤+阔腿裤</section>
  </section>
</section>
<p></p>
<p><br/></p>
<p>讲真，现在孩子的服装都带着大人服饰的时尚元素，让孩子们的时髦跟上现代时髦的脚步。好比近几年很火的阔腿裤，大人款的缩小版，还可爱了不少呢！</p>
<p><br/></p>
<p><img class="rich-img" src="http://img.fqapps.com/Fu1l5uNUjzn-9xemJJUGdq8MduyZ-600" _src="http://img.fqapps.com/Fu1l5uNUjzn-9xemJJUGdq8MduyZ-600"/></p>
<p><br/></p>
<p>萌娃款的雪纺阔腿裤，碎花元素，上身气质满满，简单搭配印花T恤就很修身材哦！再穿上成熟点的小单鞋或是小凉鞋，很有小女人的feel哦~</p>
<p><br/></p>
<div class="single-content-one">
  <div class="single-info-one js_tobuy" id="itemid590003787235">
     <img class="rich-img" src="http://img.alicdn.com/imgextra/i2/2084612671/O1CN01OfhCRT1VbMQ5O8OnV_!!2084612671.jpg" alt="" class="getitemid" data-itemid="590003787235" data-tkrates="20" data-itemsale="223"/>
     <div class="single-details-one">
        <span class="phone-title single-title-one">女童连衣裙雪纺公主儿童短袖两件套</span>
        <div class="single-coupon-one"><span class="coupon-style"><span>券</span><span class="coupon">40</span></span><span>已售 <span class="itemsale">223</span></span></div>
        <div class="single-message single-message-one"><span class="single-price"><span>券后</span><span class="price">68</span></span><span class="single-tkmoney"><span>佣金</span><span class="tkmoney">13</span></span><span class="single-tkrates"><span>营销</span><span class="tkrates">20</span></span></div>
     </div>
  </div>
</div>
<p>
</p>
<p></p>
<p></p>
<section class="section-style" style="padding: 16px 0; display: flex; justify-content: center;">
  <section style="display: inline-block;">
     <section style="display: flex; justify-content: space-between;">
        <section style="width: 10px; height: 10px; border-left: 1px solid #aacedb; border-top:1px solid #aacedb; margin-left: -20px;"></section>
        <section style="width: 10px; height: 10px; border-right: 1px solid #aacedb; border-top:1px solid #aacedb; margin-right:-20px;"></section>
     </section>
     <section style="font-size: 16px; font-weight: bold; color: #333333; letter-spacing: 1.5px;">更多搭配选择</section>
     <section style="display: flex; justify-content: space-between;">
        <section style="width: 10px; height: 10px; border-left: 1px solid #aacedb; border-bottom:1px solid #aacedb; margin-left: -20px;"></section>
        <section style="width: 10px; height: 10px; border-right: 1px solid #aacedb; border-bottom:1px solid #aacedb; margin-right: -20px;"></section>
     </section>
  </section>
</section>
<p></p>
<p><br/></p>
<div class="single-content">
  <div class="single-info js_tobuy" id="itemid589415526618">
     <img class="rich-img" src="http://img.alicdn.com/imgextra/i4/2869211682/O1CN015tADx61OIOjQ9akWr_!!2869211682.jpg" alt="" class="getitemid" data-itemid="589415526618" data-tkrates="21" data-itemsale="10214"/>
     <div class="single-details-two">
        <span class="phone-title single-title-two">女童夏装运动套装短袖牛仔裤两件套</span>
        <div class="single-coupon-two"><span class="coupon-style"><span>券</span><span class="coupon">200</span></span><span>已售 <span class="itemsale">10214</span></span></div>
        <div class="single-message single-message-two"><span class="single-price"><span>券后</span><span class="price">69</span></span><span class="single-tkmoney"><span>佣金</span><span class="tkmoney">14</span></span><span class="single-tkrates"><span>营销</span><span class="tkrates">21%</span></span></div>
     </div>
     <div class="commodity-remove">
        <div class="trash-btn"><em class="am-icon-trash"></em></div>
     </div>
  </div>
</div>
<p>
</p>
<p><br/></p>
<div class="single-content">
  <div class="single-info js_tobuy" id="itemid571292944815">
     <img class="rich-img" src="https://img.alicdn.com/imgextra/i4/804373617/O1CN01iaj3QM1cad7OvkRia_!!804373617.jpg" alt="" class="getitemid" data-itemid="571292944815" data-tkrates="20" data-itemsale="209"/>
     <div class="single-details-two">
        <span class="phone-title single-title-two">潮衣背带裤短袖T恤韩版夏季套装</span>
        <div class="single-coupon-two"><span class="coupon-style"><span>券</span><span class="coupon">10</span></span><span>已售 <span class="itemsale">209</span></span></div>
        <div class="single-message single-message-two"><span class="single-price"><span>券后</span><span class="price">59</span></span><span class="single-tkmoney"><span>佣金</span><span class="tkmoney">11</span></span><span class="single-tkrates"><span>营销</span><span class="tkrates">20%</span></span></div>
     </div>
     <div class="commodity-remove">
        <div class="trash-btn"><em class="am-icon-trash"></em></div>
     </div>
  </div>
</div>
<p>
</p>
<p><br/></p>
<div class="single-content">
  <div class="single-info js_tobuy" id="itemid592201475811">
     <img class="rich-img" src="http://img.alicdn.com/imgextra/i1/3955211621/O1CN01FF7zE61NqSXeX5a1R_!!3955211621.jpg" alt="" class="getitemid" data-itemid="592201475811" data-tkrates="20" data-itemsale="99"/>
     <div class="single-details-two">
        <span class="phone-title single-title-two">女童阔腿裤+蝙蝠袖短袖两件套</span>
        <div class="single-coupon-two"><span class="coupon-style"><span>券</span><span class="coupon">50</span></span><span>已售 <span class="itemsale">99</span></span></div>
        <div class="single-message single-message-two"><span class="single-price"><span>券后</span><span class="price">69</span></span><span class="single-tkmoney"><span>佣金</span><span class="tkmoney">13</span></span><span class="single-tkrates"><span>营销</span><span class="tkrates">20%</span></span></div>
     </div>
     <div class="commodity-remove">
        <div class="trash-btn"><em class="am-icon-trash"></em></div>
     </div>
  </div>
</div>
<p>
</p>
<p><br/></p>
<div class="single-content">
  <div class="single-info js_tobuy" id="itemid591552880375">
     <img class="rich-img" src="http://img.alicdn.com/imgextra/i4/2865556086/O1CN01mFB8dY1upQzOgfLHx_!!2865556086.jpg" alt="" class="getitemid" data-itemid="591552880375" data-tkrates="20" data-itemsale="53"/>
     <div class="single-details-two">
        <span class="phone-title single-title-two">女童连衣裙公主裙半袖网纱裙女裙</span>
        <div class="single-coupon-two"><span class="coupon-style"><span>券</span><span class="coupon">200</span></span><span>已售 <span class="itemsale">53</span></span></div>
        <div class="single-message single-message-two"><span class="single-price"><span>券后</span><span class="price">59</span></span><span class="single-tkmoney"><span>佣金</span><span class="tkmoney">11</span></span><span class="single-tkrates"><span>营销</span><span class="tkrates">20%</span></span></div>
     </div>
     <div class="commodity-remove">
        <div class="trash-btn"><em class="am-icon-trash"></em></div>
     </div>
  </div>
</div>
<p>
</p>
<p><br/></p>
<div class="single-content">
  <div class="single-info js_tobuy" id="itemid594825565171">
     <img class="rich-img" src="http://img.alicdn.com/imgextra/i4/1027849873/O1CN01yaCjzX2Mnst1lRaWD_!!1027849873.jpg" alt="" class="getitemid" data-itemid="594825565171" data-tkrates="30" data-itemsale="278"/>
     <div class="single-details-two">
        <span class="phone-title single-title-two">网红女童装时髦洋气套装儿童装两件</span>
        <div class="single-coupon-two"><span class="coupon-style"><span>券</span><span class="coupon">30</span></span><span>已售 <span class="itemsale">278</span></span></div>
        <div class="single-message single-message-two"><span class="single-price"><span>券后</span><span class="price">39.9</span></span><span class="single-tkmoney"><span>佣金</span><span class="tkmoney">11</span></span><span class="single-tkrates"><span>营销</span><span class="tkrates">30%</span></span></div>
     </div>
     <div class="commodity-remove">
        <div class="trash-btn"><em class="am-icon-trash"></em></div>
     </div>
  </div>
</div>
<p>
</p>
<p><br/></p>
<p><br/></p>`
}

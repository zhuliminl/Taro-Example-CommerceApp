import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Image } from '@tarojs/components'
import './index.scss'

import icon_search_red from '@/assets/icon/search-red.png'
import icon_back from '@/assets/icon/back.png'
import { device } from '@/utils/device';
import { navigateTo } from '@/utils/navigation'

interface SearchBarInterface {
  placeholder: string;
  onSearch: (any) => void;
  $router?: any;
  focus?: boolean;
}


export default class SearchBar extends Component<SearchBarInterface, {}> {
  state = {
    keyword: ''
  }

  static defaultProps = {
    focus: true
  }

  componentDidMount = () => {
  }

  handleOnChange = event => {
    const { detail } = event
    const { value } = detail
    this.setState({
      keyword: value,
    })
  }

  handleOnSearch = () => {
    // 如果当前页面是搜索页，则直接在原地重新渲染，而不是跳转
    // console.log('FIN search', this.props.$router)   // 注意 RN 中 非页面组件中访问 $router 必须得通过下传的方式才能做到
    if (this.props.$router && this.props.$router['path'] === '/pages/search/search') {
      return this.props.onSearch(this.state.keyword)
    }
    navigateTo('search', { keyword: this.state.keyword })
  }

  render() {
    const inputStyle: any = {}
    if (device.isAndroid()) {
      inputStyle.height = 40
    }
    return (
      <View className="search-bar-comp">
        <View className='search-bar-back-img-wrap' onClick={() => { Taro.navigateBack() }}>
          <Image className='search-bar-back-img' src={icon_back} />
        </View>
        <View className='search-bar-wrap'>
          <Image className='search-bar-img' src={icon_search_red} />
          <Input
            type='text'
            placeholder={this.props.placeholder}
            className='search-bar-input'
            focus={this.props.focus}
            onInput={this.handleOnChange.bind(this)}
            onConfirm={this.handleOnSearch.bind(this)}
            style={inputStyle}
          />
          <Text className='search-bar-red-btn' onClick={this.handleOnSearch.bind(this)}>搜券</Text>
        </View>
      </View>
    )
  }
}

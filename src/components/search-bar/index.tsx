import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Image } from '@tarojs/components'
import './index.scss'

import icon_search_red from '@/assets/icon/search-red.png'
import icon_back from '@/assets/icon/back.png'
import { device } from '@/utils/device';

interface SearchBarInterface {
  placeholder: string;
  onSearch: (any) => void;
}


export default class SearchBar extends Component<SearchBarInterface, {}> {
  componentDidMount = () => {
  }

  handleOnChange = event => {

  }

  render() {
    const inputStyle: any = {}
    if(device.isAndroid()) {
      inputStyle.height = 40
    }
    return (
      <View className="search-bar-comp">
        <View className='search-bar-back-img-wrap' onClick={() => {Taro.navigateBack()}}>
          <Image className='search-bar-back-img' src={icon_back}/>
        </View>
        <View className='search-bar-wrap'>
          <Image className='search-bar-img' src={icon_search_red} />
          <Input 
            type='text'
            placeholder={this.props.placeholder}
            className='search-bar-input'
            focus
            onInput={this.handleOnChange.bind(this)}
            style={inputStyle}
            />
          <Text className='search-bar-red-btn'>搜券</Text>
        </View>
      </View>
    )
  }
}

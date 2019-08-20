import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index.scss'
import { device } from '@/utils/device'

interface CodeInputInterface {
  handleOnSubmit: ({ code: string }) => void;
  codeLength: number;
}

// 针对不同长度的验证码的宽度调节
const itemWidthMap = {
  '4': 60,
  '5': 50,
  '6': 40,
}

export default class CodeInput extends Component<CodeInputInterface, {}> {
  state = {
    code: '',
    codeList: [],
  }

  componentDidMount = () => {
    const { codeLength = 4 } = this.props
    this.setState({
      codeList: [...Array(codeLength)].map(x => '')
    })
  }

  handleOnChange = event => {
    const { detail = {} } = event
    const { value = '' } = detail

    const { codeLength = 4 } = this.props
    if (value.length >= codeLength) {
      const { handleOnSubmit } = this.props
      handleOnSubmit && handleOnSubmit({ code: value })
    }


    let codeListInit = [...Array(codeLength)].map(x => '')
    let codeList = codeListInit.map((item, i) => {
      const data = value.split('')[i] || ''
      return data
    })

    this.setState({
      code: value,
      codeList,
    })
  }

  render() {
    const { codeLength = 4 } = this.props
    const { codeList = [] } = this.state

    // console.log('FIN codelist', codeList)
    return (
      <View className="code-input-comp">
        <View className='code-display-wrap'>
          {
            codeList.map((item, i) => {
              let borderStyle = { backgroundColor: '#EEE' }
              if (codeList[i] === '' && codeList[i - 1] !== '') {
                borderStyle = {
                  backgroundColor: '#FE1123'
                }
              }

              let itemWidth: any = itemWidthMap[codeLength]
              // console.log('FIN itemWidth', itemWidth)
              if (device.isWeChat()) {
                itemWidth += 'px'
              }

              return (
                <View className='code-display-item-wrap'
                  style={{
                    width: itemWidth,
                  }}
                  key={i}>
                  <Text className='code-display-item-txt'>{item}</Text>
                  <View className='code-display-item-border'
                    style={{
                      ...borderStyle,
                      width: itemWidth,
                    }}
                  ></View>
                </View>
              )
            })
          }
        </View>

        <Input
          maxLength={codeLength}
          value={this.state.code}
          type={'number'}
          placeholder={''}
          className='code-input'
          focus
          onInput={this.handleOnChange.bind(this)}
        // onConfirm={this.handleOnSearch.bind(this)}
        // style={inputStyle}
        />


      </View>
    )
  }
}

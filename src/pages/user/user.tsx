import './user.scss'
import * as actions from '../../actions/user'
import { Image, Text, View, Input } from '@tarojs/components';
import Taro, { Component } from '@tarojs/taro';
import Logo from './logo'

import { connect } from '@tarojs/redux'
import { device } from '@/utils/device'

interface UserInterface {
  getUser: (token: string) => {},
  userInfo: any,
}

@connect(state => state.user, { ...actions })
class User extends Component<UserInterface, {}> {
  config = {
    navigationBarTitleText: '个人中心',
    navigationBarBackgroundColor: 'red',
    disableScroll: true,
  }

  state = {
    pid: '',
    value: '',
  }

  componentDidMount = () => {

    this.getPid()
  }

  getPid = async () => {
    try {
      const res = await Taro.getStorage({ key: 'pid' })
      if (res && res['data']) {
        const pid = res['data']
        this.setState({
          pid,
        })
      }
    } catch (err) {
      console.log('FIN get pid err', err)
      Taro.showToast({
        title: '获取 pid 错误'
      })
    }
  }

  handleOnSubmit = () => {
    Taro.showToast({
      title: '更新 pid 成功'
    })
    const { value } = this.state
    this.setState({
      pid: value,
    })

    Taro.setStorage({
      key: 'pid',
      data: value,
    })
  }

  handleOnChange = e => {
    const { detail } = e
    const { value = '' } = detail
    this.setState({
      value
    })
  }

  render() {
    const { pid } = this.state
    return (
      <View className='user'
        style={{
          height: device.windowHeight,
          width: device.windowWidth
        }}
      >
        <Logo />
        {
          !pid ?
            (
              <View className='user-input-wraper'>
                <Text className='user-input-title'>请填写淘客联盟 PID</Text>
                <Input
                  value={this.state.value}
                  type='text'
                  placeholder={''}
                  className='user-input'
                  // focus={this.props.focus}
                  onInput={this.handleOnChange.bind(this)}
                  onConfirm={this.handleOnSubmit.bind(this)}
                />

                <View
                  className='user-btn'
                  onClick={this.handleOnSubmit}
                >
                  <Text className='user-btn-txt'>提交</Text>
                </View>
              </View>
            ) :
            (
              <View className='user-input-wraper'>
                <Text className='user-input-title'>请填写淘客联盟 PID</Text>
                <Input
                  value={this.state.value}
                  type='text'
                  placeholder={''}
                  className='user-input'
                  // focus={this.props.focus}
                  onInput={this.handleOnChange.bind(this)}
                  onConfirm={this.handleOnSubmit.bind(this)}
                />

                <View
                  className='user-btn'
                  onClick={this.handleOnSubmit}
                >
                  <Text className='user-btn-txt'>修改</Text>
                </View>
              </View>
            )
        }
      </View>
    )
  }
}

export default User
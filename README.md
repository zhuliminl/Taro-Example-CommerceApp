# 大淘客

基于 Taro 实现的跨端 App

## 项目运行

见官网


常见的坑

- `_reactNative.UIManager.getViewManagerConfig(reactNativeViewName)',` 报错

解决办法见 [https://github.com/expo/expo/commit/27f4c75d0b88cded2f7b109519ad70f58c0d4ad4](https://github.com/expo/expo/commit/27f4c75d0b88cded2f7b109519ad70f58c0d4ad4)

按如上提示修改 `node_modules/@unimodules/react-native-adapter/build/NativeViewManagerAdapter.js` 文件即可

RN 端需要配合 taro 提供的壳才能运行 [https://github.com/NervJS/taro-native-shell](https://github.com/NervJS/taro-native-shell)


## 适配进度

- [x] H5 -- 完美适配
- [x] React Native -- 完美适配
- [x] 微信小程序 -- 完美适配
- [x] 支付宝小程序 -- 适配中

## 目标功能

- [x] 商品列表 -- 开发中
- [x] 会员中心 -- 开发中
- [x] 设置 -- 开发中
- [ ] 商品详情 -- 开发中
- [ ] 商品搜索 -- 开发中
- [ ] 商品筛选 -- 开发中

## 部分截图展示

个人中心、设置页面、商品单双排列表

### h5 端

<img src="screenshots/h5_2.png" width="416.5px" height="667px"/>   <img src="screenshots/h5_1.png" width="416.5px" height="667px" />   <img src="screenshots/h5_3.png" width="416.5px" height="667px" />

### RN 端

<img src="screenshots/rn_2.png" width="416.5px" height="667px" />   <img src="screenshots/rn_4.png" width="416.5px" height="667px" />   <img src="screenshots/rn_5.png" width="416.5px" height="667px" />   <img src="screenshots/rn_1.png" width="416.5px" height="667px" />

### 小程序 端

<img src="screenshots/we_1.png" width="416.5px" height="667px" />

### 部分问题

RN 端 Swiper 组件滑动没有触发 onChange 事件，修改 'node_modules/@manjiz/react-native-swiper/dist/index.js' updateIndexByOffset 方法，将最后的 index 还是取原来的 index ，凑巧能解决问题。不知道是不是我哪里写错了


# 技术交流

如有帮助，欢迎加好友一起共同学习


<img src="screenshots/me.png" width="200px" /> 

# License

[MIT](LICENSE)
# 大淘客

怎么把项目跑起来？

- `_reactNative.UIManager.getViewManagerConfig(reactNativeViewName)',` 报错

解决办法

详情见 [https://github.com/expo/expo/commit/27f4c75d0b88cded2f7b109519ad70f58c0d4ad4](https://github.com/expo/expo/commit/27f4c75d0b88cded2f7b109519ad70f58c0d4ad4)

 按如上提示修改 `node_modules/@unimodules/react-native-adapter/build/NativeViewManagerAdapter.js` 文件即可

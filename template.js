const fs = require('fs');

const dirName = process.argv[2];

console.log('FIN', dirName)

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run tep test');
  process.exit(0);
}

// 页面模版
const indexTep = `import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './${dirName}.scss'


export default class ${titleCase(dirName)} extends Component {
  config = {
    navigationBarTitleText: '${dirName}',
  }

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="${dirName}-page">
        <Text>
          ${dirName}
        </Text>
      </View>
    )
  }
}
`

const scssTep = `
`

fs.mkdirSync(`./src/pages/${dirName}`)
fs.mkdirSync(`./src/pages/${dirName}/assets`)
process.chdir(`./src/pages/${dirName}`)
fs.writeFileSync(`${dirName}.tsx`, indexTep)
fs.writeFileSync(`${dirName}.scss`, scssTep)

function titleCase(str) {
  const array = str.toLowerCase().split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(' ');
  return string;
}

process.exit(0)
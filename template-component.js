const fs = require('fs');

const pageDir = process.argv[2];
const dirName = process.argv[3];

if (!pageDir) {
  console.log('page 不能为空！');
  console.log('示例：npm run tep test');
  process.exit(0);
}

if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run tep test');
  process.exit(0);
}

// 页面模版
const indexTep = `import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'


export default class ${titleCase(dirName)} extends Component {

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
const pathName = `${pageDir}/${dirName}`

fs.mkdirSync(pathName)
process.chdir(pathName)

fs.writeFileSync(`index.tsx`, indexTep)
fs.writeFileSync(`index.scss`, scssTep)

function titleCase(str) {
  const array = str.toLowerCase().split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].substring(1, array[i].length);
  }
  const string = array.join(' ');
  return string;
}

process.exit(0)

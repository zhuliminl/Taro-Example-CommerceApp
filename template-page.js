const fs = require('fs');

const dirName = process.argv[2];


if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run tep test');
  process.exit(0);
}

if(dirName.indexOf('-') > 0) {
  console.log('FIN 如果使用连字符,页面创建必须使用下划线 _ 做间隔 !!!')
  console.log('创建模板失败，注意 page 和 component 的命名格式不同！')
  process.exit(0);
}


// 页面模版
const indexTep = `import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './${dirName}.scss'


export default class ${titleCase(dirName)} extends Component {
  config = {
    navigationBarTitleText: '${dirName}',
    disableScroll: true,
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

function changeCap(str) {
  console.log('Str', str)
  return str[0].toUpperCase()+str.slice(1)
}

function titleCase(str) {
  return str.split("_").map((val) => changeCap(val)).join("");
}

process.exit(0)
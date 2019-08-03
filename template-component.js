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

if(dirName.indexOf('_') > 0) {
  console.log('FIN 如果使用连字符,组件 创建必须使用连字符 - 做间隔 !!!')
  console.log('创建模板失败，注意 page 和 component 的命名格式不同！')
  process.exit(0);
}

// 页面模版
const indexTep = `import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface ${titleCase(dirName)}Interface {
}

export default class ${titleCase(dirName)} extends Component<${titleCase(dirName)}Interface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="${dirName}-comp">
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

function changeCap(str) {
  return str[0].toUpperCase()+str.slice(1)
}

function titleCase(str) {
  return str.split("-").map((val) => changeCap(val)).join("");
}

process.exit(0)

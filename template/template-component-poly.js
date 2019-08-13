const fs = require('fs');

const dirName = process.argv[2];

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


const mainFold = './src/components-poly'
const cpsDir = `${mainFold}/${dirName}`
console.log('F', cpsDir)

fs.mkdirSync(cpsDir)
process.chdir(cpsDir)

const h5Tep = `
import Taro, { Component } from '@tarojs/taro'

interface ${titleCase(dirName)}Interface {
}

export default class ${titleCase(dirName)} extends Component<${titleCase(dirName)}Interface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <div>
      hhhhh5
      </div>
    )
  }
}
`
const rnTep = `
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

interface ${titleCase(dirName)}Interface {
}

export default class ${titleCase(dirName)} extends Component<${titleCase(dirName)}Interface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View>
        <Text>
        rn ${dirName}
        </Text>
      </View>
    )
  }
}
`
const weappTep = `
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

interface ${titleCase(dirName)}Interface {
}

export default class ${titleCase(dirName)} extends Component<${titleCase(dirName)}Interface,{}> {

  componentDidMount = () => {
  }

  render() {
    return (
      <View className="${dirName}-comp">
        <Text>
        weapp ${dirName}
        </Text>
      </View>
    )
  }
}
`

fs.writeFileSync('index.scss', '')
fs.writeFileSync('index.h5.tsx', h5Tep)
fs.writeFileSync('index.rn.tsx', rnTep)
fs.writeFileSync('index.weapp.tsx', weappTep)

process.exit(0)


function changeCap(str) {
  return str[0].toUpperCase()+str.slice(1)
}

function titleCase(str) {
  return str.split("-").map((val) => changeCap(val)).join("");
}
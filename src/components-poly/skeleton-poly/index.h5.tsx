
import Taro, { Component } from '@tarojs/taro'
import {View} from '@tarojs/components'
import Skeleton from 'taro-skeleton'

import ContentLoader, { Facebook, Instagram } from 'react-content-loader'

const pColor = '#EEE'
const sColor =  '#F5F6F7'

const MyLoader = () => <ContentLoader />
const MyFacebookLoader = () => <Facebook />

export const MyMomentsLoader = () => (
  <ContentLoader
    height={840}
    speed={3}
    primaryColor={pColor}
    secondaryColor={sColor}
  >
    {/* Only SVG shapes */}
    <rect x="15" y="20" rx="2" ry="2" width="50" height="50" />
    <rect x="80" y="20" rx="2" ry="2" width="150" height="24" />
    <rect x="80" y="60" rx="2" ry="2" width="100" height="10" />
    <rect x="80" y="80" rx="2" ry="2" width="300" height="10" />
    <rect x="80" y="100" rx="2" ry="2" width="300" height="10" />
    <rect x="80" y="120" rx="2" ry="2" width="280" height="10" />
    <rect x="80" y="140" rx="2" ry="2" width="270" height="10" />
    <rect x="80" y="160" rx="2" ry="2" width="280" height="10" />
    <rect x="80" y="180" rx="2" ry="2" width="150" height="10" />
    <rect x="80" y="200" rx="2" ry="2" width="90" height="90" />
    <rect x="180" y="200" rx="2" ry="2" width="90" height="90" />
    <rect x="280" y="200" rx="2" ry="2" width="90" height="90" />
    <rect x="80" y="300" rx="2" ry="2" width="90" height="90" />
  </ContentLoader>
)

export const MyTopicsLoader = () => (
  <ContentLoader
    height={1000}
    speed={3}
    primaryColor={pColor}
    secondaryColor={sColor}
  >
    {/* Only SVG shapes */}
    <rect x="15" y="20" rx="2" ry="2" width="370" height="370" />
    <rect x="15" y="400" rx="2" ry="2" width="100" height="30" />
    <rect x="15" y="440" rx="2" ry="2" width="370" height="10" />
    <rect x="15" y="460" rx="2" ry="2" width="370" height="10" />
    <rect x="15" y="480" rx="2" ry="2" width="370" height="10" />
    <rect x="15" y="500" rx="2" ry="2" width="330" height="10" />
    <rect x="15" y="520" rx="2" ry="2" width="300" height="10" />
    <rect x="15" y="540" rx="2" ry="2" width="200" height="10" />
  </ContentLoader>
)



// interface SkeletonPolyInterface {
// }

// export default class SkeletonPoly extends Component<SkeletonPolyInterface,{}> {

//   componentDidMount = () => {
//   }

//   render() {
//     return (
//     )
//   }
// }

export default Skeleton
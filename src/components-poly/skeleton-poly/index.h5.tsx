import Taro from '@tarojs/taro';
import ContentLoader, { Facebook } from 'react-content-loader';
import Skeleton from 'taro-skeleton';


const pColor = '#EEE'
const sColor = '#F5F6F7'


export const MyTalentArticleLoader = () => (
  <ContentLoader
    height={840}
    speed={3}
    primaryColor={pColor}
    secondaryColor={sColor}
  >
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="4" ry="4" width="500" height="900" />
  </ContentLoader>
)

export const MyMomentsLoader = () => (
  <ContentLoader
    height={840}
    speed={3}
    primaryColor={pColor}
    secondaryColor={sColor}
  >
    {/* Only SVG shapes */}
    <rect x="15" y="20" rx="4" ry="4" width="50" height="50" />
    <rect x="80" y="20" rx="4" ry="4" width="150" height="24" />
    <rect x="80" y="60" rx="4" ry="4" width="100" height="10" />
    <rect x="80" y="80" rx="4" ry="4" width="300" height="10" />
    <rect x="80" y="100" rx="4" ry="4" width="300" height="10" />
    <rect x="80" y="120" rx="4" ry="4" width="280" height="10" />
    <rect x="80" y="140" rx="4" ry="4" width="270" height="10" />
    <rect x="80" y="160" rx="4" ry="4" width="280" height="10" />
    <rect x="80" y="180" rx="4" ry="4" width="150" height="10" />
    <rect x="80" y="200" rx="4" ry="4" width="90" height="90" />
    <rect x="180" y="200" rx="4" ry="4" width="90" height="90" />
    <rect x="280" y="200" rx="4" ry="4" width="90" height="90" />
    <rect x="80" y="300" rx="4" ry="4" width="90" height="90" />
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
    <rect x="15" y="20" rx="4" ry="4" width="370" height="370" />
    <rect x="15" y="400" rx="4" ry="4" width="100" height="30" />
    <rect x="15" y="440" rx="4" ry="4" width="370" height="10" />
    <rect x="15" y="460" rx="4" ry="4" width="370" height="10" />
    <rect x="15" y="480" rx="4" ry="4" width="370" height="10" />
    <rect x="15" y="500" rx="4" ry="4" width="330" height="10" />
    <rect x="15" y="520" rx="4" ry="4" width="300" height="10" />
    <rect x="15" y="540" rx="4" ry="4" width="200" height="10" />
  </ContentLoader>
)

export const MyTalkLoader = () => (
  <ContentLoader
    height={1000}
    speed={3}
    primaryColor={pColor}
    secondaryColor={sColor}
  >
    {/* Only SVG shapes */}
    <rect x="30" y="20" rx="4" ry="4" width="300" height="150" />

    <rect x="30" y="220" rx="4" ry="4" width="100" height="30" />
    <rect x="30" y="260" rx="4" ry="4" width="200" height="80" />
    <rect x="30" y="350" rx="4" ry="4" width="150" height="20" />
    <rect x="30" y="380" rx="15" ry="15" width="30" height="30" />
    <rect x="70" y="390" rx="4" ry="4" width="60" height="15" />

    <rect x="280" y="260" rx="4" ry="4" width="200" height="80" />
    <rect x="280" y="350" rx="4" ry="4" width="150" height="20" />
    <rect x="280" y="380" rx="15" ry="15" width="30" height="30" />
    <rect x="320" y="390" rx="4" ry="4" width="60" height="15" />

    <rect x="30" y="440" rx="4" ry="4" width="100" height="30" />
    <rect x="30" y="480" rx="4" ry="4" width="200" height="80" />
  </ContentLoader>
)


// export default Skeleton
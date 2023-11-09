import { FC } from 'react'
// import { Link } from 'react-router-dom'
import { tabInfo } from './tablist'
import TabWrapper from './TabWrapper'

const Tab: FC<tabInfo> = ({ text, icon, destination }) => {
  return (
    <TabWrapper to={destination}>
      <span>{icon}</span>
      <span>{text}</span>
    </TabWrapper>
  )
}
export default Tab

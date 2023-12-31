// import { Outlet } from 'react-router-dom'
import Nav from '../components/tabs/Nav'
import { useLocation } from 'react-router-dom'
import Statistics from './Statistics'
import Map from './Map'
import Dashboard from './Dashboard'
import Calender from './Calender'
import Settings from './Settings'
import styles from '../css/shared-layout.module.css'
import MobileHeader from '../components/tabs/MobileHeader'

const SharedLayout = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const activeTab = params.get('tab')

  return (
    <div className={styles.main}>
      <MobileHeader />
      <section>
        {activeTab === null && <Dashboard />}
        {activeTab === 'statistics' && <Statistics />}
        {activeTab === 'map' && <Map />}
        {activeTab === 'calendar' && <Calender />}
        {activeTab === 'settings' && <Settings />}
      </section>
      {/* <Outlet /> */}
      <Nav />
    </div>
  )
}
export default SharedLayout

import Search from '../components/dashboard/Search'
import UserNav from '../components/dashboard/UserNav'
import styles from '../css/dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.main}>
      <div>
        {/* search and user icon */}
        <section className={styles['search-and-user-nav']}>
          <Search isvisible={false} />
          <UserNav isvisible={false} />
        </section>
        {/* weather for common locations */}
        {/* weather for a selected location */}
        {/* weather graph */}
        Dashboard
      </div>
    </div>
  )
}
export default Dashboard

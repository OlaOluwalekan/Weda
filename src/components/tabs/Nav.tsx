import Tab from './Tab'
import tablist from './tablist'
import styles from './nav.module.css'
import LogoWrapper from './LogoWrapper'

const Nav = () => {
  return (
    <div className={styles.main}>
      <LogoWrapper>
        <h1>Logo</h1>
      </LogoWrapper>
      <nav>
        {tablist.map((tab) => {
          return <Tab key={tab.id} {...tab} />
        })}
      </nav>
    </div>
  )
}
export default Nav

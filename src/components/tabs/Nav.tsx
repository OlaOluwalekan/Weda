import Tab from './Tab'
import tablist from './tablist'
import styles from './nav.module.css'
import Logo from './Logo'

const Nav = () => {
  return (
    <div className={styles.main}>
      <Logo isVisible={false} />
      <nav>
        {tablist.map((tab) => {
          return <Tab key={tab.id} {...tab} />
        })}
      </nav>
    </div>
  )
}
export default Nav

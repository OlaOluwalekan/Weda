import LogoWrapper from './LogoWrapper'
import LogoImage from '/weda.png'

const Logo = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <LogoWrapper $isVisible={isVisible}>
      <article>
        <img src={LogoImage} alt='Logo' />
      </article>
      <h1>Weda</h1>
    </LogoWrapper>
  )
}
export default Logo

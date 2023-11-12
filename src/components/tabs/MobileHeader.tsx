import styled from 'styled-components'
import Logo from './Logo'
import Search from '../dashboard/Search'
import UserNav from '../dashboard/UserNav'

const ThisWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--primaryColor);
  display: flex;
  justify-content: center;

  .mobile-wrapper-div {
    width: 90%;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media screen and (min-width: 700px) {
    display: none;
  }

  @media screen and (max-width: 600px) {
    .mobile-wrapper-div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      place-items: center;
      gap: 0 30px;
      padding: 10px 0;
    }
  }
`

const MobileHeader = () => {
  return (
    <ThisWrapper>
      <div className='mobile-wrapper-div'>
        <Logo isVisible={true} />
        <Search isVisible={true} />
        <UserNav isVisible={true} />
      </div>
    </ThisWrapper>
  )
}
export default MobileHeader

import styled from 'styled-components'
import { FaBell, FaChevronDown, FaUserCircle } from 'react-icons/fa'

interface userNavProps {
  $isVisible: boolean
}

const UserNavWrapper = styled.div<userNavProps>`
  display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
  align-items: center;
  /* background-color: white; */
  border: 1px solid var(--aliceBlue);
  padding: 5px;
  border-radius: 10px;
  width: 70px;
  overflow-x: hidden;
  transition: all 200ms ease;

  &:hover {
    width: 180px;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: yellow; */
    margin: 0 2px;
    color: var(--grey);
  }

  span:nth-of-type(2) {
    height: 20px;
    width: 1px;
    background-color: var(--aliceBlue);
    margin: 0 5px;
  }

  span:nth-of-type(3) {
    font-size: 25px;
  }

  p {
    margin: 0 5px;
    color: var(--grey);
  }

  span:nth-of-type(4) {
    font-size: 12px;
  }

  @media screen and (min-width: 700px) {
    display: flex;
  }
`

const UserNav = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <UserNavWrapper $isVisible={isVisible}>
      <span>
        <FaBell />
      </span>
      <span></span>
      <span>
        <FaUserCircle />
      </span>
      <p>Username</p>
      <span>
        <FaChevronDown />
      </span>
    </UserNavWrapper>
  )
}
export default UserNav

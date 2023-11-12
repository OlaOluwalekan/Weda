import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TabWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  transition: all 200ms ease;
  padding: 10px;
  font-size: 12px;
  &:hover {
    color: var(--primaryColor);
    background-color: white;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: flex-start;
    line-height: 30px;
    font-size: 16px;
    padding-left: 20px;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      /* background-color: red; */
    }
  }

  @media screen and (min-width: 900px) {
    line-height: 35px;
    font-size: 18px;
  }
`

export default TabWrapper

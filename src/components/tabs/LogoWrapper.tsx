import styled from 'styled-components'

interface LogoWrapperProps {
  $isVisible: boolean
}

const LogoWrapper = styled.section<LogoWrapperProps>`
  display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  /* padding-left: 20px; */
  h1 {
    color: white;
    line-height: 60px;
    margin-left: 10px;
    font-family: Agbalumo;
    /* font-size: 30px; */
  }
  article > img {
    width: 40px;
  }
  @media screen and (min-width: 700px) {
    display: flex;
    border-bottom: 1px solid #080853;

    h1 {
      font-size: 30px;
      line-height: 80px;
    }

    article > img {
      width: 50px;
    }
  }

  @media screen and (max-width: 600px) {
    /* div */
    /* background-color: red; */
    /* flex-basis: 1; */
    grid-column: 1/4;
  }
`
export default LogoWrapper

import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'

interface searchProps {
  $isVisible: boolean
}

const SearchWrapper = styled.div<searchProps>`
  display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
  align-items: center;
  flex-grow: 1;
  gap: 10px;

  span {
    background-color: var(--aliceBlue);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 10px;
    color: var(--primaryColor);
  }
  input {
    font-size: 17px;
    padding: 5px 10px;
    background: none;
    border: none;
    border-bottom: 1px solid blue;
    color: white;
    width: 100%;
  }
  input:focus {
    outline: none;
  }

  @media screen and (min-width: 700px) {
    display: flex;

    input {
      color: black;
      border-bottom: 1px solid aliceblue;
    }
  }

  @media screen and (max-width: 600px) {
    grid-column: 1/3;
  }
`

const Search = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <SearchWrapper $isVisible={isVisible}>
      <span>
        <FaSearch />
      </span>
      <input type='text' placeholder='search' />
    </SearchWrapper>
  )
}
export default Search

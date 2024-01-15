import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrentData } from '../../features/weatherSlice'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import store from '../../store'

interface searchProps {
  $isVisible: boolean
}

const SearchWrapper = styled.form<searchProps>`
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

// Define the RootState type
type RootState = ReturnType<typeof store.getState>

// Define the type for the thunk action
// type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

// Define the type for the dispatch function
type AppDispatch = ThunkDispatch<RootState, void, AnyAction>

const Search = ({ isVisible }: { isVisible: boolean }) => {
  const [searchValue, setSearchValue] = useState('')
  const dispatch: AppDispatch = useDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(getCurrentData(searchValue || '53.1,-0.13'))
    console.log(searchValue)
  }

  return (
    <SearchWrapper $isVisible={isVisible} onSubmit={handleSubmit}>
      <span>
        <FaSearch />
      </span>
      <input
        type='text'
        placeholder='search'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </SearchWrapper>
  )
}
export default Search

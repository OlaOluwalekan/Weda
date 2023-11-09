import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SharedLayout from './pages/SharedLayout'
import Home from './pages/Home'
// import Statistics from './pages/Statistics'
// import Map from './pages/Map'
// import Settings from './pages/Settings'
// import Calender from './pages/Calender'
// import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/account' element={<SharedLayout />} />
        {/* <Route index element={<Dashboard />} />
          <Route path='statistics' element={<Statistics />} />
          <Route path='map' element={<Map />} />
          <Route path='calender' element={<Calender />} />
          <Route path='settings' element={<Settings />} />
          <Route
            path='*'
            element={
              <div>
                <h1>Error</h1>
              </div>
            }
          /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

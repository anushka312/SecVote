import { Route, Routes } from 'react-router-dom'
import './App.css'
import Error from './pages/Error.jsx'
import Landing from './components/landing/Landing.jsx'
import Login from './pages/Login.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { checkAuth } from './store/slices/authSlice.js'
import { Toaster } from './components/ui/toaster.jsx'

import ComponentTest from './pages/ComponentTest.jsx'
import CheckAuth from './pages/auth/CheckAuth.jsx'
import AuthLayout from './pages/layout/AuthLayout.jsx'
import UserLayout from './pages/layout/UserLayout.jsx'
import Loading from './components/common/Loading.jsx'
import Help from "./components/help/Help.jsx";
import Search from "./components/searchPage/Search.jsx";
import Profile from "./components/profilePage/Profile.jsx";
import PollingStation from './pages/PollingStation.jsx'
import SlotBooking from './pages/SlotBooking'
import Requests from './components/requests/Requests'
import UserStatus from './pages/UserStatus.jsx'
import UserStatusAdmin from './pages/protected/UserStatusAdmin.jsx'
import UserSearch from './pages/UserSearch.jsx'

function App() {

  return (
    <div>
      <Toaster />
      {/* <Routes>
        <Route path='' element={<Landing />} />
        <Route path='profile' element={<Profile />} />
        <Route path='search' element={<Search />} />
        <Route path='station/:id' element={<PollingStation />} />
        <Route path='slot' element={<SlotBooking />} />
        <Route path='request' element={<Requests />} />
        <Route path='help' element={<Help />} />
        <Route path='/test' element={<ComponentTest />} />
        <Route path='*' element={<Error />} />
      </Routes> */}

      <Routes>
        <Route
          path='/'
          element={<UserLayout />}
        >
          <Route path='' element={<Landing />} />
          <Route path='user-status/:id' element={<UserStatusAdmin />} />
          <Route path='profile/:id' element={<Profile />} />
          <Route path='search' element={<UserSearch />} />
          <Route path='station/:id' element={<PollingStation />} />
          <Route path='slot' element={<SlotBooking />} />
          <Route path='request' element={<Requests />} />
          <Route path='help' element={<Help />} />
        </Route>
        <Route path='/test' element={<ComponentTest />} />
      </Routes>
    </div>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Error from './pages/Error.jsx'
import Home from './pages/protected/Home.jsx'
import Login from './pages/Login.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { checkAuth } from './store/slices/authSlice.js'
import { Toaster } from './components/ui/toaster.jsx'
import Search from './pages/protected/Search.jsx'

import ComponentTest from './pages/ComponentTest.jsx'
import CheckAuth from './pages/auth/CheckAuth.jsx'
import AuthLayout from './pages/layout/AuthLayout.jsx'
import UserLayout from './pages/layout/UserLayout.jsx'
import Loading from './components/common/Loading.jsx'
import Help from "./components/help/Help.jsx";
import Requests from './components/requests/Requests'

function App() {
  const {isAuthLoading} = useSelector(state => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch])

  if(isAuthLoading){
    console.log(isAuthLoading);
    
    return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <Loading />
      </div>
    )
  }

  return (
    <div>
      <Toaster />
      <Routes>

        <Route 
          path='/auth' 
          element={
            <CheckAuth>
              <AuthLayout />
            </CheckAuth>}
        >
          <Route path='login' element={<Login />}/>
        </Route>

        <Route
            path='/' 
            element={
                <CheckAuth>
                  <UserLayout />
                </CheckAuth>} 
        >
          <Route path='home' element={<Home />} />
          <Route path='search' element={<Search />} />
        </Route>
        <Route path='/test' element={<ComponentTest />}/>
        <Route path='help' element={<Help />} />
        <Route path='*' element={<Error />} />
        <Route path='request' element={<Requests />} />
      </Routes>
    </div>
  )
}

export default App

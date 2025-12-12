import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import SuccessTransfer from './pages/SuccessTransfer'
import Home from './pages/Home'
import EditUser from './pages/EditUser'
import Changepassword from './pages/Changepassword'
import ChangeAvatar from './pages/ChangeAvatar'
import { RecoilRoot } from 'recoil'

export default function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/send' element={<SendMoney />}></Route>
            <Route path='/successtransfer' element={<SuccessTransfer />}></Route>
            <Route path='/edituser' element={<EditUser />} ></Route>
            <Route path='/changepassword' element={<Changepassword />} ></Route>
            <Route path='/editavatar' element={<ChangeAvatar />} ></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>

    </>
  )
}

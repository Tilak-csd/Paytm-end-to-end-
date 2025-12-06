import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import SuccessTransfer from './pages/SuccessTransfer'
import { RecoilRoot } from 'recoil'

export default function App() {
  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/signin' element={<Signin />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/send' element={<SendMoney />}></Route>
            <Route path='/successtransfer' element={<SuccessTransfer />}></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>

    </>
  )
}

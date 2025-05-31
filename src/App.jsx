import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import RouteLayout from './Layouts/RootLayout/RootLayout'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import ICode from './pages/ICode/ICode'
import IDesgin from './pages/IDesign/IDesign'
import IManage from './pages/IManage/IManage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<RouteLayout />}>
        <Route index element= {<Home />} />
        <Route path='/Portfolio' element= {<Portfolio />}/>
        <Route path='/Contact' element= {<Contact />} />
        <Route path='/I_Code' element= {< ICode/>} />
        <Route path='/I_Design' element={<IDesgin />} />
        <Route path='/I_Manage' element={<IManage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App

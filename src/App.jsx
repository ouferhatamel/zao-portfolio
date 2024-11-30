import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import RouteLayout from './Layouts/RootLayout/RootLayout'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<RouteLayout />}>
        <Route index element= {<Home />} />
        <Route path='/Portfolio' element= {<Portfolio />}/>
        <Route path='/Contact' element= {<Contact />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App

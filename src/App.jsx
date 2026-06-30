// import Body from "./layouts/body.jsx"
// import Body2 from "./layouts/body2.jsx"
// import Body3 from "./layouts/body3.jsx"
// import Body4 from "./layouts/body4.jsx"
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurApproach from './pages/OurApproach'
import Services from './pages/Services'
import Technology from './pages/Technology'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home />}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='approach' element={<OurApproach/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='technology' element={<Technology/>}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

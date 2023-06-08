import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Portfolio from './Portfolio/Portfolio'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route
          path='/portfolio'
          element={
            <Portfolio
              contactNumber='7983645245'
              email='singhvivek00097@gmail.com'
            />
          }
        />
      </Route>
    )
  )

  return (
    <div className='app-container'>
      <RouterProvider router={router} />
      {/* <Portfolio contactNumber='7983645245' email='singhvivek00097@gmail.com' /> */}
    </div>
  )
}
export default App

const Root = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

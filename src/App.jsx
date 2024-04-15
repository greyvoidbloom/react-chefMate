import './App.css'
import { Route,Routes } from 'react-router'
import LandingPage from './pages/LandingPage/LandingPage'
import MealDetails from './pages/MealDetails/MealDetails'
import NoPage from './pages/NoPage/NoPage'
import SignUp from './pages/UserAuth/SignUp'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/meal/:id' element={<MealDetails/>}/>
      <Route path='/usr/signup' element={<SignUp/>}/>
      <Route path='*' element={<NoPage/>}/>
    </Routes>
    </>
  )
}

export default App

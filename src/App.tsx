
import './App.css'
import Dashboard from './components/dashboard'
import SignUpPage from './components/signuppage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={ <SignUpPage/>}/>
        <Route path='/dashboard' element={ <Dashboard/>}/>
      </Routes>
    </BrowserRouter>      
    </>
  )
}

export default App

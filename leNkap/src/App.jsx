import { Route,Routes } from 'react-router';
// screens
import SplashScreen from './Screens/splashScreen';
import CreateAccountScreen from './Screens/createAccountScreen';
import ExpesensesScreen from './Screens/expensesScreen';
//components
import NavBar from './componets/navBar';

function App() {
 

  return (
    <>
    <NavBar/>
    <Routes>
     <Route path='/' element={<SplashScreen/>}></Route>
     <Route path='/CreateAccountScreen' element={<CreateAccountScreen/>}></Route>
     <Route path='/ExpensesScreen' element={<ExpesensesScreen/>}/>
    </Routes>
    </>
  )
}

export default App

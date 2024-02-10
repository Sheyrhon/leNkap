import { Route,Routes } from 'react-router';
// screens
import SplashScreen from './Screens/splashScreen';
import CreateAccountScreen from './Screens/createAccountScreen';
import ExpesensesScreen from './Screens/expensesScreen';
//components
import NavBar from './componets/navBar';
import Index from './Routes';
import LoginForm from './componets/Login/LoginForm';
import './index.css'
import Register from './componets/Register/Register';

function App() {
 

  return (
    <>
      {/* <LoginForm/> */}
      <Register/>

    </>
  )
}

export default App

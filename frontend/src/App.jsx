import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import User from './components/user';
import Profile from './components/user/Profile';
import { AppProvider } from './context/AppContext';
import Signup from './components/main/Signup';
import BrowerPlugin from './components/main/BrowerPlugin';
import Contact from './components/main/Contact';
import Plugins from './components/plugins';
import ManageProduct from './components/plugins/ManageProduct';
import PaymentWay from './components/user/paymentway';
import Addproduct from './components/user/Addproduct';
import Viewproduct from './components/user/Viewproduct';
import ProductBrowser from './components/user/productBrowser';


function App() {

  return (
    <>
      <BrowserRouter>
      <AppProvider>
        <Routes>
            <Route path='main' element={<Main />} >
              <Route path='home' element={<Home />} /> 
              <Route path='login' element={<Login />} /> 
              <Route path='signup' element={<Signup />} /> 
              <Route path='contact' element={<Contact />} /> 
              <Route path='browseplugin' element={<BrowerPlugin />} />
               

            </Route>

            <Route path='user' element={<User />} >
              <Route path='profile' element={<Profile />} />
              <Route path='payment' element={<PaymentWay />} />
              <Route path='addproduct' element={<Addproduct />} />
              <Route path='viewproduct' element={<Viewproduct />} />
              <Route path='Productbrower' element={<ProductBrowser />} />

            </Route>
            
            <Route path='plugins' element={<Plugins />} >
              <Route path='manageproduct' element={<ManageProduct />} />
            </Route>
            
        </Routes>
        </AppProvider>
      </BrowserRouter>
    </>
  )
}

export default App

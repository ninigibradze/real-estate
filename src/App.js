import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import ProtectedRoute from './components/PrivateRoute';
import LoginModal from './components/LoginModal';

const initialUser = {
  isSignedIn: false,
  name: '',
}

const staticPass = '123';
const staticName = 'user';

const App = () => {
  const [user, setUser] = useState(initialUser);
  const [logIn, setLogIn] = useState({name: '', password: ''});
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if(loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser);
    }
  }, [])

  const handleLogin = () => {
    const {name, password} = logIn;

    if(password === staticPass && name === staticName) {
      localStorage.setItem("user", JSON.stringify({...logIn, isSignedIn: true}));
      setShowLoginModal(false);
      setUser({isSignedIn: true, name});
    } else {
      alert('Incorrect name or password')
    }
  }

  return ( 
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header user={user} setUser={setUser} setShowLoginModal={setShowLoginModal} />
      {showLoginModal && (<LoginModal setLogIn={setLogIn} onLogin={handleLogin} onCloseModal={setShowLoginModal}  />)}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoute user={user} />}> 
          <Route path='/property/:id' element={<PropertyDetails />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
};

export default App;

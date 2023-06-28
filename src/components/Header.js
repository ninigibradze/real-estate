import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './../assets/img/logo.svg';

const Header = ({user, setUser, setShowLoginModal}) => {
  const handleShowSignIn = () => {
    setShowLoginModal(true);
    // localStorage.setItem("user", JSON.stringify({isSignedIn: true, name: 'nini'}))
    // setUser({isSignedIn: true, name: 'nini'})

  }

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser({isSignedIn : false, name: ""});
  }

  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex 
      justify-between items-center'>
        <Link to='/real-estate'>
          <img src={Logo} alt='logo' />
        </Link>
        <div className='flex items-center gap-4'>
        {user.isSignedIn ? (
          <button className='bg-violet-700 hover:bg-violet-800
          text-white px-4 py-3 rounded-lg transition' onClick={handleLogOut}>
            Sign out
          </button>
           ):(          
          <button className='hover:text-violet-900 
          transition' onClick={handleShowSignIn}>
            Log in
          </button>
          )}
          
          
        </div>
      </div>
    </header>
  )
};

export default Header;

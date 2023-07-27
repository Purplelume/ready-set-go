import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/">
          <h1>Ready <span>Set</span> Go</h1>
        </Link>
        <p>Get started with your project</p>
        <div className="navbar-text">
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-primary m-1" to="/me">
                My Profile
              </Link>
              <Link className="btn btn-primary m-1" to="/createproject">
                Create a new Project
              </Link>
              <Link className="btn btn-light m-1" onClick={logout}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link className="btn btn-primary m-1" to="/login">
                Login
              </Link>
              <Link className="btn btn-light m-1" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

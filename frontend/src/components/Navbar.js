import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isAuthenticated = localStorage.getItem('token');

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Cadastrar</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <Link to="/profile">Perfil</Link> {}
            </li>
            <li>
              <button onClick={() => {
                localStorage.removeItem('token'); 
                window.location.href = '/login'; 
              }}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

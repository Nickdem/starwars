import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {

  if (isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div style={{textAlign: 'center'}}>
      <p style={{fontSize: '32px'}}>Login to see secret page!</p>
      <button style={{padding: '.5rem', fontSize: '24px', color: '#000', background: '#5eff00'}} onClick={onLogin}>Login</button>
    </div>
  )
}

export default LoginPage;
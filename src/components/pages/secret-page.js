import React from 'react';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div style={{textAlign: 'center'}}>
        <h3 style={{fontSize: '32px'}}>This is page is full of secrets!!!</h3>
      </div>
    )
  }

  return <Redirect to="/login" />
}

export default SecretPage;
// Code PasswordInput Component Here

import React from 'react';

function PasswordInput() {
  const handleChange = (event) => {
    console.log("Entering password…");
  };

  return (
    <input 
      type="password" 
      onChange={handleChange} 
      placeholder="Enter your password"
    />
  );
}

export default PasswordInput;

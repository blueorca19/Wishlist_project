import React, { useState } from 'react';
import './AuthForm.css'; 


const AuthForm: React.FC = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    
    
    try {
      const response = await fetch('https://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      
      const data = await response.json();
      console.log('Successful authorization:', data);

     
      if (data.success) { 
        window.location.href = '/dashboard';
      } else {
        setError('Authorization failed. Please try again.');
        console.error('Authorization failed:', data.message); 
      }
    } catch (error) {
      setError('Error during authorization. Please check the entered data.');
      console.error('Error sending data:', error);
    }
  };

  
  return (
    <div className="auth-container">
     
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
     
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default AuthForm;

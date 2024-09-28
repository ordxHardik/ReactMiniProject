import { useState } from 'react'

import './App.css'

return (
  <div style={styles.card}>
    <div style={styles.header}>Hardik Jain</div>
    <div style={styles.subHeader}>Front End Developer</div>
    <div style={styles.reactLogo}>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
        alt="React Logo" 
        style={{ width: '50px', height: '50px' }}
      />
    </div>
    <p style={styles.description}>
      Specializing in building modern web interfaces with React!
    </p>
  </div>
);


const styles = {
card: {
  fontFamily: 'Arial, sans-serif',
  border: '2px solid #007acc',
  borderRadius: '10px',
  padding: '20px',
  maxWidth: '400px',
  textAlign: 'center',
  background: 'linear-gradient(120deg, #f0f4f8, #d9e6f2)',
  margin: 'auto',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
},
header: {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#007acc',
  marginBottom: '10px'
},
subHeader: {
  fontSize: '18px',
  fontWeight: 'normal',
  color: '#555',
  marginBottom: '15px'
},
reactLogo: {
  margin: '10px 0'
},
description: {
  fontSize: '16px',
  color: '#333',
}
};

// export default GreetingCard;

export default App

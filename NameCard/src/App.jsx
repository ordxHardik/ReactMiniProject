import { useState } from 'react';
import './App.css';

function App() {

  const styles = {
    card: {
      fontFamily: 'Arial, sans-serif',
      border: '2px solid #007acc',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '400px',
      maxHeight: '20cm', // Max height of 20 cm added
      textAlign: 'center',
      background: 'linear-gradient(120deg, #f0f4f8, #d9e6f2)',
      margin: 'auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#007acc',
      marginBottom: '10px',
    },
    subHeader: {
      fontSize: '18px',
      fontWeight: 'normal',
      color: '#555',
      marginBottom: '15px',
    },
    reactLogo: {
      margin: '10px 0',
    },
    description: {
      fontSize: '16px',
      color: '#333',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '20px',
    },
    button: {
      fontSize: '16px',
      padding: '10px 20px',
      color: '#fff',
      backgroundColor: '#007acc',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease', // Transition for hover effect
    },
    buttonHover: {
      backgroundColor: '#005999', // Darker color on hover
    },
  };

  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);

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

      <div style={styles.buttonContainer}>
        {/* LinkedIn Button */}
        <button
          style={{
            ...styles.button,
            ...(isLinkedInHovered ? styles.buttonHover : null),
          }}
          onMouseEnter={() => setIsLinkedInHovered(true)}
          onMouseLeave={() => setIsLinkedInHovered(false)}
          onClick={() => window.open('https://www.linkedin.com/in/hardikjain05/', '_blank')}
        >
          LinkedIn
        </button>

        {/* GitHub Button */}
        <button
          style={{
            ...styles.button,
            ...(isGitHubHovered ? styles.buttonHover : null),
          }}
          onMouseEnter={() => setIsGitHubHovered(true)}
          onMouseLeave={() => setIsGitHubHovered(false)}
          onClick={() => window.open('https://github.com/ordxHardik', '_blank')}
        >
          GitHub
        </button>
      </div>
    </div>
  );
}

export default App;

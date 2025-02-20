import React from "react"
const SignIn = () => {
  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>Hotel Management System</h2>
        <p style={styles.subHeading}>Please sign in to continue</p>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.submitButton}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'rgba(0, 0, 0, 0.1)', // Transparent dark background
    padding: '20px',
  },
  formWrapper: {
    backgroundColor: 'white', // White background for the form
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
    width: '380px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)', // Optional: Blur the background a little to give a frosted effect
  },
  heading: {
    fontSize: '30px',
    fontWeight: '700',
    color: '#333', // Dark grey for the heading
    marginBottom: '15px',
    letterSpacing: '1px',
  },
  subHeading: {
    fontSize: '16px',
    color: '#555', // Lighter grey for subheading
    marginBottom: '30px',
    fontWeight: '400',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left',
    position: 'relative',
  },
  label: {
    fontSize: '14px',
    color: '#555', // Grey color for labels
    marginBottom: '8px',
    fontWeight: '500',
  },
  input: {
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd', // Light grey border for inputs
    outline: 'none',
    width: '100%',
    backgroundColor: 'transparent', // Transparent background for the input fields
    color: '#333', // Dark text color for inputs
    transition: 'border-color 0.3s, box-shadow 0.3s ease',
  },
  inputFocus: {
    borderColor: '#007bff', // Blue border on focus
    boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)',
  },
  submitButton: {
    padding: '14px',
    fontSize: '18px',
    backgroundColor: '#333', // Black button color
    color: '#fff', // White text on the button
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease-in-out',
    marginTop: '20px',
  },
  submitButtonHover: {
    backgroundColor: '#555', // Dark grey on hover
    transform: 'scale(1.05)',
  },
};

export default SignIn;
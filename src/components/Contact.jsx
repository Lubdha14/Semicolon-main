import React from 'react';

const Contact = () => {
  const handleEmail = () => {
    window.location.href = 'mailto:contact@example.com';
  };

  const handlePhone = () => {
    window.location.href = 'tel:+1234567890';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    // For example, send form data to backend or display a thank you message
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us using the following methods:</p>
      <button style={styles.button} onClick={handleEmail}>
        Email Us
      </button>
      <button style={styles.button} onClick={handlePhone}>
        Call Us
      </button>
      <h2>Or</h2>
      <p>Fill out the form below:</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    margin: '10px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
  },
  input: {
    width: '300px',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    width: '300px',
    height: '150px',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
};

export default Contact;
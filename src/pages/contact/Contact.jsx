import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic would go here
    // For now, we can just log the data
    const formData = new FormData(event.target);
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });
    alert('Thank you for your message! (Form data logged to console)');
    event.target.reset();
  };

  return (
    <div className={`${styles.contactContainer} animate__animated animate__zoomIn`} style={{ '--animate-duration': '2.5s' }}>
      <h1 className={styles.title}>Contact Me</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            required
          >
          </textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
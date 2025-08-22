// import React, { useRef, useEffect, useState } from 'react';

// const Contact = () => {
//   const contactRef = useRef(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [formStatus, setFormStatus] = useState(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('animate-in');
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (contactRef.current) {
//       observer.observe(contactRef.current);
//     }

//     return () => {
//       if (contactRef.current) {
//         observer.unobserve(contactRef.current);
//       }
//     };
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormStatus('sending');
    
//     // Simulate form submission
//     setTimeout(() => {
//       setFormStatus('success');
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//       });
      
//       // Reset status after 5 seconds
//       setTimeout(() => {
//         setFormStatus(null);
//       }, 5000);
//     }, 1500);
//   };

//   const customStyles = `
//     .contact-section {
//       background-color: #111827;
//       min-height: 100vh;
//       color: #ffffff;
//       padding: 4rem 1rem;
//     }
    
//     .section-container {
//       max-width: 1200px;
//       margin: 0 auto;
//       opacity: 0;
//       transform: translateY(50px);
//       transition: all 0.8s ease;
//     }
    
//     .section-container.animate-in {
//       opacity: 1;
//       transform: translateY(0);
//     }
    
//     .section-title {
//       font-size: 2.5rem;
//       margin-bottom: 3rem;
//       position: relative;
//       display: inline-block;
//       color: #ffffff;
//       font-weight: bold;
//       text-align: center;
//       width: 100%;
//     }
    
//     .section-title:after {
//       content: '';
//       position: absolute;
//       bottom: -10px;
//       left: 50%;
//       transform: translateX(-50%);
//       width: 60px;
//       height: 4px;
//       background: linear-gradient(45deg, #60a5fa, #8c9eff);
//     }
    
//     .contact-content {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       gap: 3rem;
//     }
    
//     .contact-info {
//       padding-right: 2rem;
//     }
    
//     .contact-info h3 {
//       font-size: 1.8rem;
//       margin-bottom: 1.5rem;
//       color: #60a5fa;
//       font-weight: 600;
//     }
    
//     .contact-info p {
//       margin-bottom: 2rem;
//       line-height: 1.8;
//       color: #d1d5db;
//       font-size: 1rem;
//     }
    
//     .contact-details {
//       display: flex;
//       flex-direction: column;
//       gap: 1.5rem;
//       margin-bottom: 2rem;
//     }
    
//     .contact-item {
//       display: flex;
//       gap: 1.5rem;
//       align-items: center;
//       padding: 1rem;
//       background: rgba(31, 41, 55, 0.5);
//       border-radius: 10px;
//       border: 1px solid #374151;
//       transition: all 0.3s ease;
//     }
    
//     .contact-item:hover {
//       background: rgba(31, 41, 55, 0.8);
//       border-color: rgba(96, 165, 250, 0.3);
//       transform: translateX(5px);
//     }
    
//     .contact-icon {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       width: 50px;
//       height: 50px;
//       border-radius: 50%;
//       background: linear-gradient(45deg, #60a5fa, #8c9eff);
//       font-size: 1.5rem;
//       flex-shrink: 0;
//     }
    
//     .contact-text h4 {
//       font-size: 1.1rem;
//       margin-bottom: 0.5rem;
//       color: #ffffff;
//       font-weight: 600;
//     }
    
//     .contact-text p {
//       font-size: 0.9rem;
//       margin-bottom: 0;
//       color: #d1d5db;
//     }
    
//     .social-links {
//       display: flex;
//       gap: 1rem;
//       flex-wrap: wrap;
//     }
    
//     .social-link {
//       padding: 0.75rem 1.5rem;
//       background: rgba(31, 41, 55, 0.8);
//       color: #ffffff;
//       border-radius: 8px;
//       text-decoration: none;
//       border: 1px solid #374151;
//       font-weight: 500;
//       transition: all 0.3s ease;
//     }
    
//     .social-link:hover {
//       background: linear-gradient(45deg, #60a5fa, #8c9eff);
//       color: #ffffff;
//       transform: translateY(-2px);
//       box-shadow: 0 4px 12px rgba(96, 165, 250, 0.3);
//     }
    
//     .contact-form-container {
//       background: rgba(31, 41, 55, 0.8);
//       padding: 2rem;
//       border-radius: 10px;
//       border: 1px solid #374151;
//       box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
//     }
    
//     .contact-form {
//       width: 100%;
//     }
    
//     .form-group {
//       margin-bottom: 1.5rem;
//     }
    
//     .form-group label {
//       display: block;
//       margin-bottom: 0.5rem;
//       font-weight: 500;
//       color: #ffffff;
//       font-size: 0.9rem;
//     }
    
//     .form-group input,
//     .form-group textarea {
//       width: 100%;
//       padding: 1rem;
//       background: rgba(17, 24, 39, 0.8);
//       border: 1px solid #374151;
//       border-radius: 8px;
//       color: #ffffff;
//       font-family: inherit;
//       font-size: 0.9rem;
//       transition: all 0.3s ease;
//       box-sizing: border-box;
//     }
    
//     .form-group input::placeholder,
//     .form-group textarea::placeholder {
//       color: #9ca3af;
//     }
    
//     .form-group input:focus,
//     .form-group textarea:focus {
//       outline: none;
//       border-color: #60a5fa;
//       background: rgba(17, 24, 39, 1);
//       box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
//     }
    
//     .form-group textarea {
//       resize: vertical;
//       min-height: 120px;
//     }
    
//     .submit-button {
//       padding: 1rem 2rem;
//       background: linear-gradient(45deg, #60a5fa, #8c9eff);
//       color: #ffffff;
//       border: none;
//       border-radius: 8px;
//       font-weight: 500;
//       cursor: pointer;
//       transition: all 0.3s ease;
//       width: 100%;
//       font-size: 1rem;
//       font-family: inherit;
//     }
    
//     .submit-button:hover:not(:disabled) {
//       transform: translateY(-2px);
//       box-shadow: 0 8px 20px rgba(96, 165, 250, 0.4);
//     }
    
//     .submit-button:disabled,
//     .submit-button.sending {
//       background: #6b7280;
//       cursor: not-allowed;
//       transform: none;
//       box-shadow: none;
//     }
    
//     .submit-button.success {
//       background: #10b981;
//       transform: none;
//     }
    
//     .submit-button.success:hover {
//       background: #059669;
//     }
    
//     @media screen and (max-width: 1024px) {
//       .contact-content {
//         grid-template-columns: 1fr;
//         gap: 2rem;
//       }
      
//       .contact-info {
//         padding-right: 0;
//       }
//     }
    
//     @media screen and (max-width: 768px) {
//       .contact-section {
//         padding: 2rem 1rem;
//       }
      
//       .section-title {
//         font-size: 2rem;
//       }
      
//       .contact-info h3 {
//         font-size: 1.5rem;
//       }
      
//       .contact-content {
//         gap: 1.5rem;
//       }
      
//       .contact-form-container {
//         padding: 1.5rem;
//       }
//     }
    
//     @media screen and (max-width: 480px) {
//       .contact-item {
//         flex-direction: column;
//         text-align: center;
//         padding: 1.5rem;
//       }
      
//       .contact-icon {
//         align-self: center;
//       }
      
//       .social-links {
//         justify-content: center;
//       }
      
//       .social-link {
//         flex: 1;
//         text-align: center;
//         min-width: 120px;
//       }
//     }
//   `;

//   return (
//     <>
//       <style>{customStyles}</style>
//       <div className="contact-section">
//         <div className="section-container" ref={contactRef}>
//           <h2 className="section-title">Contact Me</h2>
          
//           <div className="contact-content">
//             <div className="contact-info">
//               <h3>Get In Touch</h3>
//               <p>
//                 I'm currently available for freelance work and full-time positions.
//                 If you have a project that you want to get started or have any questions,
//                 feel free to reach out. I'll do my best to get back to you as soon as possible.
//               </p>
              
//               <div className="contact-details">
//                 <div className="contact-item">
//                   <div className="contact-icon">📧</div>
//                   <div className="contact-text">
//                     <h4>Email</h4>
//                     <p>sanatan.bramhane@outlook.com</p>
//                   </div>
//                 </div>
                
//                 <div className="contact-item">
//                   <div className="contact-icon">📱</div>
//                   <div className="contact-text">
//                     <h4>Phone</h4>
//                     <p>+919028804850</p>
//                   </div>
//                 </div>
                
//                 <div className="contact-item">
//                   <div className="contact-icon">📍</div>
//                   <div className="contact-text">
//                     <h4>Location</h4>
//                     <p>Pune, Maharashtra</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="social-links">
//                 <a href="https://github.com/Sanatan07" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
//                 <a href="https://linkedin.com/in/sanatanbramhane" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
//               </div>
//             </div>
            
//             <div className="contact-form-container">
//               <div className="contact-form">
//                 <div className="form-group">
//                   <label htmlFor="name">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your Name"
//                     required
//                   />
//                 </div>
                
//                 <div className="form-group">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Your Email"
//                     required
//                   />
//                 </div>
                
//                 <div className="form-group">
//                   <label htmlFor="subject">Subject</label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     placeholder="Subject"
//                     required
//                   />
//                 </div>
                
//                 <div className="form-group">
//                   <label htmlFor="message">Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Your Message"
//                     rows="5"
//                     required
//                   ></textarea>
//                 </div>
                
//                 <button 
//                   type="submit" 
//                   className={`submit-button ${formStatus ? formStatus : ''}`}
//                   disabled={formStatus === 'sending'}
//                   onClick={handleSubmit}
//                 >
//                   {formStatus === 'sending' ? 'Sending...' : 
//                    formStatus === 'success' ? 'Message Sent!' : 
//                    'Send Message'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  // Initialize EmailJS (you'll need to replace with your actual keys)
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        'service_14a4nkk',    // Replace with your EmailJS service ID
        'template_0swe4wa',   // Replace with your EmailJS template ID
        formRef.current,
        '5W2Ci2Qfg6YLV7VYB'     // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result.text);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }
  };

  const customStyles = `
    .contact-section {
      background-color: #111827;
      min-height: 100vh;
      color: #ffffff;
      padding: 4rem 1rem;
    }
    
    .section-container {
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease;
    }
    
    .section-container.animate-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .section-title {
      font-size: 2.5rem;
      margin-bottom: 3rem;
      position: relative;
      display: inline-block;
      color: #ffffff;
      font-weight: bold;
      text-align: center;
      width: 100%;
    }
    
    .section-title:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(45deg, #60a5fa, #8c9eff);
    }
    
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    
    .contact-info {
      padding-right: 2rem;
    }
    
    .contact-info h3 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      color: #60a5fa;
      font-weight: 600;
    }
    
    .contact-info p {
      margin-bottom: 2rem;
      line-height: 1.8;
      color: #d1d5db;
      font-size: 1rem;
    }
    
    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .contact-item {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      padding: 1rem;
      background: rgba(31, 41, 55, 0.5);
      border-radius: 10px;
      border: 1px solid #374151;
      transition: all 0.3s ease;
    }
    
    .contact-item:hover {
      background: rgba(31, 41, 55, 0.8);
      border-color: rgba(96, 165, 250, 0.3);
      transform: translateX(5px);
    }
    
    .contact-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(45deg, #60a5fa, #8c9eff);
      font-size: 1.5rem;
      flex-shrink: 0;
    }
    
    .contact-text h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #ffffff;
      font-weight: 600;
    }
    
    .contact-text p {
      font-size: 0.9rem;
      margin-bottom: 0;
      color: #d1d5db;
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .social-link {
      padding: 0.75rem 1.5rem;
      background: rgba(31, 41, 55, 0.8);
      color: #ffffff;
      border-radius: 8px;
      text-decoration: none;
      border: 1px solid #374151;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background: linear-gradient(45deg, #60a5fa, #8c9eff);
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(96, 165, 250, 0.3);
    }
    
    .contact-form-container {
      background: rgba(31, 41, 55, 0.8);
      padding: 2rem;
      border-radius: 10px;
      border: 1px solid #374151;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }
    
    .contact-form {
      width: 100%;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #ffffff;
      font-size: 0.9rem;
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 1rem;
      background: rgba(17, 24, 39, 0.8);
      border: 1px solid #374151;
      border-radius: 8px;
      color: #ffffff;
      font-family: inherit;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }
    
    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: #9ca3af;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #60a5fa;
      background: rgba(17, 24, 39, 1);
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
    }
    
    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    .submit-button {
      padding: 1rem 2rem;
      background: linear-gradient(45deg, #60a5fa, #8c9eff);
      color: #ffffff;
      border: none;
      border-radius: 8px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      width: 100%;
      font-size: 1rem;
      font-family: inherit;
    }
    
    .submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(96, 165, 250, 0.4);
    }
    
    .submit-button:disabled,
    .submit-button.sending {
      background: #6b7280;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
    
    .submit-button.success {
      background: #10b981;
      transform: none;
    }
    
    .submit-button.success:hover {
      background: #059669;
    }
    
    .submit-button.error {
      background: #ef4444;
      transform: none;
    }
    
    .submit-button.error:hover {
      background: #dc2626;
    }
    
    @media screen and (max-width: 1024px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .contact-info {
        padding-right: 0;
      }
    }
    
    @media screen and (max-width: 768px) {
      .contact-section {
        padding: 2rem 1rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .contact-info h3 {
        font-size: 1.5rem;
      }
      
      .contact-content {
        gap: 1.5rem;
      }
      
      .contact-form-container {
        padding: 1.5rem;
      }
    }
    
    @media screen and (max-width: 480px) {
      .contact-item {
        flex-direction: column;
        text-align: center;
        padding: 1.5rem;
      }
      
      .contact-icon {
        align-self: center;
      }
      
      .social-links {
        justify-content: center;
      }
      
      .social-link {
        flex: 1;
        text-align: center;
        min-width: 120px;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="contact-section">
        <div className="section-container" ref={contactRef}>
          <h2 className="section-title">Contact Me</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <p>
                I'm currently available for freelance work and full-time positions.
                If you have a project that you want to get started or have any questions,
                feel free to reach out. I'll do my best to get back to you as soon as possible.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>sanatan.bramhane@outlook.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+919028804850</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Pune, Maharashtra</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/Sanatan07" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                <a href="https://linkedin.com/in/sanatanbramhane" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-button ${formStatus ? formStatus : ''}`}
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 
                   formStatus === 'success' ? 'Message Sent!' : 
                   formStatus === 'error' ? 'Failed to Send' :
                   'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
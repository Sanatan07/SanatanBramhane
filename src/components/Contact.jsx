import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  useEffect(() => {
    const element = contactRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.1 },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      await emailjs.sendForm(
        "service_14a4nkk",
        "template_0swe4wa",
        formRef.current,
        "5W2Ci2Qfg6YLV7VYB",
      );

      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus(null), 5000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const contactItems = [
    { label: "Email", value: "sanatan.bramhane@outlook.com", icon: Mail },
    { label: "Phone", value: "+91 9028804850", icon: Phone },
    { label: "Location", value: "Pune, Maharashtra", icon: MapPin },
  ];

  const customStyles = `
    .contact-section {
      min-height: 100vh;
      padding: 6rem 1rem;
      background: linear-gradient(180deg, rgba(3, 8, 7, 0.98), rgba(4, 12, 10, 0.98));
      color: #f4fff8;
    }

    .contact-shell {
      max-width: 1200px;
      margin: 0 auto;
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s ease;
    }

    .contact-shell.animate-in {
      opacity: 1;
      transform: translateY(0);
    }

    .contact-kicker {
      color: #8efdd1;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      font-size: 0.82rem;
      margin-bottom: 1rem;
    }

    .contact-title {
      font-size: clamp(2.2rem, 4vw, 3.4rem);
      margin-bottom: 2rem;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 420px minmax(0, 1fr);
      gap: 1.25rem;
    }

    .contact-panel {
      padding: 1.5rem;
      border-radius: 1.4rem;
      border: 1px solid rgba(0, 255, 163, 0.14);
      background: linear-gradient(180deg, rgba(7, 23, 18, 0.92), rgba(4, 12, 10, 0.96));
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.22);
    }

    .contact-panel h3 {
      font-size: 1.2rem;
      margin-bottom: 0.8rem;
      color: #effff7;
    }

    .contact-panel p {
      color: #bfd8ce;
      line-height: 1.8;
    }

    .contact-list {
      display: grid;
      gap: 0.85rem;
      margin: 1.3rem 0 1.5rem;
    }

    .contact-item {
      display: flex;
      gap: 0.9rem;
      align-items: center;
      padding: 0.95rem 1rem;
      border-radius: 1rem;
      background: rgba(2, 9, 7, 0.82);
      border: 1px solid rgba(0, 255, 163, 0.12);
    }

    .contact-icon {
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 0.9rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #00ffa3, #63d6ff);
      color: #02110b;
      flex-shrink: 0;
    }

    .contact-label {
      color: #89b49f;
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      margin-bottom: 0.25rem;
    }

    .contact-value {
      color: #effff7;
      line-height: 1.5;
    }

    .social-row {
      display: flex;
      gap: 0.8rem;
      flex-wrap: wrap;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1rem;
      border-radius: 0.95rem;
      text-decoration: none;
      border: 1px solid rgba(0, 255, 163, 0.14);
      background: rgba(2, 9, 7, 0.82);
      color: #dffbf0;
    }

    .social-link:hover {
      background: rgba(0, 255, 163, 0.1);
      color: #ffffff;
    }

    .form-grid {
      display: grid;
      gap: 1rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.45rem;
      color: #c6ddd4;
      font-size: 0.92rem;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 1rem;
      border-radius: 1rem;
      border: 1px solid rgba(0, 255, 163, 0.14);
      background: rgba(2, 9, 7, 0.86);
      color: #effff7;
      font-family: inherit;
      resize: vertical;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: rgba(0, 255, 163, 0.4);
      box-shadow: 0 0 0 3px rgba(0, 255, 163, 0.08);
    }

    .submit-button {
      width: 100%;
      padding: 1rem 1.2rem;
      border: none;
      border-radius: 1rem;
      background: linear-gradient(135deg, #00ffa3, #54e9ff);
      color: #02110b;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
    }

    .submit-button.sending {
      background: #5f6f68;
      color: #effff7;
    }

    .submit-button.success {
      background: #00c77f;
      color: #04110b;
    }

    .submit-button.error {
      background: #ff6b6b;
      color: #1b0606;
    }

    @media screen and (max-width: 900px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 640px) {
      .contact-section {
        padding: 5rem 1rem;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="contact-section">
        <div className="contact-shell" ref={contactRef}>
          <div className="contact-kicker">Connect / Collaborate</div>
          <h2 className="contact-title">Contact</h2>

          <div className="contact-grid">
            <div className="contact-panel">
              <h3>Let&apos;s Build Secure Software</h3>
              <p>
                I&apos;m open to software engineering roles, security-focused product
                work, and conversations around application security, API
                hardening, and modern web development.
              </p>

              <div className="contact-list">
                {contactItems.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="contact-item">
                    <div className="contact-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="contact-label">{label}</div>
                      <div className="contact-value">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-row">
                <a
                  href="https://github.com/Sanatan07"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sanatanbramhane"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="contact-panel">
              <h3>Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, project, or security challenge."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`submit-button ${formStatus || ""}`}
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending"
                    ? "Sending..."
                    : formStatus === "success"
                      ? "Message Sent"
                      : formStatus === "error"
                        ? "Send Failed"
                        : "Send Message"}
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

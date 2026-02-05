import React, { useRef, useState } from 'react';
import { content } from '../data/content';
import './Contact.css';
import emailjs from '@emailjs/browser';
import ScrollWrapper from './ScrollWrapper';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const { personal } = content;
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Full Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus('sending');

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS SERVICE CONSTANTS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_52i315w';
        const TEMPLATE_ID = 'template_glsz9qg';
        const PUBLIC_KEY = 'r5YQ21r9SnUwrcAyv';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });

                // Reset status after 5 seconds
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log('Email sending failed:', error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <ScrollWrapper>
                    <div className="section-header">
                        <h2 className="section-title">Let's Connect</h2>
                        <p className="section-subtitle">Have a question or opportunity? Feel free to reach out.</p>
                    </div>
                </ScrollWrapper>

                <div className="contact-wrapper">
                    {/* Contact Form */}
                    <ScrollWrapper className="stagger-1" style={{ width: '100%' }}>
                        <div className="contact-form-container hover-lift">
                            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'error' : ''}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error' : ''}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject (Optional)</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={errors.message ? 'error' : ''}
                                        rows="5"
                                        placeholder="Your message here..."
                                    ></textarea>
                                    {errors.message && <span className="error-text">{errors.message}</span>}
                                </div>

                                <button type="submit" className="btn submit-btn btn-glow" disabled={status === 'sending'}>
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>

                                {status === 'success' && (
                                    <div className="success-message">
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="error-message">
                                        Failed to send message. Please try again later.
                                    </div>
                                )}
                            </form>
                        </div>
                    </ScrollWrapper>

                    {/* Contact Info */}
                    <ScrollWrapper className="stagger-2" style={{ width: '100%' }}>
                        <div className="contact-info-container hover-lift">
                            <div className="info-card">
                                <h3>Contact Information</h3>
                                <p>I am open to freelance work and job opportunities. Connect with me via email or phone.</p>

                                <div className="info-item">
                                    <span className="icon"><FaEnvelope /></span>
                                    <a href="mailto:abhayhgarodi365@gmail.com">abhayhgarodi365@gmail.com</a>
                                </div>
                                <div className="info-item">
                                    <span className="icon"><FaPhoneAlt /></span>
                                    <a href="tel:+919552281892">+91 9552281892</a>
                                </div>

                                <div className="social-links-container">
                                    <h3>Follow Me</h3>
                                    <div className="social-links">
                                        <a href="https://github.com/AbhayGarodi" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                                        <a href="https://www.linkedin.com/in/abhay-garodi" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollWrapper>
                </div>

                <div className="footer-copyright">
                    <p>© 2024 Abhay Garodi. All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import { useState } from 'react';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json();

            if (response.ok) {
                setStatus('Email sent successfully');
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
            else {
                setStatus(data.message || 'Failed to send email');
            }
        }
        catch (err) {
            console.error('Error sending email:', err);
            setStatus('Server error. Please try again later.');
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <div className="contact">
            <h2>Contact Me</h2>

            <div className="contact-container">

                {/* Left Side */}
                <div className="contact-left">

                    <div className="contact-card">
                        <h3>Email</h3>
                        <p>akshays.cs23@bmsce.ac.in</p>
                    </div>

                    <div className="contact-card">
                        <h3>Phone</h3>
                        <p>+91 8660737989</p>
                    </div>

                    <div className="contact-card">
                        <h3>Location</h3>
                        <p>Bangalore, India</p>
                    </div>

                </div>

                {/* Right Side */}
                <div className="contact-right">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                        {status && <p className="status-message">{status}</p>}
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;
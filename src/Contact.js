const Contact = () => {
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
                    <form>
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Your Message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;
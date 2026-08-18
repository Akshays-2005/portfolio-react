import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(cors());    
app.use(express.json());
const port = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
    // host:'smtp.gmail.com',
    // port:465,
    // secure:true,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});


app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            replyTo: email,
            subject:`Portfolio Contact: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email' });
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
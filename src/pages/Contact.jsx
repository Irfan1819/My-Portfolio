import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import './Contact.css';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_wzfgq9p', // ✅ Your Service ID
        'template_4mcgjmr', // ✅ Your Template ID
        form.current,
        'zp0ST7tdekKAQD4hj' // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error('❌ Failed to send message. Please try again.');
        }).finally(() =>{
          setLoading(false);
        });
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="user_name" required />

        <label>Email:</label>
        <input type="email" name="user_email" required />

        <label>Message:</label>
        <textarea name="message" rows="5" required></textarea>

        <button type="submit" disabled={loading}>{loading ? "Sending..." :"Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
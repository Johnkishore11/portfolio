import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tgpjbdy', 'template_xz3620c', form.current, {
        publicKey: 'RNS_FQoe3qLFKjNbj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start p-8 md:p-16 bg-white">
        {/* Left Side - Address Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="font-semibold text-gray-500 uppercase text-sm tracking-widest mb-4">
            Contact
          </h2>
          <h1 className="text-4xl font-bold text-black mb-6 leading-tight">
            Get in touch — let’s work together.
          </h1>
          <div>
            <h3 className="font-semibold text-gray-500 uppercase text-sm tracking-widest mb-2">
              Address
            </h3>
            <p className="text-black font-semibold leading-relaxed">
              Kishore J <br />
              M1-90, Avalapalli Hudco<br />
              Basthi, Hosur<br />
              Tamil Nadu, India
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-2xl font-semibold text-gray-500 mb-4">
            Have a project in mind?
            Feel free to reach out if you want to collaborate on something exciting.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={form} onSubmit={sendEmail}>
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-2" type="text" name="user_name" >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="What’s your name?"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-2" type="email" name="user_email" >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="What’s your email address?"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-2" htmlFor="service">
                Service
              </label>
              <select
                id="service"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option>What are you interested in?</option>
                <option>Need a help for a Project</option>
                <option>Want to Hire me full-time</option>
                <option>Just wanted to say Hii!</option>
              </select>
            </div>


            {/* Message */}
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label className="text-gray-500 text-sm mb-2">
                Message
              </label>
              <textarea name="message" 
                id="message"
                rows="4"
                placeholder="What’s your message?"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>
            
            {/* Send Message Button */}
            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"  value="Send"
                className="flex items-center space-x-2 px-6 py-3 bg-black text-white font-semibold text-lg rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V8z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l9 6 9-6"
                  />
                </svg>
                <span>Send message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

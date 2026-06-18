import React from 'react';
import Footer from './Footer';
const access_key = import.meta.env.VITE_MY_ACCESS_KEY
const api_url = import.meta.env.VITE_API_URL

console.log(access_key)

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", access_key);

    try {
      const response = await fetch(api_url, {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Uhmm... I got your message. I'll get back to you as soon as possible.");
        event.target.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("Something went wrong.");
    }
  };

  return (<section id='contact' className='h-full w-full flex flex-col items-center pt-12 md:pt-16 mb-10 px-4'>

    {/* Heading */}
    <div className='text-2xl md:text-4xl font-bold text-center'>
      Get in touch
    </div>

    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10 md:pt-16">

      {/* FORM */}
      <div id='form' className="w-full">
        <form
          onSubmit={onSubmit}
          className='flex flex-col gap-4 w-full max-w-[700px] mx-auto'
        >
          {/* Name */}
          <div className="flex flex-col w-full">
            <input
              id="name"
              name="name"
              placeholder='Full Name'
              autoComplete='name'
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full">
            <input
              id="email"
              name='email'
              type='email'
              placeholder='johnSnow@email.com'
              autoComplete='email'
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col w-full">
            <textarea
              name="message"
              id="message"
              placeholder='How you doin?'
              className='w-full h-32 md:h-40 border p-2 rounded'
              required
            />
          </div>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 w-full mt-4 justify-center md:flex-row items-center'>
            <button
              className='bg-[var(--green)] font-bold w-full sm:w-auto px-16 py-3 rounded-sm hover:bg-gray-400 hover:text-gray-100 transition-all duration-300 hover:rounded-4xl '
              type='submit'
            >
              Let's Connect
            </button>

            <a
              target='_blank'
              rel="noreferrer"
              href='https://drive.google.com/file/d/1v6m8YQ2iQIXADGzc-hd0q5jfzj03SuAQ/view?usp=sharing'
              className='bg-[var(--green)] text-center font-bold w-full sm:w-auto px-16 py-3 rounded-sm hover:bg-gray-400 hover:text-gray-100 transition-all duration-300 hover:rounded-4xl '
            >
              Download CV
            </a>
          </div>

          {/* RESULT */}
          <span className="mt-3 text-center sm:text-center">{result}</span>
        </form>
      </div>

      {/* FOOTER */}
      <div id='footer' className='flex justify-center lg:justify-end '>
        <Footer />
      </div>

    </div>
  </section>
  );
};

export default Contact;


import React from 'react';
import Footer from './Footer';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "ed510341-3320-44a1-bebb-1a2c22c9e3d8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully.");
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
          className='flex flex-col gap-4 w-full'
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
          <div className='flex flex-col sm:flex-row gap-4 w-full mt-4 justify-center md:flex-row'>
            <button
              className='bg-(--green) font-bold w-full sm:w-auto px-16 py-3 rounded-sm hover:bg-gray-400 hover:text-gray-100 transition-all duration-300 hover:rounded-4xl '
              type='submit'
            >
              Let's Connect
            </button>

            <a
              target='_blank'
              rel="noreferrer"
              href='https://drive.google.com/file/d/1R8Nm4XwAh9VzH1uzgCYWo_B8dFRDd6Hi/view?usp=sharing'
              className='bg-(--green) text-center font-bold w-full sm:w-auto px-16 py-3 rounded-sm hover:bg-gray-400 hover:text-gray-100 transition-all duration-300 hover:rounded-4xl '
            >
              Download CV
            </a>
          </div>

          {/* RESULT */}
          <span className="mt-3 text-center sm:text-left">{result}</span>
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


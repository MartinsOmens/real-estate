import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9123478a-5075-4417-8d02-8ebae8136334");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
    };



  return (
    <motion.div 
    initial={{opacity: 0, y: 100}}
    transition = {{duration: 1} }
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    className='w-full py-10 px-6 my-20 mx-auto md:px-20 lg:px-32 overflow-hidden' id='Contact'>
        <div className='text-center'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h2>
            <p className='text-gray-500 max-w-80 mx-auto mb-2'>Ready to Make a Move? Let's Build Your Furture Together</p>
        </div>

        <form className='max-w-2xl mx-auto pt-8 text-gray-600' onSubmit={onSubmit}>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name
                    <input type="text" placeholder='Your Name' className='w-full border border-gray-300 rounded px-4 py-3 mt-2 overflow-hidden focus:outline-none' required/>
                </div>

                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input type="email" placeholder='Your Email' className='w-full border border-gray-300 rounded px-4 py-3 mt-2 overflow-hidden focus:outline-none' required/>
                </div>

            </div>

            <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300 rounded mt-2 py-3 px-4 h-48 resize-none focus:outline-none' 
                name="Message" placeholder='Message' required></textarea>
            </div>
            <button className='bg-blue-500 py-2 px-12 text-white rounded mb-10 block mx-auto'>
                {result ? result : "Send Message"} </button>
        </form>
    </motion.div>
  )
}

export default Contact
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 pt-10 px-4 md:px-20 lg:px-30 overflow-hidden" id="Footer">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
            
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <img src={assets.logo_dark} alt="" />
                <p className="text-gray-400 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, ex, porro cumque, excepturi ullam assumenda ratione rerum soluta illum cupiditate fugiat quia. Ipsum odio soluta neque dolores praesentium quasi sunt.</p>
            </div>

            <div className="w-full md:w-1/5 mb-8 md:mb-0">
                <h3 className="text-white text-lg font-bold mb-4">Company</h3>
                  <ul className='flex flex-col gap-2 text-gray-400'>
                    <li><a href="#Header" className='hover:text-white'>Home</a></li>
                    <li><a href="#About" className='hover:text-white'>About</a></li>
                    <li><a href="#Projects" className='hover:text-white'>Projects</a></li>
                    <li><a href="#Testimonials" className='hover:text-white'>Testimonials</a></li>
                </ul>
            </div>

            <div className="w-full md:w-1/3">
                <h3 className="text-white mb-4 font-bold text-lg">Subscribe to your news letter</h3>
                <p className="text-gray-400 mb-4 max-w-80">The latest news, articles and resources sent to your inbox weekly</p>

                <div className="flex gap-2">
                    <input type="email" placeholder="Enter your email" 
                    className="p-2 rounded bg-gray-700 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto" />
                    <button className="bg-blue-500 px-4 py-2 text-white">Subscribe</button>
                </div>
            </div>

        </div>

        <div className="text-center text-gray-400 border-t border-gray-700 mt-10 py-4">
            Copyright 2025 @ GreatStack. All Right Reserved
        </div>

    </div>
  )
}

export default Footer;
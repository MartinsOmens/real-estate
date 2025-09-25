import { assets } from "../assets/assets"
import { motion } from "motion/react"


const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x: 200}}
    transition = {{duration: 1} }
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: true}}
    className='w-full flex flex-col items-center justify-center p-14 md:px-20 lg:px-32 overflow-hidden' id='About'>
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 decoration-1 under font-light">Our Brand</span></h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">Passionate About Properties, Dedicated to Your Vision</p>

        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
            <img src={assets.brand_img} alt="" className="w-full max-w-lg sm:w-1/2" />
            <div className="flex flex-col items-center mt-10 sm:items-start text-gray-600">
                <div className="grid grid-cols-2 gap-6 w-full">
                    <div>
                        <p className="text-4xl font-medium text-gray-800">10+</p>
                        <p>Year of Excellence</p>
                    </div>

                     <div>
                        <p className="text-4xl font-medium text-gray-800">12+</p>
                        <p>Projects Completed</p>
                    </div>

                     <div>
                        <p className="text-4xl font-medium text-gray-800">20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    
                     <div>
                        <p className="text-4xl font-medium text-gray-800">25+</p>
                        <p>Ongoing Projects</p>
                    </div>

                </div>
                <p className="my-10 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero, iusto aspernatur consequuntur voluptate aut nulla nihil necessitatibus ducimus voluptas molestias corporis ipsum, adipisci aliquid voluptatibus sit fuga esse assumenda.</p>
                <button className="text-white rounded py-3 px-8 bg-blue-500">Learn More</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About
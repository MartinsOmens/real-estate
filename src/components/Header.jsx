import Navbar from "./Navbar"


const Header = () => {
  return (
    <div className="min-h-screen w-full flex items-center mb-4 bg-center bg-cover overflow-hidden" style={{backgroundImage:"url('/header_img.png')" }}>
        <Navbar/>
        <div className="container mx-auto text-center py-4 px-6 text-white md:px-20 lg:px-32">
            <h2 className="text-5xl sm:text-6xl md:text-[80px] inline-block font-semibold max-w-3xl pt-20">Explore home that fits your dreams</h2>
            <div className="space-x-6 mt-16 ">
            <a href="#Projects" className="border border-white rounded py-3 px-8">Projects</a>
            <a href="#Contact" className=" rounded py-3 px-8 bg-blue-500">Contact Us</a>
            </div>
        </div>
       
    </div>
  )
}

export default Header
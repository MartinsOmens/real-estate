import { assets, projectsData } from "../assets/assets"


const Projects = () => {
  return (
    <div className="w-full py-4 px-6 my-20 mx-auto md:px-20 lg:px-32 overflow-hidden" id="Projects">
         <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span className="underline underline-offset-4 decoration-1 under font-light">Completed</span></h1>
        <p className="text-gray-500 max-w-80 mx-auto text-center mb-8">Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

        {/* ------- Slider buttons ----------- */}

        <div className="flex justify-end items-center">
           <button className="p-3 bg-gray-200 mr-2 rounded">
                 <img src={assets.left_arrow} alt=""/>
           </button>
           <button className="p-3 bg-gray-200 mr-2 rounded">
                 <img src={assets.right_arrow} alt="" />
           </button>
        </div>

        {/* project slider container */}

        <div>
            <div className="flex gap-8 transition-transform duration-500 ease-in-out">
                {projectsData.map((project, index) =>(
                    <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                        <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />
                        <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                            <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                <h2 className="text-xl font-semibold text-gray-500">{project.title}</h2>
                                <p className="text-gray-500 text-sm">{project.price} <span>{project.location}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects
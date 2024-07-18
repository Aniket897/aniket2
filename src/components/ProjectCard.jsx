const ProjectCard = ({ project }) => {
  return (
    // <div className=" bg-conic-gradient p-[2px] rounded-md">
    <div className=" glass text-n-3 flex flex-col backdrop-filter backdrop-blur-lg backdrop-saturate-180 bg-opacity-75 bg-gray-900 rounded-xl border border-white border-opacity-10">
      <div className="w-full h-[220px]">
        <img
          className="rounded-tl-md rounded-tr-md w-full h-full object-cover"
          src={project.image}
          alt=""
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center flex-wrap gap-4 text-gray p-4 border-y border-y-gray-600 text-xs">
          {project.techStack.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="p-4 flex flex-col gap-y-3">
          <h1 className="font-bold text-xl text-n-1">{project.title}</h1>
          <p className=" text-gray">{project.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <a href={project.live} target="_blank">
          <button className="bg-[#41A399] rounded-md p-2 hover:bg-white hover:text-black hover:scale-110 duration-300 flex items-center justify-center gap-2">
            Live
          </button>
        </a>
        <a href={project.github} target="_blank">
          <button className="bg-[#41A399] rounded-md p-2 hover:bg-white hover:text-black hover:scale-110 duration-300 flex items-center justify-center gap-2">
            Github
          </button>
        </a>
        {/* <Button href={project.live}>Live</Button> */}
        {/* <Button href={project.github}>Github</Button> */}
      </div>
    </div>
    // </div>
  );
};

export default ProjectCard;

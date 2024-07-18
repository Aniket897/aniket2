import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/codelab.png",
    techStack: [
      "React",
      "NodeJs",
      "Shadcn",
      "Typescript",
      "Express",
      "Redis",
      "Tailwindcss",
      "Socket.io",
    ],
    title: "Codelab",
    description: "A real time code collaboration web application",
    live: "https://codelab-1.onrender.com/",
    github: "https://github.com/Aniket897/codelab",
  },
  {
    image: "/jiomart.png",
    techStack: ["React", "Tailwindcss"],
    title: "JioMart Clone",
    description:
      "Jiomart is a e-commerce website where constmer get varity of products",
    live: "https://jiomart-clone-eosin.vercel.app/",
    github: "https://github.com/Aniket897/jiomart-clone",
  },
  {
    image: "/pixelhero.png",
    techStack: ["React", "Firebase", "Tailwindcss"],
    title: "PixelHero",
    description:
      "pixel hero is web app which is usefull for searching and downloading images",
    live: "https://pixel-hero.vercel.app/",
    github: "https://github.com/Aniket897/PixelHero",
  },
  {
    image: "/event-prime.png",
    techStack: ["REACT", "ExpressJs", "MongoDb", "NodeJs", "Stripe"],
    title: "Event-Prime clone",
    description:
      "event prime is a platform where companies can host events and sell tickets to customer",
    live: "https://event-prime-clone.vercel.app/",
    github: "https://github.com/Aniket897/event-prime-clone",
  },
  {
    image: "/halloween-shop.png",
    techStack: ["REACT", "TailwindCSS", "Readux-toolkit"],
    title: "halloween-shop clone",
    description:
      "halloween shop is a ecommerce website where cusomer get products related to halloween",
    live: "https://halloween-shop-clone.vercel.app/",
    github: "https://github.com/Aniket897/halloween-shop-clone",
  },
  {
    image:
      "https://d33wubrfki0l68.cloudfront.net/655640d339b93419b086ce8d/screenshot_2023-11-16-16-18-55-0000.png",
    techStack: ["HTML", "CSS"],
    title: "bewkoof.com clone",
    description: "bewkoof.com is a ecommerce website.",
    live: "https://joyful-truffle-91c4b3.netlify.app/",
    github: "https://github.com/Aniket897/bewakoof.com-clone",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col gap-y-5">
      <div className="pb-10 flex items-center justify-center mt-[100px]">
        <div className="relative cursor-pointer w-fit">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-100 transition duration-1000"></div>
          <div className="relative px-7 bg-[#1d2222] py-3 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div>
              <h1 className="text-xl font-extrabold text-[#41A399]">
                /Projects
              </h1>
              {/* <p className="pl-[20px]">how to connect with me</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90vw] md:w-[80vw] mx-auto">
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[50px] md:gap-3 mt-[50px]">
          {projects.map((item, index) => (
            <ProjectCard key={index} project={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

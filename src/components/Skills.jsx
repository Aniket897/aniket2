const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen flex items-center justify-center flex-col max-md:mt-[100px]"
    >
      <div className="pb-[50px]">
        <div className="relative cursor-pointer w-fit">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-100 transition duration-1000"></div>
          <div className="relative px-7 bg-[#1d2222] py-3 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div>
              <h1 className="text-xl font-extrabold text-[#41A399]">
                /My-Skills
              </h1>
            </div>
          </div>
        </div>
      </div>
      <h1>
        Here are some of the technologies <br /> and tools I have worked with:
      </h1>
      <div className="md:w-[60vw] mx-auto flex items-center justify-between mt-[40px]">
        <div className="flex-1  flex items-center justify-center flex-wrap gap-3">
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
            alt="HTML5"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
            alt="CSS3"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
            alt="JavaScript"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
            alt="TypeScript"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
            alt="Python"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
            alt="React"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
            alt="React Router"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white"
            alt="React Hook Form"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
            alt="Redux"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
            alt="NodeJS"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
            alt="Express.js"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
            alt="Chakra"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
            alt="TailwindCSS"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
            alt="MongoDB"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"
            alt="Netlify"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
            alt="Vercel"
          />

          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"
            alt="NPM"
          />
          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
            alt="JWT"
          />

          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD"
            alt="Nodemon"
          />

          <img
            className="h-[50px]"
            src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"
            alt="Socket.io"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

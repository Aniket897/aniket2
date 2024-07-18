const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center flex-col max-md:space-y-10">
      <div className="mt-[100px]">
        <div className="relative cursor-pointer w-fit">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-100 transition duration-1000"></div>
          <div className="relative px-7 bg-[#1d2222] py-3 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div>
              <h1 className="text-xl font-extrabold text-[#41A399]">
                /About-me
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[80vw] flex-1 mx-auto flex items-center justify-between w-[90vw] max-md:flex-col-reverse gap-5 max-md:text-center">
        <div className="flex-1">
          <h1>
            👋 Hello, I’m Aniket! I’m a full stack web developer based in India.
          </h1>
          <br />
          <p>
            ⭐ I've been building stuff on the 🌐 web since when I was in 10th
            standard and I've made countless projects
            <br /> <br /> ⭐ Proficient in JavaScript and experienced in MERN
            stack development (MongoDB, Express.js, React.js, Node.js). Skilled
            in RESTful API design, frontend technologies (HTML, CSS), and
            database systems (MongoDB).
          </p>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div>
            <img src="/heroimg.svg" alt="" />
            <div className="flex items-center justify-center p-2 border-2 border-[#41A399] text-n-3 gap-3 rounded-md">
              <div className="w-3 h-3 bg-heading"></div>
              <p className="text-gray">
                Open for new opportunities
                <span className="text-n-2"> Nothing</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

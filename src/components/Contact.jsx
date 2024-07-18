import { Github, Linkedin, LocateIcon, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex items-center justify-center flex-col gap-y-5 min-h-screen max-md:mt-[150px]"
    >
      <div>
        <div className="pb-10">
          <div className="relative cursor-pointer w-fit">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-100 transition duration-1000"></div>
            <div className="relative px-7 bg-[#1d2222] py-3 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div>
                <h1 className="text-xl font-extrabold text-[#41A399]">
                  /Contact-me
                </h1>
                {/* <p className="pl-[20px]">how to connect with me</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="w-[90%] md:w-[50%] text-center">
        I am currently specializing in MERN development. Feel free to drop a
        message for any suggestion, and we can get in touch.
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-6 mt-[50px]">
        <a
          href={`mailto:aniketbkangane9637@gmail.com?subject=${encodeURIComponent(
            ""
          )}&body=${encodeURIComponent("")}`}
          target="_blank"
        >
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-7 py-6 bg-[#1d2222] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 w-[300px]">
              <div className="space-y-2 text-center">
                <h1 className="text-xl flex items-center gap-2">
                  {" "}
                  <Mail /> E-Mail
                </h1>
                <p>aniketbkangane9637@gmail.com</p>
              </div>
            </div>
          </div>
        </a>
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-[#1d2222] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 w-[300px]">
            <div className="space-y-2 text-center">
              <h1 className="text-xl flex items-center gap-2">
                {" "}
                <Mail /> Phone Number
              </h1>
              <p>+91 9637618151</p>
            </div>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-[#1d2222] ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 w-[300px]">
            <div className="space-y-2 text-center">
              <h1 className="text-xl flex items-center gap-2">
                {" "}
                <LocateIcon /> Location
              </h1>
              <p>Jalna, Maharashtra</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-5 mt-[50px]">
        <a href={"https://www.linkedin.com/in/aniket-kangane/"} target="_blank">
          <button className="bg-[#41A399] p-2 rounded-full hover:bg-white hover:text-black hover:scale-110 duration-300">
            <Linkedin />
          </button>
        </a>
        <a href={"https://github.com/Aniket897"} target="_blank">
          <button className="bg-[#41A399] p-2 rounded-full hover:bg-white hover:text-black hover:scale-110 duration-300">
            <Github />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;

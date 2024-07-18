import { DockIcon, Github, Linkedin, Mail } from "lucide-react";
import { saveAs } from "file-saver";

const Hero = () => {
  const downloadPdf = () => {
    const pdfUrl = "/aniket_kangane_resume.pdf";
    saveAs(pdfUrl, "aniket_kangane.pdf");
  };
  return (
    <div id="home" className="min-h-screen flex items-center justify-center">
      <div className="flex items-center justify-between md:w-[80vw] mx-auto max-md:flex-col w-[90vw] max-md:mt-[100px] max-md:gap-10 max-md:text-center">
        <div className="flex-1 space-y-11 max-md:space-y-4">
          <h1 className="font-bold text-3xl">Full Stack Developer</h1>
          <h1 className="font-extrabold text-5xl text-[#41A399]">
            Aniket Kangane
          </h1>
          <h1>
            Aniket is a Full stack Developer and Problem Solver and he crafts
            responsive websites where technologies meet creativity
          </h1>
          <div>
            <div className="max-md:justify-center flex items-center gap-2 flex-wrap">
              <a
                onClick={downloadPdf}
                href="/aniket_kangane_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-md max-sm:flex-1 w-[200px] mx-w-[80vw] bg-[#41A399] p-2 hover:bg-white hover:text-black hover:scale-110 duration-300 flex items-center justify-center gap-2">
                  <DockIcon size={15} />
                  Resume
                </button>
              </a>
              <a
                href={`mailto:aniketbkangane9637@gmail.com?subject=${encodeURIComponent(
                  ""
                )}&body=${encodeURIComponent("")}`}
                target="_blank"
              >
                <button className="rounded-md max-sm:flex-1 w-[200px] mx-w-[80vw] bg-[#41A399] p-2 hover:bg-white hover:text-black hover:scale-110 duration-300 flex items-center justify-center gap-2">
                  <Mail size={15} />
                  Email
                </button>
              </a>
            </div>
            <div className="max-w-[90vw] max-sm:mx-auto max-md:justify-center hidden md:flex items-center gap-2 mt-2">
              <a href={"https://github.com/Aniket897"} target="_blank">
                <button className="rounded-md max-sm:flex-1 w-[200px] mx-w-[80vw] bg-[#41A399] p-2 hover:bg-white hover:text-black hover:scale-110 duration-300 flex items-center justify-center gap-2">
                  <Github size={15} />
                  Github
                </button>
              </a>

              <a
                href={"https://www.linkedin.com/in/aniket-kangane/"}
                target="_blank"
              >
                <button className="rounded-md max-sm:flex-1 w-[200px] mx-w-[80vw] bg-[#41A399] p-2 hover:bg-white hover:text-black hover:scale-110 duration-300 flex items-center justify-center gap-2">
                  <Linkedin size={15} />
                  Linkedin
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 items-center justify-center md:justify-end flex">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-[7px] border-white">
            <img className="w-full h-full object-cover" src="/me.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

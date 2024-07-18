import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";
import { saveAs } from "file-saver";

const linkes = [
  {
    title: "Home",
    onclick: () => {},
    href: "/#home",
  },
  {
    title: "About",
    onclick: () => {},
    href: "/#about",
  },
  {
    title: "Skills",
    onclick: () => {},
    href: "/#skills",
  },
  {
    title: "Projects",
    onclick: () => {},
    href: "/#projects",
  },
  {
    title: "Contact",
    onclick: () => {},
    href: "/#contact",
  },
];

const ResponsiveNavbar = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    window.addEventListener("hashchange", function () {
      console.log("Hash changed:", window.location.hash);
      setOpen(false);
    });
  }, []);

  return (
    <div className="md:hidden">
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="bg-[#41A399] p-2 rounded-full hover:bg-white hover:text-black hover:scale-110 duration-300"
      >
        <AlignJustify />
      </button>
      <div
        className={`flex items-center gap-10 absolute top-0 -left-[100%] flex-col bg-black w-[90vw] duration-500 justify-center h-screen ${
          open && "left-0"
        }`}
      >
        <button
          onClick={() => {
            setOpen(false);
          }}
          className="absolute top-[50px] -right-[10px] bg-[#41A399] p-2 rounded-full hover:bg-white hover:text-black hover:scale-110 duration-300"
        >
          <X />
        </button>
        {linkes.map((item, index) => {
          return (
            <a href={item.href} key={index}>
              <button className="uppercase text-[14px] bg-[#41a399] rounded-3xl w-[100px] p-1 border-2 border-[#41A399] hover:bg-transparent hover:text-[#41A399] duration-500 font-bold hover:border-white hover:scale-110">
                {item.title}
              </button>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const Navbar = () => {
  const downloadPdf = () => {
    const pdfUrl = "/aniket_kangane_resume.pdf";
    saveAs(pdfUrl, "aniket_kangane.pdf");
  };
  return (
    <div className="flex items-center justify-between p-5 px-8 duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-180 bg-opacity-75 bg-gray-900 rounded-xl border border-white border-opacity-10 fixed w-screen top-0 left-0 z-10">
      <div className="font-bold text-3xl">🙂Aniket</div>
      <div className="hidden md:flex items-center gap-x-8">
        <div className="hidden md:flex items-center gap-10">
          {linkes.map((item, index) => {
            return (
              <a
                href={item.href}
                key={index}
                className="uppercase font-bold hover:scale-125 hover:text-[#41A399] duration-500 text-neutral-300"
              >
                {item.title}
              </a>
            );
          })}
        </div>
        <a
          onClick={downloadPdf}
          href="/aniket_kangane_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-md max-sm:flex-1 w-[200px] mx-w-[80vw] bg-[#41A399] p-2 hover:bg-white hover:text-black hover:scale-110 duration-300 flex items-center justify-center gap-2">
            Resume
          </button>
        </a>
      </div>
      <ResponsiveNavbar />
    </div>
  );
};

export default Navbar;

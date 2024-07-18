const Github = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-y-5 mt-[100px]">
      <div className="pb-[50px]">
        <div className="relative cursor-pointer w-fit">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-100 transition duration-1000"></div>
          <div className="relative px-7 bg-[#1d2222] py-3 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div>
              <h1 className="text-xl font-extrabold text-[#41A399]">
                /Github-Stats
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-md:flex-col gap-5 items-center">
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Aniket897&theme=react&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D"
          alt=""
        />
        <img
          src="https://github-readme-stats.vercel.app/api?username=Aniket897&count_private=true&theme=react"
          alt=""
        />
      </div>
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aniket897&theme=react"
        alt=""
      />
    </div>
  );
};

export default Github;

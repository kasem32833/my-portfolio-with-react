import { HERO_CONTENT } from "../constnts";
import profilePic from "../"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl ">
              Abul Kasem
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">
              Full Stuck Developer
            </span>
            <p className="my-2 max-w-xl py-2 tracking-tighter ">{HERO_CONTENT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Heading from "./Heading";
import PFP from "../../assets/ProfilePicture.png";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col items-start sm:pt-28 p-5 md:w-5/6 md:mx-auto lg:justify-center lg:gap-10 ">
      <span className="md:hidden">
        <Heading text="About Me" />
      </span>
      <main className="flex flex-col gap-5 mt-5 lg:flex-row lg:gap-0 lg:items-center">
        <div className="w-48 h-48 mx-auto overflow-hidden object-cover rounded-full lg:w-72 lg:h-72">
          <img src={PFP} alt="Krishang Sharma" className="w-full h-auto mt-2" />
        </div>
        <p className="text-lg text-text-200 lg:w-2/3 ">
          Hey there! I&apos;m{" "}
          <span className="font-bold text-text-50">Karan Sharma</span>, a
          19-year-old from Delhi, currently in my{" "}
          <span className="text-text-50 font-semibold">
            3nd year of BCA at IPU
          </span>
          . I&apos;m really into web development and programming, and I&apos;ve
          been self-teaching a lot of what I know. <br /> <br /> I&apos;ve got a
          solid grip on{" "}
          <span className="font-semibold text-text-50 ">
            HTML, CSS, and JavaScript
          </span>
          , and I&apos;m pretty skilled with the{" "}
          <span className="text-text-50 font-semibold">MERN stack</span>. I also
          work with{" "}
          <span className="font-semibold text-text-50 ">
            Tailwind CSS, Java
          </span>
          , and have a good understanding of{" "}
          <span className="text-text-50 font-semibold">
            Data Structures and Algorithms (DSA)
          </span>
          <p className="hidden sm:block">
            <br />{" "}
            <span className="text-text-50 font-semibold">Problem-solving</span>{" "}
            is my thing, and I love diving into challenges. I can easily switch
            between working in a team or going solo, fitting in wherever
            I&apos;m needed.
          </p>
          <div className="flex gap-10 mt-5">
            <a
              href="https://linkedin.com/in/krishangsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-accent-300 rounded-md hover:bg-accent-300 hover:text-text-800 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/KrishangSharma"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-2 border border-accent-300 rounded-md bg-accent-300 text-text-800 font-medium hover:bg-transparent hover:text-text-200 transition-colors"
            >
              Github
            </a>
          </div>
        </p>
      </main>
    </div>
  );
};

export default Hero;

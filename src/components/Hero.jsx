import PFP from "../../assets/ProfilePicture.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-evenly h-full w-full md:flex-row md:items-center ">
      {/* Image */}
      <aside className="img-container mx-auto ">
        <img src={PFP} alt="Krishang Sharma" />
      </aside>
      <aside className="w-full p-4 flex flex-col md:w-1/2 md:p-0 ">
        <h1>
          <span className="text-primary">About </span>Me
        </h1>
        <p className="my-5">
          Hello. My name is Krishang Sharma. I am a <b>Full Stack Developer</b>{" "}
          and a 2nd Year BCA student at IP University in Delhi, India. I spend
          my time improving my skills in web development, specifically in the
          MERN Stack. My technical skills include <b>HTML</b>, <b>CSS</b>,{" "}
          <b>JS</b>, <b>ReactJS</b>, <b>NodeJS</b>, <b>ExpressJS</b>,{" "}
          <b>Mongo DB</b>, <b>Tailwind CSS</b>,<b>Material UI</b>, and{" "}
          <b>GitHub</b> for VCS.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/KrishangSharma"
            target="_blank"
            rel="noreferrer noopener"
            className="px-10 py-2 bg-accent border border-accent rounded-md hover:bg-transparent transition duration-200 easin-in-out"
          >
            Github
          </a>
          <a
            href="https://linkedin.com/in/krishangsharma"
            target="_blank"
            rel="noreferrer noopener"
            className="border border-primary rounded-md hover:bg-primary px-10 py-2 transition duration-200 easin-in-out"
          >
            LinkedIn
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Hero;

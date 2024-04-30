import Typewriter from "./Typewriter";
import PFP from "../../assets/ProfilePicture.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-evenly h-full w-full md:flex-row md:items-center ">
      <aside className="w-full p-4 flex flex-col md:w-1/2 md:p-0 gap-5">
        <h2 className="text-2xl sm:text-4xl font-bold">Hi! I am,</h2>
        <Typewriter />

        {/* Short Introduction */}
        <p className="text-gray">
          I&apos;m a <strong>Computer Applications</strong> student based in
          Delhi, currently exploring <strong>Full Stack development</strong>{" "}
          with the MERN Stack, I enjoy creating applications that are both
          visually appealing and functionally stable.
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
      {/* Image */}
      <aside className="w-64 h-64 rounded-full overflow-hidden">
        <img src={PFP} alt="Krishang Sharma" className="w-full -mt-11" />
      </aside>
    </div>
  );
};

export default Hero;

import { ReactTyped } from "react-typed";

const Typewriter = () => {
  return (
    <ReactTyped
      loop
      typeSpeed={70}
      backSpeed={30}
      className="text-3xl sm:text-6xl text-primary font-bold"
      strings={["Krishang Sharma", "A Full Stack Developer", "And An Athlete"]}
    />
  );
};

export default Typewriter;

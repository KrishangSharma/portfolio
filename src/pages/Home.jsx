// Components Import
import { Hero, Timeline, Languages } from "../components/exports";

const Home = () => {
  return (
    <>
      <div className="h-screen z-0">
        <Hero />
      </div>
      <Timeline />
      <Languages />
    </>
  );
};

export default Home;

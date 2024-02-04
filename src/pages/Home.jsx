// Components Import
import { Hero, Timeline, Languages } from "../components/exports";

const Home = () => {
  return (
    <>
      <div className="full-screen">
        <Hero />
      </div>
      <Timeline />
      <Languages />
    </>
  );
};

export default Home;

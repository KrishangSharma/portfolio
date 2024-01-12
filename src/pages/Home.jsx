// Components Import
import { Navbar, Hero, Timeline, Footer } from "../components/exports";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="full-screen">
        <Hero />
      </div>
      <Timeline />
      <Footer />
    </>
  );
};

export default Home;

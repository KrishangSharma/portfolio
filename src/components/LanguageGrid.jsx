import Heading from "./Heading";

const LanguageGrid = () => {
  return (
    <div className="w-full md:w-5/6 mx-auto p-5 mb-20 flex flex-col gap-10">
      <Heading text="Technologies Known" />
      <section className="w-full flex items-start justify-between flex-wrap gap-5">
        <div className="w-full md:w-64 flex flex-col items-start p-2 gap-2 rounded-md ">
          <h2 className="text-2xl text-text-100 font-semibold">Front End</h2>
          <div className="flex flex-wrap gap-3 text-accent-300">
            <p className="p-2 bg-background-500/30 text-center rounded-md">
              HTML
            </p>
            <p className="p-2 bg-background-500/30 text-center rounded-md">
              CSS
            </p>
            <p className="p-2 bg-background-500/30 text-center rounded-md">
              JavaScript
            </p>
            <p className="p-2 bg-background-500/30 text-center rounded-md">
              ReactJS
            </p>
            <p className="p-2 bg-background-500/30 text-center rounded-md">
              NextJS
            </p>
          </div>
        </div>
        <div className="w-full md:w-64 text-text-100 flex flex-col items-start p-2 gap-2 rounded-md ">
          <h2 className="text-2xl font-semibold">Back End</h2>
          <div className="flex flex-wrap gap-3 text-accent-300">
            <p className="p-2 bg-background-500/30 text-center rounded-md">
              Node JS
            </p>
            <p className="p-2 bg-background-500/30 text-center rounded-md">
              Express JS
            </p>
            <p className="p-2 bg-background-500/30 text-center rounded-md">
              MongoDB
            </p>
            <p className="p-2 bg-background-500/30 text-center rounded-md">
              Java(beginner)
            </p>
          </div>
        </div>
        <div className="w-full md:w-64 text-text-100 flex flex-col items-start p-2 gap-2 rounded-md ">
          <h2 className="text-2xl font-semibold">Version Control</h2>
          <div className="flex flex-wrap gap-3 text-accent-300">
            <p className="p-2 bg-background-500/30 text-center rounded-md">
              GIT Command Line
            </p>
            <p className="p-2 bg-background-500/30 text-center rounded-md">
              GitHub
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanguageGrid;

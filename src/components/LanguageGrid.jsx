const LanguageGrid = () => {
  return (
    <div className="w-5/6 mx-auto mb-20 flex flex-col gap-10">
      <h1 className="text-4xl font-bold">Technologies Known</h1>
      <section className="w-full flex items-start justify-evenly flex-wrap">
        <div className="w-full md:w-1/3 flex flex-col items-start py-2 gap-2">
          <h2 className="text-2xl font-semibold">Front End</h2>
          <div className="flex flex-col gap-1 text-gray">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React JS</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-start py-2 gap-2">
          <h2 className="text-2xl font-semibold">Back End</h2>
          <div className="flex flex-col gap-1 text-gray">
            <p>Node JS</p>
            <p>Express JS</p>
            <p>MongoDB</p>
            <p>Java(beginner)</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-start py-2 gap-2">
          <h2 className="text-2xl font-semibold">Version Control</h2>
          <div className="flex flex-col gap-1 text-gray">
            <p>GIT Command Line</p>
            <p>GitHub</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanguageGrid;

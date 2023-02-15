import PageTitle from "./reusable/PageTitle";

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto mt-12">
      <PageTitle text={"Software Development Projects"} />
      <div className="flex flex-wrap gap-6 justify-center mt-12">
        <section>
          <div className="bg-black w-96 h-64"></div>
          <h2>Peak Fitness Booking System</h2>
        </section>
        <section>
          <div className="bg-black w-96 h-64"></div>
          <h2>BBC Planetarium</h2>
        </section>
        <section>
          <div className="bg-black w-96 h-64"></div>
          <h2>Recipe Finder</h2>
        </section>
      </div>
    </section>
  );
};

export default Projects;

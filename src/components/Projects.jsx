import PageTitle from "./reusable/PageTitle";
import PeakHome from "../images/Peak_fitness/peak_fitness_home.png";

const Projects = () => {
  return (
    <section className="mx-auto bg-sky-600 p-24">
      <PageTitle text={"Software Development Projects"} />
      <div className="flex flex-wrap gap-12 justify-center mt-12">
        <section>
          <div className="bg-black w-96 drop-shadow-lg mb-4">
            <img className="border-4 border-white" src={PeakHome} alt="" />
          </div>
          <h2>Peak Fitness Booking System</h2>
        </section>
        <section>
          <div className="bg-black w-96 h-64 mb-4"></div>
          <h2>BBC Planetarium</h2>
        </section>
        <section>
          <div className="bg-black w-96 h-64 mb-4"></div>
          <h2 className="text-2xl text-white">Recipe Finder</h2>
        </section>
      </div>
    </section>
  );
};

export default Projects;

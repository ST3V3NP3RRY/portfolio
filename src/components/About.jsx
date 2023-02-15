import PageTitle from "./reusable/PageTitle";

const About = ({ text }) => {
  return (
    <section className="max-w-6xl mx-auto mt-12">
      <PageTitle text={"About Me"} />
      <p>This will be some information about who I am.</p>
    </section>
  );
};

export default About;

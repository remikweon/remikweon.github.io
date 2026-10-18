import Intro from "../components/Intro";
import ProjectCarousel from "../components/ProjectCarousel";

const Home = () => (
  <main>
    <div id="home">
      <Intro />
    </div>
    <section id="projects">
      <ProjectCarousel scroll-mt-20 />
    </section>
  </main>
);

export default Home;

import Aabout from "../Components/SecoundSection/Aabout";
import Partners from "../Components/Partners";
import Counter from "../Components/Counter";
import Hero from "../Components/Hero/Hero";
import SolutionsSection from "../Components/SolutionsSection";
import ServicesSection from "../Components/ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Aabout />
      <Counter />
      <SolutionsSection />
      <ServicesSection />
      <Partners />
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Header from "../components/Header";
import SectionExperience from "../components/SectionExperience";
import SectionProjects from "../components/SectionProjects";
import MobileMenu from "../components/MobileMenu";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <SectionExperience />
      <SectionProjects />
      <MobileMenu />
    </>
  );
};

export default Home;

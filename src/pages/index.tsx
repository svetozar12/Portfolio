import type { NextPage } from "next";
import Header from "../components/Header";
import SectionExperience from "../components/SectionExperience";
import MobileMenu from "../components/MobileMenu";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <SectionExperience />
      <MobileMenu />
    </>
  );
};

export default Home;

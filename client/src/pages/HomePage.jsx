import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
    </div>
  );
};

export default HomePage;

import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import FeaturedCars from "../components/featured-cars";
import Brands from "../components/brands";

const Home = () => {
  return (
    <Layout>
      <Hero></Hero>
      <Brands></Brands>
      <Services></Services>
      <Testimonials></Testimonials>
      <FeaturedCars></FeaturedCars>
    </Layout>
  );
};

export default Home;
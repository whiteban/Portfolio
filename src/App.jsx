import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Lab from "./components/Lab/Lab";
import WorkExperiences from "./components/Work/WorkExperience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Contact />
      <Header />
      <Hero />
      <Lab />
      <WorkExperiences />
    </>
  );
}

export default App;

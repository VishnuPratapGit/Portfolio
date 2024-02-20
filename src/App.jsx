import Test from "./Test";
import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
const App = () => {
  return <div>
    <Sidebar />
    <section id="Home">
      <Navbar />
      <Hero />
    </section>
    <section id="About">Section2</section>
    <section id="Skills">Section3</section>
    <section id="Projects">Section4</section>
    <section id="Contacts">Section5</section>
  </div>;
};

export default App;

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import './css/header.css';
import './css/footer.css';
import './css/aboutMe.css'
import './css/projects.css'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;

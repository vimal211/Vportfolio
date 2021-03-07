import './App.css';
import MyNavbar from "./components/mynavbar/mynavbar";
import MyCarousel from "./components/mycarousel/mycarousel";
import MyTitle from "./components/titlemessage/titlemessage";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import BgImage from "./assects/img/parallex/background.webp";
import Project from "./pages/projects/project";
import Contact from './pages/contact/contact';
import Footer from "./components/footer/footer";
import Particles from 'react-particles-js';
import { particlesOptions } from "./particleOptions";

const App=()=> {
  return (
    <div >
      <MyNavbar/>
      <MyCarousel/>
      <MyTitle/>
      <Particles
        className="particles particles-box"
        params={particlesOptions}/>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={BgImage}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
          <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr/>
               <Skills />
            </Slide>
          </Container>
          </div>
       <div>
          <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
               <Project />
            </Slide>
          </Container>
       </div>
       <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <hr/>
                <Contact />
              </Fade>
            </Container>
          </div>

          <hr/>
          <Footer/>
      
    </div>
  );
}

export default App;

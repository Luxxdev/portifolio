import Footer from './sections/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import About from './sections/About/About'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Experiences from './sections/Experiences/Experiences'

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </>
  )
}

export default Home

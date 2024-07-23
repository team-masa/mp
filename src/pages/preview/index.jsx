
import { capitalize } from 'lodash'
import About from './components/about'
import Achievement from './components/achievement'
import Banner from './components/banner'
import Contact from './components/contact'
import Experience from './components/experience'
import Footer from './components/footer'
import Nav from './components/nav'
import Project from './components/project'
import MySkills from './components/skills'
import Volunteering from './components/volunteering'
import { useLoaderData } from "react-router-dom";
import Education from './components/education'


const Preview = () => {
  const data = useLoaderData();

  return (


    <div>
      <Nav username={capitalize(data.userName)}/>
      <Banner />
      <About />
      <MySkills skills={data.skills}/>
      <Education education={data.education}/>
      <Experience experience={data.experiences}/>
      <Achievement achievement={data.achievements} />
      <Project project={data.projects}/>
      <Volunteering volunteering={data.volunteering} />
      <Contact />
      <Footer />
    </div>






  )
}

export default Preview
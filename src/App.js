import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Contact from './components/pages/Contact/Contact'
import Company from './components/pages/Company/Company'
import NewProject from './components/pages/NewProject/NewProject'
import Project from './components/pages/Project/Project'
import Projects from './components/pages/Projects/Projects'

import Container  from './components/pages/layout/Container/Container'
import NavBar from './components/pages/layout/NavBar/NavBar'
import Footer from './components/pages/layout/Footer/Footer'

function App() {
  return (
    <Router>
      <NavBar/>
    <Container customClass ='min-height'>
      
 <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/newproject" element={<NewProject />} />
      <Route path="/project/:id" element={<Project />} />
  </Routes>

    </Container>
    <Footer/>
    </Router>
   
  );
}

export default App;

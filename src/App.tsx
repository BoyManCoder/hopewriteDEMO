import 'mdb-ui-kit/css/mdb.min.css';
import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer';
import Information from './Components/Information';
import Quote from './Components/Quote';
import SignUp from './Components/SignUp';
import Learnmore from './Components/Learnmore';
import Contact from './Components/Contact';

function App() {

  return (
    <>
    <NavBar/>
    <Information/>
    <Quote/>
    <SignUp/>
    <Learnmore/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

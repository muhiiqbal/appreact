import logo from "./logo.svg"
import Navbar from "./components/navbar/Navbar";
import Header from "./components/organism/Header";
import Aboutmeetup from "./components/organism/Aboutmeetup";
import Member from "./components/organism/Member";
import Pastmeetups from "./components/organism/Pastmeetups";
import Meetup from "./components/navbar/Meetup";
import Footer from "./components/organism/Footer";
function App() {
  return (
    <div>
      
    <Navbar/>
    <Meetup/>
    <Header/>
    <Aboutmeetup/>
    <Member/>
    <Pastmeetups/>
    <Footer/>

    </div>

  );
}

export default App;
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './Components/Navbar/Navbar.js'
import Hero from './Components/Hero/Hero.js'


function Home() {
  return (
    <div className="App">
      <TopNavbar />
      <Hero />
    </div>
  );
}

export default Home;
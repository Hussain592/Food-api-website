import Blog from './Blog';
import Header from './Header';
import ContactUs from "./ContactUs";
import Treats from "./Treats";
import Footer from './Footer'; 
import Container from './Container';
import Services from "./Services"
import More from './More';
import About from './About';
import Containerpage from '../Container/Containepager';
import Dashboard from '../Dashboard/Dashboard';
import Sider from '../Dashboard/Sider';
import Navbar from '../Dashboard/Navbar';
import HomeDashboard from '../Dashboard/HomeDashboard';


export default function Home() {
  return (
    <>
      <Header />
      <Container/>
      <Blog />
      <Services/>
      <ContactUs /> 
       <More/>
       <About/>
      <Treats />
      <Footer /> 
      
      
     
    </>
  );
}

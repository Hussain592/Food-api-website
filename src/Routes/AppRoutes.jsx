import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Home';
import Blogpage from '../Pages/Blogpage';
import Contactuspage from '../Pages/Contactuspage';
import Servicespage from '../Pages/Servicespage';
import HomeDashboard from '../Dashboard/HomeDashboard';
import Containerpage from '../Container/Containepager';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/dashboard' element={<HomeDashboard />} />
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Servicespage />} />
      <Route path='/blog' element={<Blogpage />} />
      <Route path='/contactus' element={<Contactuspage />} />
      <Route path='/containerpage' element={<Containerpage />} />

    </Routes>
  );
}

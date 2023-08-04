import './App.css';
import { BrowserRouter as Router  , Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Navbar from './components/navbar';
import { QueryClient, QueryClientProvider  } from '@tanstack/react-query';
import { queries } from '@testing-library/react';


const App = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries : {
        refetchOnWindowFocus :true,
      }
    }
  })
  return (
<div className='App'>
  <QueryClientProvider client={client}>
    <Router>  
        <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about_Us" element={<AboutUs/>}/>
        <Route path = "/contact_Us" element={<ContactUs/>}/>
        <Route path = "*" element={<h1>YOU ARE NOT IN A PAGE 404</h1>}/>
      </Routes>
    </Router>
  </QueryClientProvider>



</div>
  );
}

export default App;

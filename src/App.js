
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './componets/Header';
import Footer from './componets/Footer';

export default function App(){
  return(

<Router>
            <div className="App">
               
                <Header />
                <Outlet />
                <Routes>
                    {/* <Route index element={<App/>} /> */}
                   <Route index element ={<Home/>}/>
                  <Route path="/home" element ={ <Home />}/>
                  <Route path="/about" element ={ <About />}/>
                  <Route path="/contact" element ={ <Contact />}/>  
                  
                </Routes>
               
                {/* <TestimonialCarousel /> */}
                 <Footer />
               
            </div>
        </Router>
    );
}
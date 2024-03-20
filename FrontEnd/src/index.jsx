import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
//import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
//import Works from "./pages/Works/Works";
//import Details from "./pages/Details/Details";
import NotFound from './pages/NotFound/NotFound'
//import { APP_ROUTES } from './utils/constants';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useUser } from './lib/customHooks';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <Header user={user} setUser={setUser} />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/Contact" element={<Contact />} />
              
              <Route path="*" element={<NotFound/>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();

//<Route path="/Works" element={<Works />} />
//<Route path="/Details/:id" element={<Details />} />
//<Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
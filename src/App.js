import logo from './logo.svg';
import './App.css';
import Saturday from './pages/Saturday';
import Sunday from './pages/Sunday';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<NavBar />}>
          <Route path="Home" element={<Home />}/>
            <Route path="Saturday" element={<Saturday/>} />
            <Route path="Sunday" element={<Sunday />} />
           

          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;

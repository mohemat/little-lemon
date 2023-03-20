import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
    <Header/>
    <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
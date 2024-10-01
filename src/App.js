import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact/Contact";
import { Routes, Route, Navigate } from 'react-router-dom'
import "./style1.css"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { SetPortfolioData,ShowLoading,HideLoading} from "./redux/rootSlice";
function App() {
  
  const [load, updateLoad] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const getPortfolioData = async () => {
      dispatch(ShowLoading()); // Set loading to true
      try {
        const response = await axios.get(`/api/portfolio/get-portfolio-data`);
        dispatch(SetPortfolioData(response.data));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(HideLoading()); // Set loading to false
      }
    };

    getPortfolioData();
  }, [dispatch]);
  return (
    <>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <div className="main_container">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

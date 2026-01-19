import React, { useContext } from 'react';
import NavBar from '../components/home/NavBar';
import Hero from '../components/home/Hero';
import { DarkModeContext } from '../context/DarkModeContext';
import { FiMoon, FiSun } from 'react-icons/fi';
import Works from '../components/home/Works';

const Home = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <NavBar />
      <Hero />
      <Works/>

      {/* Dark Mode Toggle */}
      <section className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-brand-primary text-white p-3 rounded-full shadow-md transition-all duration-300"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </section>
    </>
  );
};

export default Home;

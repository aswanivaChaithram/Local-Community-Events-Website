import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';
import { useConfirmedEvents } from '../Context/ConfirmedEventsContext';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { confirmedEvents } = useConfirmedEvents ? useConfirmedEvents() : { confirmedEvents: [] };
  const confirmedCount = confirmedEvents && confirmedEvents.length ? confirmedEvents.length : 0;
  // Close sidebar on resize to md and above
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  const handleScrollToEvents = (e) => {
    e.preventDefault();
    const eventsSection = document.getElementById('events-section');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
      setSidebarOpen(false);
    }
  };
  return (
    <nav className="flex justify-between items-center py-2 px-8 md:px-12
    lg:px-20 xl:px-[100px] w-full shadow-md bg-white relative">
      {/* Left side */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-10 h-10 sm:w-14 sm:h-14" />
        <span className="font-bold text-2xl md:text-4xl"><span className=
        'text-blue-600'>Event</span>Nest</span>
      </Link>

      {/* Right side: Navigation links for desktop */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-gray-700 hover:text-gray-900
         font-semibold text-xl">Home</Link>

        <a href="#events-section" onClick={handleScrollToEvents} className=
        "text-gray-700 hover:text-gray-900 font-semibold text-xl">Events</a>

        <div className="relative">
          <Link to="/upcoming" className="bg-blue-500 text-white px-4 py-2 
          rounded-full hover:bg-blue-600 font-semibold">Upcoming</Link>

          <div className="absolute top-[-14px] right-[-6px] w-6 h-6 bg-white
           rounded-full border border-blue-500 text-center">{confirmedCount}</div>
        </div>
      </div>

      {/* Sidebar toggle for mobile */}
      <button className="md:hidden block text-blue-600 text-3xl w-10 md:w-14 cursor-pointer" 
      onClick={() => setSidebarOpen(true)} aria-label="Open sidebar">
        &#9776;
      </button>

      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center 
        justify-center">
          <button className="absolute top-3 right-8 text-5xl text-blue-600 cursor-pointer" 
          onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
              &times;
          </button>

          <Link to="/" className="text-gray-700 hover:text-gray-900 font-semibold 
          text-xl mb-8" onClick={() => setSidebarOpen(false)}>Home</Link>
          <a href="#events-section" onClick={handleScrollToEvents} className=
          "text-gray-700 hover:text-gray-900 font-semibold text-xl mb-8">
             Events
          </a>

          <div className="relative mb-8">
            <Link to="/upcoming" className="bg-blue-500 text-white px-4 py-2 
            rounded-full hover:bg-blue-600 font-semibold text-lg" onClick={() => 
            setSidebarOpen(false)}>
              Upcoming
            </Link>
            <div className="absolute top-[-14px] right-[-6px] w-6 h-6 bg-white
             rounded-full border border-blue-500 text-center">{confirmedCount}</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

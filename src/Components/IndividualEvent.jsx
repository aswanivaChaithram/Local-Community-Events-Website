import React from 'react'
import { Link } from 'react-router-dom';

const IndividualEvent = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />

      <div className="p-4 bg-white shadow-inner flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2">{event.title}</h3>

        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <span>{event.date}</span>
          <span>{event.location}</span>
        </div>

        <Link to={`/events/${event.type}/${event.id}`} className="mt-auto
         bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 
         transition text-center">
          Show Details
        </Link>
      </div>
    </div>
  );
}

export default IndividualEvent
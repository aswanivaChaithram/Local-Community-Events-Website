import React from 'react'
import sports from '../assets/sports1.jpeg'

const IndividualEvent = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      
      {/* Event Image */}
      <img
        src={event.image} alt={event.title}
        className="w-full h-48 object-cover"
      />

      {/* Event Details */}
      <div className="p-4 bg-white shadow-inner flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2">{event.title}</h3>

        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <span>{event.date}</span>
          <span>{event.location}</span>
        </div>

        <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Join
        </button>
      </div>
    </div>
  );
}

export default IndividualEvent
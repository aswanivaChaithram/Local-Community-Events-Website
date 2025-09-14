import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../assets/data.js';
import { useConfirmedEvents } from '../Context/ConfirmedEventsContext';

const EventDetails = () => {
  const { type, id } = useParams();
  const event = eventsData.events.find(
    (e) => e.type === type && String(e.id) === String(id)
  );

  const [showRSVP, setShowRSVP] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [justJoined, setJustJoined] = useState(false);
  const { confirmedEvents, confirmEvent } = useConfirmedEvents();
  const alreadyJoined = confirmedEvents.some(e => e.id === event.id);

  if (!event) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 
      p-4">
        <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 
        text-center">
          <h2 className="text-2xl font-bold mb-4">Event not found</h2>
          <p className="text-gray-700">Sorry, the event you are looking for does
             not exist.</p>
        </div>
      </div>
    );
  }

  const handleConfirm = () => {
    if (!alreadyJoined) {
      confirmEvent(event);
      setJustJoined(true);
      setConfirmed(true);
    }
    // If already joined, do nothing (button will be disabled)
  };

  const handleCancel = () => {
    setShowRSVP(false);
    setConfirmed(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6 sm:p-8 
      md:p-10" style={{ maxWidth: '600px', width: '100%' }}>

        {/* Event Image */}
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* Event Title */}
        <h1 className="text-2xl font-bold mb-4 text-center">{event.title}</h1>

        {/* Event Description */}
        <p className="text-gray-700 mb-4">{event.description}</p>

        {/* Host */}
        <div className="mb-2">
          <span className="font-semibold">Host: </span>
          {event.host}
        </div>

        {/* Date */}
        <div className="mb-2">
          <span className="font-semibold">Date: </span>
          {event.date}
        </div>

        {/* Location */}
        <div className="mb-6">
          <span className="font-semibold">Location: </span>
          {event.location}
        </div>

        {/* Join Button */}
        <div className="text-center">
          <button
            onClick={() => setShowRSVP(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer
             hover:bg-blue-700 transition"
          >
            Join
          </button>
        </div>

        {/* RSVP Confirmation Modal */}
        {showRSVP && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center
           justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
              <h2 className="text-lg font-bold mb-4 text-center">Are you sure you 
                want to join this event?</h2>

              <div className="flex justify-center gap-4 mb-4">
                <button
                  onClick={handleConfirm}
                  className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer ${alreadyJoined ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={alreadyJoined}
                >
                  Confirm
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-red-600 text-white px-4 py-2 rounded
                   hover:bg-red-700 
                  transition cursor-pointer"
                >
                  {confirmed ? 'Close' : 'Cancel'}
                </button>
              </div>

              {confirmed && justJoined && (
                <div className="text-green-600 text-center font-medium">
                  You have successfully joined the event.
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default EventDetails;


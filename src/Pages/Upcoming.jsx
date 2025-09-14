import React from 'react';
import { useConfirmedEvents } from '../Context/ConfirmedEventsContext';

const Upcoming = () => {
  const { confirmedEvents, setConfirmedEvents } = useConfirmedEvents();

  const handleCancel = (id) => {
    setConfirmedEvents(confirmedEvents.filter(event => event.id !== id));
  };
  return (
    <div className="px-10 sm:px-12 md:px-12 lg:px-20 xl:px-[100px] py-10">
      <h2 className="text-2xl font-bold mb-6 text-left">Upcoming Events</h2>
      <div className="overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-2 sm:px-4 text-left font-semibold">Event Title</th>
                <th className="py-3 px-2 sm:px-4 text-left font-semibold">Date</th>
                <th className="py-3 px-2 sm:px-4 text-left font-semibold">Location</th>
                <th className="py-3 px-2 sm:px-4 text-center font-semibold">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {confirmedEvents.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-6 text-center text-gray-500">No upcoming events confirmed.</td>
                </tr>
              ) : (
                confirmedEvents.map(event => (
                  <tr key={event.id} className="shadow-sm">
                    <td className="py-2 px-2 sm:px-4">{event.title}</td>
                    
                    <td className="py-2 px-2 sm:px-4">{event.date}</td>
                    <td className="py-2 px-2 sm:px-4">{event.location}</td>
                    <td className="py-2 px-2 sm:px-4 text-center">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition sm:w-auto cursor-pointer"
                        onClick={() => handleCancel(event.id)}>
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
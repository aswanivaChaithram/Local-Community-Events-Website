import React from 'react'
import { useState } from 'react';
import IndividualEvent from './IndividualEvent';
import eventsData from '../assets/data.js'

const Events = () => {
  const [filterType, setFilterType] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterDate, setFilterDate] = useState('');

  // Extract unique types and locations
  const types = [...new Set(eventsData.events.map(event => event.type))];
  const locations = [...new Set(eventsData.events.map(event => event.location))];

  const filteredEvents = eventsData.events.filter(event => {
    return (
      (filterType === '' || event.type === filterType) &&
      (filterLocation === '' || event.location === filterLocation) &&
      (filterDate === '' || event.date === filterDate)
    );
  });

  return (
    <div className="px-10 sm:px-12 md:px-12 lg:px-20 xl:px-[100px] py-10">
      <h2 className="text-2xl font-bold mb-6 text-left">Explore our Events</h2>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 mb-8">
        
        {/* Type Filter */}
        <select
          className="border rounded px-3 py-2"
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
        >
          <option value="">All Types</option>
          {types.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>

        {/* Date Filter */}
        <input
          type="date"
          className="border rounded px-3 py-2"
          value={filterDate}
          onChange={e => setFilterDate(e.target.value)}
        />

        {/* Location Filter */}
        <select
          className="border rounded px-3 py-2"
          value={filterLocation}
          onChange={e => setFilterLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
       gap-6">
          {filteredEvents.length === 0 ? (
            <div className="col-span-full text-center text-lg text-gray-500 py-8">
              No upcoming events
            </div>
          ) : (
            filteredEvents.map(event => (
              <IndividualEvent key={event.id} event={event} />
            ))
          )}
      </div>
    </div>
  );
}

export default Events
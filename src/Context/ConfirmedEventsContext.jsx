import React, { createContext, useContext, useState } from 'react';

const ConfirmedEventsContext = createContext();

export const useConfirmedEvents = () => useContext(ConfirmedEventsContext);

export const ConfirmedEventsProvider = ({ children }) => {
  const [confirmedEvents, setConfirmedEvents] = useState([]);

  // Add event only if not already present
  const confirmEvent = (event) => {
    if (!confirmedEvents.some(e => e.id === event.id)) {
      setConfirmedEvents([...confirmedEvents, event]);
      return true; // Added
    }
    return false; // Already joined
  };

  // Remove event by id
  const removeEvent = (id) => {
    setConfirmedEvents(confirmedEvents.filter(e => e.id !== id));
  };

  return (
    <ConfirmedEventsContext.Provider value={{ confirmedEvents, confirmEvent, removeEvent, setConfirmedEvents }}>
      {children}
    </ConfirmedEventsContext.Provider>
  );
};

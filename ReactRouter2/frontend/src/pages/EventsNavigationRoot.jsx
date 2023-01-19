import React from 'react';
import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/EventsNavigation';

const EventsNavigationRoot = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default EventsNavigationRoot;

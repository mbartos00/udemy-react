import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';

const Events = () => {
  const data = useLoaderData();

  return (
    <Suspense fallback={<p>loading...</p>}>
      <Await resolve={data.events}>
        {events => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
};

export default Events;

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    const data = await response.json();
    return data.events;
  }
};

export const eventsLoader = () => {
  return defer({
    events: loadEvents(),
  });
};

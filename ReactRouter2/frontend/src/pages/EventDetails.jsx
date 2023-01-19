import React, { Suspense } from 'react';
import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

const EventDetails = () => {
  const { event, events } = useRouteLoaderData('event-detail');
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {loadEvents => <EventsList events={loadEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetails;

const loadEvent = async id => {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for event' },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.event;
  }
};

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return json({ message: 'Could not fetch events.' }, { status: 500 });
  } else {
    const data = await response.json();
    return data.events;
  }
};

export const eventDetailsLoader = async ({ request, params }) => {
  return defer({
    event: await loadEvent(params.id),
    events: loadEvents(),
  });
};

export const eventDeleteAction = async ({ request, params }) => {
  const response = await fetch(`http://localhost:8080/events/${params.id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: 'Could not delete event' }, { status: 500 });
  }

  return redirect('/events');
};

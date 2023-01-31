
import { Suspense } from 'react';
import { json, redirect, useRouteLoaderData, defer, Await } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData('event-detail');
  return <>
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={event}>
        {
          (loadedEvent) => <EventItem event={loadedEvent} />
        }
      </Await>
    </Suspense>

    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>

      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  </>;
};

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id);
  if (!response.ok) {
    throw json({ message: 'could not fetch detail for this event' }, { status: 500 })
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    return json({ message: 'Could not fetch events' }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ params, request }) {
  const id = params.eventId;
  return defer({
    event: await loadEvent(id), // wait this data
    events: loadEvents(), // defer
  })

}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, { method: request.method });
  if (!response.ok) {
    throw json({ message: 'could not delete event' }, { status: 500 })
  }
  return redirect('/events');
}
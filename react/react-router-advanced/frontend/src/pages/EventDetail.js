
import { json, redirect, useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');
  return <>
    <EventItem event={data.event} />
  </>;
};

export default EventDetailPage;


export async function loader({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId);


  if (!response.ok) {
    throw json({ message: 'could not fetch detail for this event' }, { status: 500 })
  } else {
    return response;
  }

}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, { method: request.method });
  if (!response.ok) {
    throw json({ message: 'could not delete event' }, { status: 500 })
  }
  return redirect('/events');
}
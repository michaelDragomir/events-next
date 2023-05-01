import { getEventById, getUpcomingEvents } from '@/utils/api';

import EventSummary from '@/components/event-detail/eventSummary';
import EventLogistics from '@/components/event-detail/eventItem';
import EventContent from '@/components/event-detail/eventContent';

const EventDetailPage = (props) => {
	const { selectedEvent } = props;

	if (!selectedEvent) {
		return <p>LOADING....</p>;
	}

	return (
		<>
			<EventSummary title={selectedEvent.title} />
			<EventLogistics
				address={selectedEvent.address}
				date={selectedEvent.date}
				image={selectedEvent.image}
				imageAlt={selectedEvent.title}
			/>
			<EventContent>
				<p>{selectedEvent.description}</p>
			</EventContent>
		</>
	);
};

export async function getStaticPaths() {
	const allEvents = await getUpcomingEvents();
	const ids = allEvents.map((id) => id.id);
	const pathWithParams = ids.map((id) => ({ params: { eventId: id } }));

	return {
		paths: pathWithParams,
		fallback: true,
	};
}

export async function getStaticProps(context) {
	const { params } = context;

	const eventId = params.eventId;
	const eventById = await getEventById(eventId);
	return {
		props: {
			selectedEvent: eventById,
		},
		revalidate: 30,
	};
}

export default EventDetailPage;

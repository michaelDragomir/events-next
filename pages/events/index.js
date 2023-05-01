import { getAllEvents } from '@/utils/api';
import { useRouter } from 'next/router';
import EventList from '@/components/events/eventList';
import EventsSearchBox from '@/components/events/eventsSearchBox';

const AllEventsPage = (props) => {
	const { allEvents } = props;
	const router = useRouter();

	const findEventsHandler = (selectedYear, selectedMonth) => {
		const fullPath = `/events/${selectedYear}/${selectedMonth}`;
		router.push(fullPath);
	};

	return (
		<>
			<EventsSearchBox onSearch={findEventsHandler} />
			<EventList items={allEvents} />
		</>
	);
};

export async function getStaticProps() {
	const allEvents = await getAllEvents();

	return {
		props: {
			allEvents: allEvents,
		},
		revalidate: 60,
	};
}

export default AllEventsPage;

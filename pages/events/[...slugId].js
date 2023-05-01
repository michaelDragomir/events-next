import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EventList from '@/components/events/eventList';
import ResultsTitle from '@/components/events/resultsTitle';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/errorAlert';
import useSWR from 'swr';

const FilteredEventsPage = () => {
	const [loadedEvents, setLoadedEvents] = useState();
	const router = useRouter();

	const filterData = router.query.slugId;

	const fetcher = (...args) =>
		fetch(...args).then((response) => response.json());

	const { data, error } = useSWR(
		'https://nexteventsproject-default-rtdb.firebaseio.com/events.json',
		fetcher,
	);

	useEffect(() => {
		if (data) {
			const events = [];

			for (const key in data) {
				events.push({
					id: key,
					...data[key],
				});
			}
			setLoadedEvents(events);
		}
	}, [data]);

	if (!loadedEvents) {
		return <p className='center'>Loading...</p>;
	}

	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];

	const yearValue = +filteredYear;
	const monthValue = +filteredMonth;

	if (
		isNaN(yearValue) ||
		isNaN(monthValue) ||
		yearValue > 2025 ||
		yearValue < 2021 ||
		monthValue < 1 ||
		monthValue > 12 ||
		error
	) {
		return (
			<>
				<ErrorAlert>
					<p>Invalid Filter. Please adjust your values!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show all Events</Button>
				</div>
			</>
		);
	}

	let filteredEvents = loadedEvents.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === yearValue &&
			eventDate.getMonth() === monthValue - 1
		);
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>
					<p>No Events found for the chosen date.</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show all Events</Button>
				</div>
			</>
		);
	}

	const dateObj = new Date(yearValue, monthValue - 1);
	return (
		<>
			<ResultsTitle date={dateObj} />
			<EventList items={filteredEvents} />
		</>
	);
};

export default FilteredEventsPage;

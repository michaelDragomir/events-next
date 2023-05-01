export async function getAllEvents() {
	const response = await fetch(
		'https://nexteventsproject-default-rtdb.firebaseio.com/events.json',
	);
	const data = await response.json();
	const allEvents = [];

	for (const key in data) {
		allEvents.push({
			id: key,
			...data[key],
		});
	}

	return allEvents;
}

export async function getUpcomingEvents() {
	const allEvents = await getAllEvents();

	let upComingEvent = allEvents.filter((event) => {
		const eventDate = new Date(event.date);
		const currentDate = new Date();

		if (
			eventDate.getMonth() > currentDate.getMonth() &&
			eventDate.getFullYear() > currentDate.getFullYear() &&
			eventDate.getDay() > currentDate.getDay()
		) {
		}
		return null;
	});

	return upComingEvent;
}

export async function getFilteredEvents(dateFilter) {
	const allEvents = await getAllEvents();
	const { year, month } = dateFilter;

	let filteredEvents = allEvents.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export async function getEventById(id) {
	const allEvents = await getAllEvents();
	const eventById = allEvents.find((event) => event.id === id);

	return eventById;
}

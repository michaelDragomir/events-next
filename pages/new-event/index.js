import Head from 'next/head';
import NewEvent from '@/components/events/eventForm';
import { getDatabase, ref, push } from 'firebase/database';
import { useRouter } from 'next/router';

const NewMeetupPage = () => {
	const router = useRouter();

	function writeUserData(eventData) {
		const db = getDatabase();
		push(ref(db, '/events'), eventData);

		router.push('/');
	}

	return (
		<>
			<Head>
				<title>Add a new meetup</title>
				<meta name='description' content='this is where you add a new meetup' />
			</Head>
			<NewEvent onAddEvent={writeUserData} />
		</>
	);
};

export default NewMeetupPage;

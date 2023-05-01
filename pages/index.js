import HomePageMessage from '@/components/ui/homePageMesasge';
import Head from 'next/head';

const HomePage = () => {
	return (
		<>
			<Head>
				<title>Next meetup Page</title>
				<meta name='description' content='Coding meetings in your area.' />
			</Head>
			<HomePageMessage />
		</>
	);
};

export default HomePage;

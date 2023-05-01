import classes from './homePageMessage.module.scss';

function HomePageMessage(props) {
	return (
		<>
			<div className={classes.header}>
				<h1>Hello Altice!</h1>
				<h3>
					Thank you for your consideration. This is a quick demo I put together
					over the weekend.
				</h3>
			</div>
			<div className={classes.content}>
				<h1>Quick note about me:</h1>
				<h3>
					Been a front end developer at motortrend for over three years. Worked
					on several front end teams with different codebases, each complex in
					its own way. Both codebases were React/redux, graphQL, and various
					microservices.
				</h3>
			</div>
			<div className={classes.list}>
				<h3>A Few quick points about this demo:</h3>
				<ul>
					<li>This is connected to FireBase.</li>
					<li>You&apos;re able to add a new event.</li>
					<li>You&apos;re able to search for events with a dropdown menu.</li>
					<li>This is an SSG site as well as fetches data client side.</li>
					<li>shows all events as well as events filtered by dates.</li>
					<li>Styling is not that great but it was not my main focus.</li>
					<li>This is responsive.</li>
				</ul>
			</div>
		</>
	);
}

export default HomePageMessage;

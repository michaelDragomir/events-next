import EventItem from './eventItem';

import styles from './eventList.module.scss';

const EventList = (props) => {
	const { items } = props;

	return (
		<>
			<ul className={styles.list}>
				{items.map((item) => (
					<EventItem
						key={item.id}
						id={item.id}
						title={item.title}
						date={item.date}
						image={item.image}
						address={item.address}
					/>
				))}
			</ul>
		</>
	);
};

export default EventList;

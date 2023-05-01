import Button from '../ui/button';
import Image from 'next/image';
import AddressIcon from '../icons/address';
import DateIcon from '../icons/date';
import RightArrowIcon from '../icons/rightArrow';

import styles from './eventItem.module.scss';

const EventItem = (props) => {
	const { title, image, id, address, date } = props;

	const readableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const formatAddress = address.replace(', ', '\n');
	const exploreLink = `/events/${id}`;
	return (
		<>
			<li className={styles.item}>
				<Image src={image} alt={title} height={160} width={250} />
				<div className={styles.content}>
					<div className={styles.summary}>
						<h2>{title}</h2>
						<div className={styles.date}>
							<DateIcon />
							{readableDate}
						</div>
						<div className={styles.address}>
							<AddressIcon />
							<address>{formatAddress}</address>
						</div>
					</div>
					<div className={styles.actions}>
						<Button link={exploreLink}>
							<span>explore event</span>
							<span className={styles.icon}>
								<RightArrowIcon />
							</span>
						</Button>
					</div>
				</div>
			</li>
		</>
	);
};

export default EventItem;

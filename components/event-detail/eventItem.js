import AddressIcon from '../icons/address';
import DateIcon from '../icons/date';
import LogisticsItem from './eventItems';
import Image from 'next/image';

import classes from './eventItem.module.scss';

function EventLogistics(props) {
	const { date, address, image, imageAlt } = props;

	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const addressText = address.replace(', ', '\n');

	return (
		<section className={classes.logistics}>
			<div className={classes.image}>
				<Image src={image} alt={imageAlt} height={325} width={325} />
			</div>
			<ul className={classes.list}>
				<LogisticsItem icon={DateIcon}>
					<time>{humanReadableDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={AddressIcon}>
					<address>{addressText}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
}

export default EventLogistics;

import Link from 'next/link';
import styles from './header.module.scss';

const MainHeader = (props) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.logo}>
					<Link href='/'>Home</Link>
				</div>
				<nav className={styles.navigation}>
					<ul className={styles.listItems}>
						<li>
							<Link href='/events'>Browse All Events</Link>
						</li>
						<li>
							<Link href='/new-event'>Add Event</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default MainHeader;

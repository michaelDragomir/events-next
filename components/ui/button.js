import Link from 'next/link';

import styles from './button.module.scss';

const Button = (props) => {
	const { link } = props;

	if (link) {
		return (
			<Link className={styles.btn} href={link}>
				{props.children}
			</Link>
		);
	}
	return (
		<button className={styles.btn} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;

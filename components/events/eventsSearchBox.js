import Button from '../ui/button';
import { useRef } from 'react';

import styles from './eventsSearchBox.module.scss';

const EventsSearchBox = (props) => {
	const dateInputRef = useRef();
	const monthInputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const selectedYear = dateInputRef.current.value;
		const selectedMonth = monthInputRef.current.value;

		props.onSearch(selectedYear, selectedMonth);
	};

	return (
		<>
			<form className={styles.form} onSubmit={submitHandler}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor='year'>Year</label>
						<select id='year' ref={dateInputRef}>
							<option value='2023'>2023</option>
							<option value='2024'>2024</option>
						</select>
					</div>
					<div className={styles.control}>
						<label htmlFor='month'>Month</label>
						<select id='month' ref={monthInputRef}>
							<option value='1'>Jan</option>
							<option value='2'>Feb</option>
							<option value='3'>March</option>
							<option value='4'>April</option>
							<option value='5'>May</option>
							<option value='6'>June</option>
							<option value='7'>July</option>
							<option value='8'>Aug</option>
							<option value='9'>Sept</option>
							<option value='10'>Oct</option>
							<option value='11'>Nov</option>
							<option value='12'>Dec</option>
						</select>
					</div>
				</div>
				<Button>Find Events</Button>
			</form>
		</>
	);
};

export default EventsSearchBox;

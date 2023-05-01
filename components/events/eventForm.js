import { useRef } from 'react';

import Card from '../ui/card';
import classes from './eventForm.module.scss';

function NewMeetupForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();
	const dateInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const enteredDate = dateInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
			date: enteredDate,
		};

		props.onAddEvent(meetupData);
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>Event Name</label>
					<input type='text' required id='title' ref={titleInputRef} />
				</div>
				<div className={classes.control}>
					<div className={classes.textInfo}>
						<p>
							Due to the way Next.js remote Patterns work to protect app for
							malicious users. I&apos;ve included these image urls examples.
							Copy and paste in the &#39;Event Image&#39; field:
						</p>
						<p>
							https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/640px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg
						</p>
						<p>
							https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Teatro_de_M%C3%A9rida%2C_Espa%C3%B1a%2C_2017_18.jpg/640px-Teatro_de_M%C3%A9rida%2C_Espa%C3%B1a%2C_2017_18.jpg
						</p>
					</div>
					<label htmlFor='image'>Event Image</label>
					<input type='url' ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='address'>Address</label>
					<input
						type='text'
						required
						id='address'
						placeholder='ex: 1234 Somewhere street, LA CA 90028'
						ref={addressInputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor='date'>Event Date</label>
					<input type='text' required id='date' ref={dateInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>Description</label>
					<textarea
						id='description'
						required
						rows='5'
						ref={descriptionInputRef}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;

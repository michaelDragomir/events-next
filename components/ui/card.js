import classes from './card.module.scss';

function Card(props) {
	return <div className={classes.card}>{props.children}</div>;
}

export default Card;

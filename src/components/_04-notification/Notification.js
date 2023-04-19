import css from './notifiction.module.scss';

const Notification = ({ message }) => {
	return (
		<div>
		<p className={css['feedback__notification']}>
			{message}
		 </p>
		</div>
	)	
}
  
export default Notification;
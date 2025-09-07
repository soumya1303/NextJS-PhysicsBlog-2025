import ReactDOM from 'react-dom';

import classes from './notification.module.css';

const Notification=({notificationState})=>{
  
  const { title, msg, status } = notificationState;

  let statusClasses = '';

  if (status === 'Success') {
    statusClasses = classes.success;
  }

  if (status === 'Error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    ReactDOM.createPortal(    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{msg}</p>
    </div>,document.getElementById("notification"))

  );
}

export default Notification;

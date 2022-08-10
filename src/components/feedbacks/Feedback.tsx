import classes from 'components/feedbacks/Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Feedback = (props:any) => {

   const formatDate = (todayDate: Date) => {
     var d = todayDate,
       month = "" + (d.getMonth() + 1),
       day = "" + d.getDate(),
       year = d.getFullYear();

     if (month.length < 2) month = "0" + month;
     if (day.length < 2) day = "0" + day;

     return [year, month, day].join("-");
   };

    return (
      <>
        <div className={classes.singleFeedBack}>
          <h3>{props.data.user}</h3>
          <div className={classes.icons}>
            {[...Array(props.data.rating)].map((data, index) => {
              return (
                <span key={index} className={classes.checked}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              );
            })}
          </div>
          <p className={classes.description}>{props.data.comment}</p>
        </div>
      </>
    );
}
export default Feedback;
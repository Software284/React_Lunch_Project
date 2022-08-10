import classes from 'components/Header/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
const Header = ({ commentsLength,starData } :any) => {
  const starDataValue = Math.round(starData.averageRating);
  return (
    <div className={classes.header}>
      <p>Ratings and reviews</p>
      <div className={classes.content}>
        {[...Array(starDataValue)].map((data,index) => {
          return (
            <span className={classes.checked} key={index}>
              <FontAwesomeIcon icon={faStar} />
            </span>
          );
        })}
        {
          [...Array(5-starDataValue)].map((data,index) => {
            return (
              <span className={classes.unchecked} key={index}>
                <FontAwesomeIcon icon={faStar} />
              </span>
            );
          })
        }

        <span className={classes.reviews}>
          {commentsLength.total_reviews} reviews
        </span>
      </div>
    </div>
  );
};
export default Header;
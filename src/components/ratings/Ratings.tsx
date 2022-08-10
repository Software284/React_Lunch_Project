import classes from 'components/ratings/Ratings.module.scss';
import Rating from 'components/ratings/Rating';
const Ratings = ({data}:any) => {
  return (
    <div className={classes.ratingBreakDown}>
      {data.map((data: any, index: any) => {
        return <Rating data={data} key={index} />;
      })}
    </div>
  );
};
export default Ratings;
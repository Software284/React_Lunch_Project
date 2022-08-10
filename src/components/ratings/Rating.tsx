import classes from 'components/ratings/Rating.module.scss';
import Progressbar from 'components/ratings/Progressbar';
const Rating = ({data}:any) => {
    return (
      <div className={classes.row}>
        <div className={classes.side}>
          <div>{data.left}</div>
        </div>
        <div className={classes.middle}>
          <Progressbar widthData={data.middle}/>
        </div>
        <div className={classes.side + " " + classes.right}>
          <div>{data.right}</div>
        </div>
      </div>
    );
}
export default Rating;
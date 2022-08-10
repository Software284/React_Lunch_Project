import classes from 'components/Ratings/Progressbar.module.scss';
const ProgressBar = ({ widthData }:any) => {
  return (
    <div className={classes.progressBarContainer}>
      <div
        className={classes.progressBarContent}
        style={{ width: `${widthData}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
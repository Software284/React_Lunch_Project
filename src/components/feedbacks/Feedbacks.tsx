import classes from 'components/feedbacks/Feedbacks.module.scss';
import Feedback from 'components/feedbacks/Feedback';
const FeedBacks = ({ comments, myDate }: any) => {
  const data = comments.map((data: any, index: any) => {
    return <Feedback data={data} key={index} myDate={myDate} />;
  });
  return <div className={classes.feedBacksContainer}>{data}</div>;
};
export default FeedBacks;
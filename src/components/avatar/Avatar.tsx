import classes from "components/avatar/Avatar.module.scss";

const Avatar = ({ dataLength }: any) => {
  return (
    <div className={classes.avatar}>
      <div>
        <span>{dataLength.averageRating.toFixed(2)}</span>
        <p>rating</p>
      </div>
    </div>
  );
};
export default Avatar;
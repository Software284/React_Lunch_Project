import classes from 'components/Card/Card.module.scss';
import moment from 'moment';
const Card = (props:any) => {
    return (
      <div className={classes.card}>
        <div className={classes.itemInformation}>
          <input
            type="date"
            id="date"
            name="date"
            value={moment(new Date(props.date)).format("YYYY-MM-DD")}
            onChange={(event) => props.onChanged(event)}
          />
          <div className={classes.right}>
            <h6>
              Veg: <span>{props.extra.veg_count}</span>
            </h6>
            <h6>
              NonVeg: <span>{props.extra.nonveg_count}</span>
            </h6>
          </div>
        </div>
      </div>
    );
}
export default Card;

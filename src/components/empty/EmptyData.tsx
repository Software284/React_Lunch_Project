import classes from 'components/empty/EmptyData.module.scss';
import {useRouter} from 'next/router';
const ErrorAlert = (props:any) => {
  const router = useRouter();
    return (
      <div>
        <div className={classes.errorContainer}>
          <h2>{props.children}</h2>
        </div>
      </div>
    );
    
}
export default ErrorAlert;
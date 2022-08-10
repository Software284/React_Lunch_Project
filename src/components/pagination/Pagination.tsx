/* eslint-disable @next/next/no-html-link-for-pages */
import classes from 'components/Pagination/Pagination.module.scss';
const Pagination = ({ totalPosts, activeIndex,paginate }: any) => {
  const pageNumbers: any = [];
  for (let i = 1; i <= Math.ceil(totalPosts.total_reviews / 10); i++) {
    pageNumbers.push(i);
  }
  

  return (
    <div className={classes.pagination}>
      <ul className={classes.content}>
        {pageNumbers.map((num: any) => {
            return <li key={num}  className={activeIndex === num ? `${classes.active}` : ""} >
              <a onClick={(event) => paginate(event, num)} href="">
                {num}
              </a>
            </li>;
        })}
      </ul>
    </div>
  );
};
export default Pagination;
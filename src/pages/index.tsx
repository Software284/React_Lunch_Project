import {useState} from 'react';
import Header from "components/header/Header";
import Avatar from "components/avatar/Avatar";
import Ratings from "components/ratings/Ratings";
import Feedbacks from "components/feedbacks/Feedbacks";
import Card from "components/card/Card";
import Pagination from "components/pagination/Pagination";
import axios from "axios";
import Spinner from "components/spinner/Spinner";
import ErrorAlert from "components/empty/EmptyData";
import { getLunchData } from 'pages/api/lunch';
import moment from "moment";

const Home = (props: any) => {
  const date = moment(new Date()).format("YYYY-MM-DD");
  const [todayDate, setTodayDate] = useState(date);
  const [loading, setLoading] = useState(false);
  const [myActive, setMyActive] = useState(1);





  const formatData = (data: any) => {
    
    const comments: any = data[1];
    const all_comments = [];
    for (const key in comments) {
      all_comments.push({
        ...comments[key],
      });
    }

    const displayCardData: any = {
      veg_count: data[2].veg_count,
      nonveg_count: data[2].nonveg_count,
    };

    const total_length = data[2].total_reviews;

    const one_percentage = (data[2].oneRating / total_length) * 100;
    const two_percentage = (data[2].twoRating / total_length) * 100;
    const three_percentage = (data[2].threeRating / total_length) * 100;
    const four_percentage = (data[2].fourRating / total_length) * 100;
    const five_percentage = (data[2].fiveRating / total_length) * 100;

    const ratingBreakDownData = [
      {
        left: 5,
        middle: five_percentage,
        right: data[2].oneRating,
      },
      {
        left: 4,
        middle: four_percentage,
        right: data[2].twoRating,
      },
      {
        left: 3,
        middle: three_percentage,
        right: data[2].threeRating,
      },
      {
        left: 2,
        middle: two_percentage,
        right: data[2].fourRating,
      },
      { left: 1, middle: one_percentage, right: data[2].fiveRating },
    ];

    const totalReviewData = { total_reviews: data[2].total_reviews };
    const avatarData = { averageRating: data[2].averageRating };
 

    return {
      all_comments: all_comments,
      display_CardData: displayCardData,
      total_length: total_length,
      ratingBreakDownData: ratingBreakDownData,
      totalReviewData: totalReviewData,
      avatarData: avatarData,
    };
  };

  const all_datas = formatData(props.data);

    const [allData, setAllData] = useState({
    all_comments: all_datas.all_comments,
    display_CardData: all_datas.display_CardData,
    total_length: all_datas.total_length,
    ratingBreakDownData: all_datas.ratingBreakDownData,
    totalReviewData: all_datas.totalReviewData,
    avatarData: all_datas.avatarData,
  });

  
  const dateChangedHandler = (event: any) => {
    event.preventDefault();

    const data = event.target.value;
    setLoading(true);

    axios
      .get(`https://lunch.pairlab.ai/api/ratings?date=${data}`)
      .then((response) => {
        setLoading(false);
        setMyActive(1);
        setTodayDate(moment(new Date(data)).format("YYYY-MM-DD"));

        const my_data = response.data;
        const lunch = [];
        for (const key in my_data) {
          lunch.push({
            ...my_data[key],
          });
        }
        const all_datas = formatData(lunch);

        setAllData({
          all_comments: all_datas.all_comments,
          display_CardData: all_datas.display_CardData,
          total_length: all_datas.total_length,
          ratingBreakDownData: all_datas.ratingBreakDownData,
          totalReviewData: all_datas.totalReviewData,
          avatarData: all_datas.avatarData,
        });


      })
      .catch((error) => {
        console.log(error);
      });
  };


  const paginateHandler = (event: any, num: any) => {
    event.preventDefault();
    const mydate = todayDate;
    setLoading(true);
    axios
      .get(`https://lunch.pairlab.ai/api/ratings?date=${mydate}&page=${num}`)
      .then((response) => {
        setLoading(false);
        const comments = response.data.data;
        const my_comments: any = [];
        for (const key in comments) {
          my_comments.push({
            ...comments[key],
          });
        }
        setAllData({ ...allData, all_comments: my_comments });
        setMyActive(num);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let body_data: any;
  if (allData.all_comments.length > 0) {
    body_data = (
      <div>
        <Feedbacks comments={allData.all_comments} myDate={todayDate} />
        <Pagination
          totalPosts={allData.totalReviewData}
          paginate={paginateHandler}
          activeIndex={myActive}
        />
      </div>
    );
  } else {
    body_data = (
      <div>
        <Card
          extra={allData.display_CardData}
          onChanged={dateChangedHandler}
          date={todayDate}
        />
        <ErrorAlert>No Data To Display</ErrorAlert>
      </div>
    );
  }

  if (loading) {
    body_data = <Spinner />;
  }

  return (
    <div className="HomeLayout">
      <div className="Container">
        {allData.all_comments.length > 0 ? (
          <div>
            <Card
              extra={allData.display_CardData}
              onChanged={dateChangedHandler}
              date={todayDate}
            />
            <Header
              commentsLength={allData.totalReviewData}
              starData={allData.avatarData}
            />
            <div className="RatingBreakDownContainer">
              <Avatar dataLength={allData.avatarData} />
              <Ratings data={allData.ratingBreakDownData} />
            </div>
          </div>
        ) : null}
        {body_data}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const launchData = await getLunchData();
  return {
    props: {
      data: launchData,
    },
    revalidate: 30,
  };
}


export default Home;

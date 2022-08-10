import moment from "moment";
export async function getLunchData() {
  const date = moment(new Date()).format("YYYY-MM-DD");
  const response = await fetch(
    `https://lunch.pairlab.ai/api/ratings?date=${date}`
  );
  return await response.json();
}

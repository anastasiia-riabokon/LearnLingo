import ReviewItem from "./ReviewItem";

const ReviewList = ({reviews}) => {
  return (
    <ul>
      {reviews.map((review) => (
        <li>
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
};
export default ReviewList;

import ReviewItem from "./ReviewItem";

const ReviewList = ({reviews}) => {
  return (
    <ul>
      {reviews.map((review, i) => (
        <li key={i}>
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
};
export default ReviewList;

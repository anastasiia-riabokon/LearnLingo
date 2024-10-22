import ReviewItem from "./ReviewItem";

const ReviewList = ({reviews}) => {
  return (
    <ul className="flex flex-col gap-[32px] mb-[32px]">
      {reviews.map((review, i) => (
        <li key={i}>
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
};
export default ReviewList;

import Icon from "../Icon/Icon";

const ReviewItem = ({review}) => {
  return (
    <>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <h3>{review.reviewer_name}</h3>
        <Icon name="star" />
        <p>{review.reviewer_rating}</p>
      </div>

      <p>{review.comment}</p>
    </>
  );
};
export default ReviewItem;

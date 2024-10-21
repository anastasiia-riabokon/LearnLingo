import Icon from "../Icon/Icon";
import Avatar from "./Avatar";

const ReviewItem = ({review}) => {
  return (
    <>
      <div>
        <Avatar src={review.reviewer_avatar} alt="avatar reviewer" w={44} h={44} />
        <h3>{review.reviewer_name}</h3>

        <div className="flex gap-[8px]">
          <Icon name="star" w={16} h={16} />
          <p>{review.reviewer_rating}</p>
        </div>
      </div>

      <p>{review.comment}</p>
    </>
  );
};
export default ReviewItem;

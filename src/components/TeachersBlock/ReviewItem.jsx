import Icon from "../Icon/Icon";
import Avatar from "./Avatar";

const ReviewItem = ({review}) => {
  return (
    <>
      <div className="flex gap-[12px] items-start mb-[16px]">
        <Avatar src={review.reviewer_avatar} alt="avatar reviewer" w={44} h={44} />

        <div>
          <h3 className="subtitle-card">{review.reviewer_name}</h3>

          <div className="flex gap-[8px] items-center text-card">
            <Icon name="star" w={16} h={16} />
            <p>{review.reviewer_rating}</p>
          </div>
        </div>
      </div>

      <p className="text-card">{review.comment}</p>
    </>
  );
};
export default ReviewItem;

import {useState} from "react";
import CustomButton from "../Custom/CustomButton";
import Icon from "../Icon/Icon";
import Avatar from "./Avatar";
import ReviewList from "./ReviewList";
import TagsList from "./TagsList";

const TeachersCard = ({teacher}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="relative w-[120px] h-[120px] rounded-full border-[3px] border-[var(--hover-color)] flex justify-center items-center flex-shrink-0">
        <Avatar src={teacher.avatar_url} alt="avatar teacher" w={96} h={96} />

        <div className="absolute top-[16px] right-[20px] w-[12px] h-[12px] rounded-full bg-[var(--white)] flex justify-center items-center ">
          <div className="w-[8px] h-[8px] rounded-full bg-[#38CD3E]"></div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-bold leading-[1.5] text-[var(--gray)]">Languages</p>
            <h2 className="font-bold leading-[1] text-[24px]">
              {teacher.name}&nbsp;{teacher.surname}
            </h2>
          </div>

          <ul className="flex flex-wrap gap-[32px] font-bold leading-[1.5] mr-[90px]">
            <li className="item_header-card flex gap-[8px] items-center">
              <Icon name={"book"} w={16} h={16} fill={"none"} stroke={"var(--icon-color)"} />
              <p>Lessons online</p>
            </li>
            <li className="item_header-card">Lessons done:&nbsp;{teacher.lessons_done}</li>
            <li className="item_header-card flex gap-[8px] items-center">
              <Icon name={"star"} w={16} h={16} />
              <p>Rating:&nbsp;{teacher.rating}</p>
            </li>
            <li className="item_header-card">
              Price / 1 hour: <span className="text-[#38CD3E]">{teacher.price_per_hour}$</span>
            </li>
          </ul>

          <div className="absolute top-[24px] right-[24px]">
            <Icon name={"heart"} w={26} h={26} fill={"none"} stroke={"var(--icon-color)"} />
          </div>
        </div>

        <div>
          <p>
            Speaks:&nbsp;
            {teacher.languages.length > 1 ? teacher.languages.join(", ") : teacher.languages}
          </p>

          <p>Lesson Info:&nbsp;{teacher.lesson_info}</p>
          <p>Conditions:&nbsp;{teacher.conditions.join(" ")}</p>
          <p>{teacher.experience}</p>
        </div>

        {isShow ? (
          <>
            <ReviewList reviews={teacher.reviews} />
            <CustomButton>Book trial lesson</CustomButton>
          </>
        ) : (
          <button onClick={() => setIsShow(true)}>Read more</button>
        )}

        <TagsList levels={teacher.levels} />
      </div>
    </>
  );
};
export default TeachersCard;

import CustomButton from "../Custom/CustomButton";
import Icon from "../Icon/Icon";
import ReviewList from "./ReviewList";

const TeachersCard = ({teacher}) => {
  return (
    <>
      <div>
        <img src={teacher.avatar_url} alt="avatar teacher" />
      </div>

      <div>
        <div>
          <div>
            <p>Languages</p>
            <h2>
              {teacher.name}&nbsp;{teacher.surname}
            </h2>
          </div>

          <div>
            <ul>
              <li>
                <Icon name={"book"} />
                <p>Lessons online</p>
              </li>
              <li>Lessons done:&nbsp;{teacher.lessons_done}</li>
              <li>
                <Icon name={"star"} />
                <p>Rating:&nbsp;{teacher.rating}</p>
              </li>
              <li>Price / 1 hour: {teacher.price_per_hour}$</li>
            </ul>

            <Icon name={"heart"} />
          </div>
        </div>
        <div>
          <p>Speaks:&nbsp;{teacher.languages}</p>
          <p>Lesson Info:&nbsp;{teacher.lesson_info}</p>
          <p>Conditions:&nbsp;{teacher.conditions}</p>
          <p>{teacher.experience}</p>
        </div>

        <button>Read more</button>
        <ReviewList reviews={teacher.reviews} />

        <ul>
          {teacher.levels.map((level) => (
            <li>#{level}</li>
          ))}
        </ul>

        <CustomButton>Book trial lesson</CustomButton>
      </div>
    </>
  );
};
export default TeachersCard;

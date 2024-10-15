import {Link} from "react-router-dom";
import Icon from "../Icon/Icon";

const Logo = () => {
  return (
    <Link to={"/"} className="flex gap-2 items-center">
      <Icon name="ukraine" w={28} h={28} />
      <p className="font-medium min-[768px]:text-[20px] leading-[1.2]">LearnLingo</p>
    </Link>
  );
};
export default Logo;

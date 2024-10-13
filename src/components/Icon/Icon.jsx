import sprite from "../../img/sprite.svg";

const Icon = ({name, className = "", size, fill, stroke}) => {
  return (
    <svg
      className={className !== "" ? className : null}
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
    >
      <use href={`${sprite}#icon-${name}`} />
    </svg>
  );
};
export default Icon;

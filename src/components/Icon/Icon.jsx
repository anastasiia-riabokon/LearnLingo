import sprite from "/sprite.svg";

const Icon = ({name, className = "", w, h, fill, stroke}) => {
  return (
    <svg
      className={className !== "" ? className : null}
      width={w}
      height={h}
      fill={fill}
      stroke={stroke}
    >
      <use href={`${sprite}#icon-${name}`} />
    </svg>
  );
};
export default Icon;

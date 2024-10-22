const TagsList = ({levels}) => {
  return (
    <ul className="flex gap-[8px] flex-wrap mb-[32px]">
      {levels.map((level, i) => (
        <li key={i} className="tag">
          #{level}
        </li>
      ))}
    </ul>
  );
};
export default TagsList;

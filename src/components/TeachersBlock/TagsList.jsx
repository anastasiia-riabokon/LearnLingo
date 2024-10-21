const TagsList = ({levels}) => {
  return (
    <ul>
      {levels.map((level, i) => (
        <li key={i}>#{level}</li>
      ))}
    </ul>
  );
};
export default TagsList;

import {lang, level, price} from "../../helpers/dataFilter";
import CustomDatalist from "../Custom/CustomDatalist";

const FilterBar = ({setFilters, filters}) => {
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        [type]: value || null,
      };
    });
  };

  return (
    <div className="flex flex-wrap gap-[20px] mb-[32px]">
      <CustomDatalist
        label={"Languages"}
        options={lang}
        placeholder={"Language"}
        value={filters.lang}
        onChange={(value) => handleFilterChange("lang", value)}
      />
      <CustomDatalist
        label={"Level of knowledge"}
        options={level}
        placeholder={"Level of knowledge"}
        value={filters.level}
        onChange={(value) => handleFilterChange("level", value)}
      />
      <CustomDatalist
        label={"Price"}
        options={price}
        placeholder={"Maximum price"}
        value={filters.price}
        onChange={(value) => handleFilterChange("price", value)}
      />
    </div>
  );
};
export default FilterBar;

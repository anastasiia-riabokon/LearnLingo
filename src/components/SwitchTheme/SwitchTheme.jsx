import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import {BsSun} from "react-icons/bs";
import {BsMoonStarsFill} from "react-icons/bs";
import {selectorColorTheme, selectorTheme} from "../../redux/theme/selectors";
import {setColorTheme, setTheme} from "../../redux/theme/slice";
import {themeColors, dot} from "../../helpers/themeColors";
import Icon from "../Icon/Icon";

const SwitchTheme = () => {
  const theme = useSelector(selectorTheme);
  const colorTheme = useSelector(selectorColorTheme);
  const dispatch = useDispatch();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    document.body.className = "";

    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    }

    if (colorTheme) {
      document.body.classList.add(`${colorTheme}-theme`);
    }
  }, [isDarkMode, colorTheme]);

  const handleToggleDarkMode = () => {
    dispatch(setTheme(!isDarkMode ? "dark" : ""));
  };

  const handleChangeColorTheme = (selectedOption) => {
    dispatch(setColorTheme(selectedOption.value));
  };

  return (
    <div className="flex gap-2">
      <Select
        options={themeColors}
        onChange={handleChangeColorTheme}
        value={themeColors.find((color) => color.value === colorTheme)}
        isSearchable={false}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => (
            <Icon
              name={"arrow"}
              fill={"none"}
              stroke={theme === "dark" ? "var(--white)" : "var(--main)"}
              w={10}
            />
          ),
        }}
        styles={{
          option: (styles, {data, isFocused, isSelected}) => ({
            ...styles,
            backgroundColor: isSelected ? "transparent" : undefined,
            color: isSelected ? data.hex : undefined,
            fontFamily: "Roboto",

            transition: "all 400ms ease-in-out",
            ":active": {
              color: isSelected ? "var(--white)" : undefined,
            },
            ":hover": {
              backgroundColor: data.hex,
              color: "var(--white)",
            },
          }),
          control: (styles, {isFocused}) => ({
            ...styles,
            background: "transparent",
            fontFamily: "Roboto",
            border: theme === "dark" ? "1px solid var(--white)" : "none",
            cursor: "pointer",
            fontSize: "12px",
            boxShadow: isFocused ? "none" : styles.boxShadow,
            padding: "2px 8px 2px 0px",
            "&:hover": {borderColor: "none"},
          }),
          menu: (styles) => ({
            ...styles,
            backgroundColor: "none",
            backdropFilter: "blur(8px)",
          }),
          singleValue: (styles, {data}) => ({
            ...styles,
            ...dot(data.hex),
            color: theme === "dark" ? "var(--white)" : "var(--main)",
            margin: "0",
          }),
        }}
      />
      <button onClick={handleToggleDarkMode}>
        {isDarkMode ? <BsSun color={"var(--color)"} /> : <BsMoonStarsFill color={"var(--color)"} />}
      </button>
    </div>
  );
};
export default SwitchTheme;

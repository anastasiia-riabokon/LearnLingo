import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Select from "react-select";
import {BsSun} from "react-icons/bs";
import {BsMoonStarsFill} from "react-icons/bs";
import {selectorColorTheme, selectorTheme} from "../../redux/theme/selectors";
import {setColorTheme, setTheme} from "../../redux/theme/slice";
import {themeColors} from "../../helpers/themeColors";

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
    <div className="flex gap-4">
      <button onClick={handleToggleDarkMode}>
        {isDarkMode ? <BsSun color={"var(--color)"} /> : <BsMoonStarsFill color={"var(--color)"} />}
      </button>
      <Select
        options={themeColors}
        onChange={handleChangeColorTheme}
        value={themeColors.find((color) => color.value === colorTheme)}
        isSearchable={false}
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
            background: "var(--hover-color)",
            fontFamily: "Roboto",
            border: "none",
            cursor: "pointer",
            boxShadow: isFocused ? "none" : styles.boxShadow,
            "&:hover": {borderColor: "none"},
          }),
          menu: (styles) => ({
            ...styles,
            backgroundColor: "none",
            backdropFilter: "blur(8px)",
          }),
        }}
      />
    </div>
  );
};
export default SwitchTheme;

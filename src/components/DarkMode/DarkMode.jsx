import "./DarkMode.scss";
const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("mode", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("mode", "light");
  };

  const selectedMode = localStorage.getItem("mode");

  if (selectedMode === "dark") {
    setDarkMode();
  }

  const onChangeMode = (event) => {
    if (event.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div>
      <input
        type="checkbox"
        id="darkMode-toggle"
        onChange={onChangeMode}
        defaultChecked={selectedMode === "dark"}
      />
      <label htmlFor="darkMode-toggle">Dark Mode</label>
    </div>
  );
};

export default DarkMode;

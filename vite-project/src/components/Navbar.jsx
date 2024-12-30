import { useState } from "react";
import { useEffect } from "react";

function Navbar({ changetitle, title }) {
  const [style, setStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });


  useEffect(() => {
    if (title === "dark") {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setStyle({
        color: "rgb(15 23 42 / var(--tw-text-opacity, 1)) /* #0f172a */",
        backgroundColor:
          "rgb(96 165 250 / var(--tw-bg-opacity, 1)) /* #60a5fa */",
      });
    }
  }, [title]);

  return (
    <>
      <nav className="navbar justify-content-between" style={style}>
        <a className="navbar-brand ">
          <h1 className=" font-extrabold text-[45px]"> NavBar</h1>
        </a>
        <button
          className=" p-[8px] dark:bg-gray-800  rounded-[30px] text-[23px]"
          onClick={(e) => {
            const isDarkMode = document.body.classList.toggle("light");
            // localStorage.setItem("changetitle", isDarkMode ? "light" : "dark");
            changetitle(isDarkMode ? "Light" : "Dark ");
            e.target.textContent = isDarkMode ? "🌞" : "🌙";
          }}
        >
          🌙
        </button>
      </nav>
      <hr className="bg-black" />
    </>
  );
}
export default Navbar;
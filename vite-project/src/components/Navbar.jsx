import { useState } from "react";
import { useEffect } from "react";

function Navbar({ changetitle, title }) {
  const [style, setStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnstyle, setbtnStyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  useEffect(() => {
    if (title === "dark") {
      setbtnStyle({
        backgroundColor:
          "rgb(31 41 55 / var(--tw-bg-opacity, 1)) /* #1f2937 */",
      });
    } else {
      setbtnStyle({
        backgroundColor:
          "rgb(38 78 150 / var(--tw-bg-opacity, 1)) /* #1d4ed8 */",
      });
    }
  }, [title]);

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
          style={btnstyle}
          onClick={(e) => {
            const isDarkMode = document.body.classList.toggle("light");
            localStorage.setItem("theme", isDarkMode ? "light" : "dark");
            changetitle(isDarkMode ? "Light Mode" : "Dark Mode");
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

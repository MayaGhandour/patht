import React, { useEffect } from "react";
import { TiAdjustBrightness } from "react-icons/ti";
import { BsFillMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { changeMode } from "../Redux/modeSlice";
import "./Header.css";
import logo1 from "../assets/Img/pathteachlogo.png"; // Light mode logo
import logo2 from "../assets/Img/pathteachlogo-whitecolor.png"; // Dark mode logo

const Header = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const isRealyDark = useSelector((state) => state.mode.isDark);
  const showIcon = useSelector((state) => state.mode.showIcon);

  useEffect(() => {
    document.body.style.backgroundColor = isRealyDark ? "#030b3d" : "#fff";
  }, [isRealyDark]);

  const changeLanguage = (lng) => {
    i18n
      .changeLanguage(lng)
      .then(() => {
        localStorage.setItem("i18nextLng", lng);
      })
      .catch((error) => {
        console.error("Error changing language:", error);
      });
  };

  useEffect(() => {
    document.body.dir = i18n.language === "en" ? "ltr" : "rtl";
  }, [i18n.language]);

  return (
    <div className="px-4 pb-4">
      <nav
        className="navbar navbar-expand-lg fixed-top py-0 px-4"
        style={{
          backdropFilter: "blur(5px)",
          backgroundColor: isRealyDark ? "#030b3d" : "#fff", // Dynamic background color
        }}
      >
        <div className="container-fluid">
          <NavLink className={"navbar-brand"} to="/" style={{ border: "none" }}>
            <img
              src={isRealyDark ? logo2 : logo1} // Change logo based on mode
              alt="Logo"
              style={{ width: "5vw", height: "5vw" }}
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {["About", "Solutions", "Services", "Strategy"].map((link) => (
                <li className="nav-item" key={link}>
                  <NavLink
                    className="nav-link"
                    to={`/${link}`}
                    style={{
                      color: isRealyDark ? "#fff" : "transparent", // White in dark mode
                      background: isRealyDark
                        ? "none"
                        : "linear-gradient(#030b3d, #105abf)",
                      WebkitBackgroundClip: isRealyDark ? "none" : "text", // Only apply gradient in light mode
                      WebkitTextFillColor: isRealyDark ? "#fff" : "transparent", // Apply transparent fill in light mode
                      fontWeight: "bold",
                    }}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center p-3">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>

              <div className="new-icons d-flex justify-content-center align-items-center px-2  gap-1  ">
                <div className="icons">
                  {showIcon ? (
                    <div
                      className="icon2"
                      onClick={() => dispatch(changeMode())}
                    >
                      <BsFillMoonFill size={20} />
                    </div>
                  ) : (
                    <div
                      className="icon1"
                      onClick={() => dispatch(changeMode())}
                    >
                      <TiAdjustBrightness size={20} color="white" />
                    </div>
                  )}
                </div>

                {/* Language toggle button */}
                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    changeLanguage(i18n.language === "en" ? "ar" : "en")
                  }
                >
                  {i18n.language === "en" ? "AR" : "EN"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

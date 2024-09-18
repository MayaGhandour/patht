import React from "react";
import CarouselImg from "../assets/Img/carousel-1.jpg"; // Adjust the image path as needed
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "./Aabout.css"; // Ensure you include this CSS file

const Aabout = () => {
  const { t } = useTranslation();
  const isRealyDark = useSelector((state) => state.mode.isDark);

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Text Column */}
        <div className="col-md-6">
          <h2
            className={`mb-4 ${
              isRealyDark
                ? "dark-mode-text-gradient"
                : "light-mode-text-gradient"
            }`}
          >
            {t("about2.AboutPathTECH")}
          </h2>
          <p
            className={`${
              isRealyDark
                ? "dark-mode-text-gradient"
                : "light-mode-text-gradient"
            }`}
          >
            {t("about2.snip1")}
          </p>
          <p
            className={`${
              isRealyDark
                ? "dark-mode-text-gradient"
                : "light-mode-text-gradient"
            }`}
          >
            {t("about2.snip2")}
          </p>
          <ul>
            <li
              className={`${
                isRealyDark
                  ? "dark-mode-text-gradient"
                  : "light-mode-text-gradient"
              }`}
            >
              Design & Technical Proposal
            </li>
            <li
              className={`${
                isRealyDark
                  ? "dark-mode-text-gradient"
                  : "light-mode-text-gradient"
              }`}
            >
              Supply & Installation
            </li>
            <li
              className={`${
                isRealyDark
                  ? "dark-mode-text-gradient"
                  : "light-mode-text-gradient"
              }`}
            >
              Maintenance Contracts
            </li>
            <li
              className={`${
                isRealyDark
                  ? "dark-mode-text-gradient"
                  : "light-mode-text-gradient"
              }`}
            >
              Tenders & Bids
            </li>
          </ul>
        </div>

        {/* Background Image Column */}
        <div className="col-md-6">
          <div
            className="w-100 rounded"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 0), rgba(18, 18, 18, 1)), url(${CarouselImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px", // Adjust height based on your need
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Aabout;

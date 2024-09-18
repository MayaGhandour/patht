import React from "react";
import ParallaxText from "./Ticker";
import cisco from "../assets/Img/keyPartner/cisco.webp";
import Airtable from "../assets/Img/keyPartner/Airtable.webp";
import ISO from "../assets/Img/keyPartner/ISO.webp";
import Huwawi from "../assets/Img/keyPartner/Huwawi.webp";
import PMI from "../assets/Img/keyPartner/PMI.webp";
import RM from "../assets/Img/keyPartner/RM.webp";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const NewsTicker = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isRealyDark = useSelector((state) => state.mode.isDark);
  const images = [Airtable, PMI, Huwawi, RM, ISO, cisco];

  return (
    <>
      <h1
        className={`text-center mt-5 mb-5 ${
          isRealyDark ? "dark-mode-text" : "light-mode-text"
        }`}
      >
        {t("partner")}
      </h1>
      <div className="d-flex justify-content-center mb-5">
        <div
          className={`ticker-container ${
            isRealyDark ? "dark-mode-bg" : "light-mode-bg"
          }`}
          style={{ width: "90vw" }}
        >
          <ParallaxText baseVelocity={2}>
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "2vw",
                  height: "100px",
                  width: "200px",
                  marginRight: "20px", // Add 20px space between images
                  boxShadow: isRealyDark
                    ? "0 4px 10px rgba(0, 0, 0, 0.7)"
                    : "0 4px 10px rgba(0, 0, 0, 0.1)", // Dynamic shadow based on mode
                }}
              ></div>
            ))}
          </ParallaxText>
        </div>
      </div>
    </>
  );
};

export default NewsTicker;

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { solution } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import "./About.css"; // Include CSS for gradient text

// ServiceCard Component
const ServiceCard = ({ index, title, icon }) => {
  const { t } = useTranslation();
  const isRealyDark = useSelector((state) => state.mode.isDark);

  return (
    <Tilt className="col-12 col-sm-6 col-md-4">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className={`w-100 p-1 rounded-3 shadow ${
          isRealyDark ? "dark-mode-card" : "light-mode-card"
        }`}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-3 py-5 px-2 d-flex flex-column justify-content-center align-items-center min-vh-50"
        >
          <img
            src={icon}
            alt={t(title)}
            className=" mb-3"
            style={{
              width: "20vw",
              height: "10vw",
            }}
          />
          <h1
            className={`${
              isRealyDark
                ? "dark-mode-text-gradient"
                : "light-mode-text-gradient"
            } fs-5 fw-bold text-center`}
          >
            {t(`solution.${title}`)}
          </h1>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About Component
const About = () => {
  const { t } = useTranslation();
  const isRealyDark = useSelector((state) => state.mode.isDark);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${
            isRealyDark ? "dark-mode-text-gradient" : "light-mode-text-gradient"
          } ${styles.sectionSubText}`}
        >
          {t("solution.OurSolutions")}
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-3 ${
          isRealyDark ? "text-light" : "text-muted"
        } fs-6 mx-auto container`}
      >
        <p
          className={`mt-3 ${
            isRealyDark ? "text-light" : "text-muted"
          } fs-6 mx-auto `}
        >
          {t("solution.title")}
        </p>
      </motion.div>

      <div className="row g-4 mt-5">
        {solution.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

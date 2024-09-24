import React from "react";
import "./Header.css";
import web11 from "../assets/Img/11.webp";
import web12 from "../assets/Img/12.webp";
import web13 from "../assets/Img/13.webp";
import web14 from "../assets/Img/14.webp";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const AboutStart = () => {
  const { t, i18n } = useTranslation();

  const isRealyDark = useSelector((state) => state.mode.isDark);
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
              <div>
                <h1 className="display-5 mb-4 text-primary">
                  {t("aboutPage.title1")}
                </h1>
                <p className="mb-4">{t("aboutPage.text1")}</p>
              </div>
            </div>
            <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
              <div className="bg-primary rounded-divf position-relative overflow-hidden">
                <img
                  src={web11}
                  className="img-fluid rounded w-100 wow fadeInRight"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="bg-primary roundedd position-relative overflow-hidden">
                <img
                  src={web12}
                  className="img-fluid rounded w-100 wow fadeInRight"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.2s">
              <div>
                <h1 className="display-5 mb-4 text-primary">
                  {t("aboutPage.title2")}
                </h1>
                <p className="mb-4">{t("aboutPage.text2")}</p>
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
              <div>
                <h1 className="display-5 mb-4 text-primary">
                  {t("aboutPage.title3")}
                </h1>
                <p className="mb-4">{t("aboutPage.text3")}</p>
              </div>
            </div>
            <div className="col-xl-5 wow fadeInRight" data-wow-delay="0.2s">
              <div className="bg-primary roundedd position-relative overflow-hidden">
                <img
                  src={web13}
                  className="img-fluid rounded w-100 wow fadeInRight"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="bg-primary rounded-divl position-relative overflow-hidden">
                <img
                  src={web14}
                  className="img-fluid rounded w-100 wow fadeInRight"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.2s">
              <div>
                <h1 className="display-5 mb-4 text-primary">
                  {" "}
                  {t("aboutPage.title4")}
                </h1>
                <p className="mb-4">{t("aboutPage.text4")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStart;

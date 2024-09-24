import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
const Feature = () => {
  const { t, i18n } = useTranslation();
  return (
    <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      <div className="container-fluid feature pb-5">
        <div className="container pb-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: "800px" }}
          >
            <br />
            <h1 className="display-5 mb-4 text-primary">
              Our Value Proposition
            </h1>
            <p className="mb-0">
              Experience Innovation and Excellence with PathTECH’s Unique
              Solutions
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="feature-itemf p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-chart-line fa-4x text-primary"></i>
                </div>
                <h4>Innovative Solutions</h4>
                <p className="mb-4">
                  PathTECH offers cutting-edge solutions in Datacenter &
                  Networking, Video Conference Systems, and Security, tailored
                  to meet your business needs and ensure success.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="feature-item p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-university fa-4x text-primary"></i>
                </div>
                <h4>Industry Collaboration</h4>
                <p className="mb-4">
                  Collaborating with technological leaders like Cisco, Huawei,
                  and CommScope, PathTECH ensures top-notch quality and
                  expertise in every project, setting new industry standards.
                </p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="feature-iteml p-4">
                <div className="feature-icon p-4 mb-4">
                  <i className="fas fa-file-alt fa-4x text-primary"></i>
                </div>
                <h4>Exceptional Services</h4>
                <p className="mb-4">
                  From Project Management Consultancy to Training & Coaching,
                  PathTECH delivers exceptional services that transform visions
                  into reality and drive business growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

import React from "react";
import "./Header.css";
import web11 from "../assets/Img/11.webp";
import web12 from "../assets/Img/12.webp";
import web13 from "../assets/Img/13.webp";
import web14 from "../assets/Img/14.webp";
const AboutStart = () => {
  return (
    <div>
      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
              <div>
                <h1 className="display-5 mb-4 text-primary">
                  Technological Excellence
                </h1>
                <p className="mb-4">
                  At PathTech, we are driven by a singular vision: to become the
                  leading force in advanced technology across Saudi Arabia. Our
                  commitment is to innovate and provide exceptional
                  technological solutions that transform industries and improve
                  lives.
                </p>
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
                  Commitment to Innovation
                </h1>
                <p className="mb-4">
                  Complying with Saudi’s Vision 2030, PathTech’s dedication to
                  innovation is unwavering. We invest heavily in research and
                  development to stay ahead of the curve, ensuring our products
                  and services are at the forefront of technological
                  advancements. Our team of experts continuously explores new
                  frontiers, pushing the boundaries of what is possible.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-xl-7 wow fadeInLeft" data-wow-delay="0.2s">
              <div>
                <h1 className="display-5 mb-4 text-primary">
                  Transforming Industries
                </h1>
                <p className="mb-4">
                  We aim to revolutionize various sectors by integrating
                  cutting-edge technology into everyday processes. From
                  healthcare to finance, our solutions are designed to enhance
                  efficiency, security, and productivity, creating a more
                  connected and advanced society in Saudi Arabia.
                </p>
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
                <h1 className="display-5 mb-4 text-primary">Improving Lives</h1>
                <p className="mb-4">
                  Beyond industry transformation, PathTech is dedicated to
                  improving the quality of life for individuals. Our
                  technologies aim to provide better healthcare, smarter cities,
                  and more sustainable practices, ensuring that every citizen
                  can experience the benefits of our innovations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStart;

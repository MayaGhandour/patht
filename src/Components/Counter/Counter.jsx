import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faCheck,
  faHourglass,
  faLaughBeam,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // استخدم مكتبة مراقبة التمرير
import { useTranslation } from "react-i18next";

const Counter = () => {
  const { t, i18n } = useTranslation();

  const { ref, inView } = useInView({
    triggerOnce: true, // لتفعيل الحركة مرة واحدة فقط عند الوصول
    threshold: 0.2, // نسبة القسم التي يجب أن تكون مرئية لتفعيل الحركة
  });

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.3 }, // تأخير الظهور لكل عنصر
    }),
  };

  return (
    <div
      className="container my-3"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* نربط القسم بـ ref للتحقق من الظهور في التمرير */}
      <motion.section className=" " ref={ref}>
        <div className=" d-flex justify-content-around align-items-center flex-wrap my-5 py-3">
          {[
            {
              icon: faHourglass,
              count: 25,
              suffix: "+",
              title: t("count.count1"),
            },
            {
              icon: faCheck,
              count: 1250,
              suffix: "+",
              title: t("count.count2"),
            },
            {
              icon: faLaughBeam,
              count: 550,
              suffix: "+",
              title: t("count.count3"),
            },
          ].map((item, index) => (
            <motion.div
              className="counter-item"
              key={index}
              custom={index} // نمرر الفهرس (index) للرسوم المتحركة
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // نتحقق من الحالة
              variants={fadeIn}
            >
              <FontAwesomeIcon icon={item.icon} size="3x" />
              <CountUp end={item.count} duration={4} suffix={item.suffix} />
              <h4>{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Counter;

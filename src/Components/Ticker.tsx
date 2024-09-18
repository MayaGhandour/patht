import { useRef } from "react";
import React from "react";
import "./Header.css";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimationFrame,
} from "framer-motion";

// دالة الالتفاف للتأكد من أن الحركة لا تتوقف
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number; // تحكم بسرعة الحركة
}

export function ParallaxText({ children, baseVelocity = 5 }: ParallaxProps) {
  // سرعة أبطأ
  const baseX = useMotionValue(-50);
  const smoothVelocity = useSpring(baseVelocity, {
    damping: 50,
    stiffness: 300,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`); // استخدام الالتفاف لضمان حركة مستمرة
  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // تحديث الموقع ليتم الحركة بشكل مستمر
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {children}
        {children} {/* تكرار الصور لمنع الفراغ */}
      </motion.div>
    </div>
  );
}

export default ParallaxText;

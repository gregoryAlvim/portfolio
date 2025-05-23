"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute top-2 right-4 h-[298px] w-[298px] mix-blend-lighten xl:right-5 xl:h-[498px] xl:w-[498px]"
        >
          <Image
            fill
            priority
            quality={100}
            src="/assets/photo.png"
            alt="Photo of the author"
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          role="img"
          fill="transparent"
          aria-label="circle"
          viewBox="0 0 504 504"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[300px] w-[300px] xl:h-[506px] xl:w-[506px]"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#9810fa"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;

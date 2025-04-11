"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

interface Props {
  containerStyles: string;
  buttonStyles: string;
  iconsStyles: string;
}

const WorkSliderButtons = ({
  iconsStyles,
  buttonStyles,
  containerStyles,
}: Props) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        type="button"
        className={buttonStyles}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>

      <button
        type="button"
        className={buttonStyles}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderButtons;

"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderButtons from "@/components/work-slider-buttons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "React" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    technologies: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="order-2 flex w-full flex-col xl:order-none xl:h-[460px] xl:w-[50%] xl:justify-between">
            <div className="flex h-[50%] flex-col gap-[30px]">
              <div className="font-extrabold text-8xl text-outline text-transparent transition-all duration-500">
                {project.num}
              </div>

              <h2 className="font-bold text-[42px] text-foreground capitalize leading-none transition-all duration-500 group-hover:text-purple-600">
                {project.category} project
              </h2>

              <p className="text-foreground/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.technologies.map((tech, index) => (
                  <li key={tech.name} className="text-purple-600 text-xl">
                    {tech.name}
                    {index !== project.technologies.length - 1 && ","}
                  </li>
                ))}
              </ul>

              <hr className="border border-foreground/20" />

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-foreground/5 hover:cursor-pointer">
                        <BsArrowUpRight className="text-3xl text-foreground group-hover:cursor-pointer group-hover:text-purple-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-foreground/5 hover:cursor-pointer">
                        <BsGithub className="text-3xl text-foreground group-hover:cursor-pointer group-hover:text-purple-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => (
                <SwiperSlide
                  key={project.num}
                  className="w-full hover:cursor-grab active:cursor-grabbing"
                >
                  <div className="group relative flex h-[460px] items-center justify-center">
                    <div className="absolute top-0 bottom-0 z-10 h-full w-full bg-black/20">
                      {""}
                    </div>
                    <div className="relative h-full w-full">
                      <Image
                        fill
                        alt=""
                        src={project.image}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderButtons
                iconsStyles=""
                buttonStyles="hover:cursor-pointer bg-purple-600 hover:bg-purple-600/80 transition-all text-background text-[22px] w-[44px] h-[44px] flex items-center justify-center"
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-normal"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

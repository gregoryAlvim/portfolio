"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { TabsContent } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import {
	FaCss3,
	FaFigma,
	FaHtml5,
	FaJs,
	FaNodeJs,
	FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const about = {
	title: "About Me",
	description:
		"I am a passionate web developer with a strong foundation in front-end technologies. I enjoy creating user-friendly and visually appealing websites that provide a seamless experience for users.",
	info: [
		{ fieldName: "Name", fieldValue: "Grégory Alvim" },
		{ fieldName: "Phone", fieldValue: "(+48) 9 9839-4783" },
		{ fieldName: "Experience", fieldValue: "2+ Years" },
		{ fieldName: "Skype", fieldValue: "gregs.skype" },
		{ fieldName: "Nationality", fieldValue: "Brazilian" },
		{ fieldName: "Email", fieldValue: "gregori.alvim@gmail.com" },
		{ fieldName: "Freelance", fieldValue: "Available" },
		{ fieldName: "Languages", fieldValue: "Portuguese, English" },
	],
};

const experience = {
	icon: "/assets/resume/badge.svg",
	title: "My experience",
	description:
		"I am a passionate web developer with a strong foundation in front-end technologies. I enjoy creating user-friendly and visually appealing websites that provide a seamless experience for users.",
	items: [
		{
			company: "Tech Solutions",
			position: "Full-Stack Developer",
			duration: "2022 - Present",
		},
		{
			company: "Web Design Studio",
			position: "Front-End Developer",
			duration: "Summer 2021",
		},
		{
			company: "E-commerce Platform",
			position: "Freelance Developer",
			duration: "2020 - 2021",
		},
		{
			company: "Tech Academy",
			position: "Assistent Instructor",
			duration: "2019 - 2020",
		},
		{
			company: "Digital Agency",
			position: "UI/UX Designer",
			duration: "2018 - 2019",
		},
		{
			company: "Software House",
			position: "Software Engineer Intern",
			duration: "2017 - 2018",
		},
	],
};

const education = {
	icon: "/assets/resume/cap.svg",
	title: "My education",
	description:
		"I am a passionate web developer with a strong foundation in front-end technologies. I enjoy creating user-friendly and visually appealing websites that provide a seamless experience for users.",
	items: [
		{
			institution: "Online Course Platform",
			degree: "Full-Stack Developer Bootcamp",
			duration: "2023",
		},
		{
			institution: "CodeAcademy",
			degree: "Front-End Developer",
			duration: "2022",
		},
		{
			institution: "Online Course",
			degree: "Programming Fundamentals",
			duration: "2020 - 2021",
		},
		{
			institution: "Tech University",
			degree: "Certified Web Developer",
			duration: "2019",
		},
		{
			institution: "Design School",
			degree: "Diploma in Graphic Design",
			duration: "2016 - 2018",
		},
		{
			institution: "Comunity College",
			degree: "Associete Degree in Computer Science",
			duration: "2014 - 2016",
		},
	],
};

const skills = {
	title: "My skills",
	description:
		"I am a passionate web developer with a strong foundation in front-end technologies. I enjoy creating user-friendly and visually appealing websites that provide a seamless experience for users.",
	list: [
		{
			icon: <FaHtml5 />,
			name: "HTML5",
		},
		{
			icon: <FaCss3 />,
			name: "CSS3",
		},
		{
			icon: <FaJs />,
			name: "JavaScript",
		},
		{
			icon: <FaReact />,
			name: "ReactJS",
		},
		{
			icon: <SiNextdotjs />,
			name: "NextJS",
		},
		{
			icon: <SiTailwindcss />,
			name: "Tailwind CSS",
		},
		{
			icon: <FaNodeJs />,
			name: "NodeJS",
		},
		{
			icon: <FaFigma />,
			name: "Figma",
		},
	],
};

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col gap-[60px] xl:flex-row"
				>
					<TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>

					<div className="min-h-[70vh] w-full">
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="font-bold text-4xl">{experience.title}</h3>
								<p className="mx-auto max-w-[600px] text-foreground/60 xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
										{experience.items.map((item) => (
											<li
												key={item.company}
												className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-sm bg-sidebar-accent px-10 py-6 lg:items-start"
											>
												<span className="text-purple-600">{item.duration}</span>
												<h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
													{item.position}
												</h3>
												<div className="flex items-center gap-3">
													<span className="h-[6px] w-[6px] rounded-full bg-purple-600">
														{""}
													</span>
													<p className="text-foreground/60">{item.company}</p>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="font-bold text-4xl">{education.title}</h3>
								<p className="mx-auto max-w-[600px] text-foreground/60 xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
										{education.items.map((item) => (
											<li
												key={item.institution}
												className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-sm bg-sidebar-accent px-10 py-6 lg:items-start"
											>
												<span className="text-purple-600">{item.duration}</span>
												<h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
													{item.degree}
												</h3>
												<div className="flex items-center gap-3">
													<span className="h-[6px] w-[6px] rounded-full bg-purple-600">
														{""}
													</span>
													<p className="text-foreground/60">
														{item.institution}
													</p>
												</div>
											</li>
										))}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						<TabsContent value="skills" className="h-full w-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:*:text-left">
									<h3 className="font-bold text-4xl">{skills.title}</h3>
									<p className="mx-auto max-w-[600px] text-foreground/60 xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-[30px]">
									{skills.list.map((skill) => (
										<li key={skill.name}>
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-sm bg-sidebar-accent hover:cursor-pointer">
														<div className="text-6xl transition-all duration-300 group-hover:cursor-pointer group-hover:text-purple-600">
															{skill.icon}
														</div>
													</TooltipTrigger>
													<TooltipContent className="capitalize">
														{skill.name}
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>

						<TabsContent
							value="about"
							className="w-full text-center xl:text-left"
						>
							<div className="flex flex-col gap-[30px]">
								<h3 className="font-bold text-4xl">{about.title}</h3>
								<p className="mx-auto max-w-[600px] text-foreground/60 xl:mx-0">
									{" "}
									{about.description}{" "}
								</p>
								<ul className=" mx-auto grid max-w-[720px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
									{about.info.map((item) => (
										<li
											key={item.fieldName}
											className="flex items-center justify-center gap-4 xl:justify-start"
										>
											<span className="text-foreground/60">
												{item.fieldName}
											</span>
											<span className="text-xl">{item.fieldValue}</span>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
	{
		num: "01",
		title: "Web Development",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
		href: "",
	},
	{
		num: "02",
		title: "UX/UI Design",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
		href: "",
	},
	{
		num: "03",
		title: "Logo Design",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
		href: "",
	},
	{
		num: "04",
		title: "SEO",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
		href: "",
	},
];

const Services = () => {
	return (
		<section className="flex min-h-[80vh] flex-col items-center justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
					}}
					className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
				>
					{services.map((service) => (
						<div
							key={service.num}
							className="group flex flex-1 flex-col justify-center gap-6"
						>
							<div className="flex w-full items-center justify-between">
								<div className="font-extrabold text-5xl text-outline text-transparent transition-all duration-500">
									{service.num}
								</div>

								<Link
									href={service.href}
									className="hover:-rotate-45 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-foreground transition-all duration-500 group-hover:bg-purple-600"
								>
									<BsArrowDownRight className="text-3xl text-background" />
								</Link>
							</div>

							<h2 className="font-bold text-[42px] text-foreground leading-none transition-all duration-500 group-hover:text-purple-600">
								{service.title}
							</h2>

							<p className="text-foreground/60 ">{service.description}</p>

							<div className="w-full border-foreground/20 border-b">""</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;

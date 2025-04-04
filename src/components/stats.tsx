"use client";

import CountUp from "react-countup";

const stats = [
	{ num: 12, text: "Years of experience" },
	{ num: 26, text: "Projects completed" },
	{ num: 8, text: "Technologies maastered" },
	{ num: 500, text: "Code commits" },
];

const Stats = () => {
	return (
		<section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
			<div className="container mx-auto">
				<div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
					{stats.map((stat, index) => (
						<div
							key={stat.text}
							className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
						>
							<CountUp
								delay={2}
								duration={5}
								end={stat.num}
								className="font-extrabold text-4xl xl:text-6xl"
							/>

							<p
								className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} text-foreground/80 leading-snug`}
							>
								{stat.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Stats;

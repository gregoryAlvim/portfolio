import type { Variants } from "framer-motion";
import { motion } from "framer-motion";

const stairAnimation: Variants = {
	initial: { top: "0%" },
	animate: { top: "100%" },
	exit: { top: ["100%", "0%"] },
};

const reverseIndex = (index: number) => {
	const totalSteps = 6;

	return totalSteps - index - 1;
};

const Stairs = () => {
	return (
		<>
			{[...Array(6)].map((_, index) => (
				<motion.div
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					variants={stairAnimation}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{
						duration: 0.4,
						ease: "easeInOut",
						delay: reverseIndex(index) * 0.1,
					}}
					className="relative h-full w-full bg-foreground"
				/>
			))}
		</>
	);
};

export default Stairs;

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./stairs";

const StairTransition = () => {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait">
			<div key={pathname}>
				<div className="pointer-events-none fixed top-0 right-0 left-0 z-40 flex h-screen w-screen">
					<Stairs />
				</div>

				<motion.div
					className="pointer-events-none fixed top-0 h-screen w-screen bg-background"
					initial={{ opacity: 1 }}
					animate={{
						opacity: 0,
						transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
					}}
				/>
			</div>
		</AnimatePresence>
	);
};

export default StairTransition;

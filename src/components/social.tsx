import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
	{ icon: <FaGithub />, title: "GitHub", path: "" },
	{ icon: <FaLinkedinIn />, title: "LinkedinIn", path: "" },
	{ icon: <FaTwitter />, title: "Twitter", path: "" },
	{ icon: <FaYoutube />, title: "YouTube", path: "" },
];

interface Props {
	iconStyles: string;
	containerStyles: string;
}

const Social = ({ containerStyles, iconStyles }: Props) => {
	return (
		<div className={containerStyles}>
			{socials.map((social) => (
				<Link key={social.title} href={social.path} className={iconStyles}>
					{social.icon}
				</Link>
			))}
		</div>
	);
};

export default Social;

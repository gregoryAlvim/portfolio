import Technology from "../technology/technology";
import { Level } from "./level";
import { Type } from "./type";

export default interface Project {
	id: number;
	name: string;
	description: string;
	images: string[];
	type: Type;
	level: Level;
	repository: string;
	enphasis: boolean;
	technologies: Technology[];
}

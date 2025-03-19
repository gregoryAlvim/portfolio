import { Technology } from "@core";
import { Controller, Get } from "@nestjs/common";
import { TechnologyProvider } from "./technology.provider";

@Controller("technologies")
export class TechnologyController {
	constructor(private readonly tecnologyProvider: TechnologyProvider) {}

	@Get()
	async get(): Promise<Technology[]> {
		return this.tecnologyProvider.get();
	}

	@Get()
	async getEmphasis(): Promise<Technology[]> {
		return this.tecnologyProvider.getEmphasis();
	}
}

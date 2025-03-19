import { Project } from "@core";
import { Controller, Get, Param } from "@nestjs/common";
import { ProjectProvider } from "./project.provider";

@Controller("projects")
export class ProjectController {
	constructor(private readonly projectProvider: ProjectProvider) {}

	@Get()
	async get(): Promise<Project[]> {
		return this.projectProvider.get();
	}

	@Get(":id")
	async getById(@Param("id") id: string): Promise<Project> {
		return this.projectProvider.getById(Number(id));
	}
}

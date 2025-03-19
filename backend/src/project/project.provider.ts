import { Project } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "src/database/prisma.provider";

@Injectable()
export class ProjectProvider {
	constructor(private readonly prisma: PrismaProvider) {}

	async get(): Promise<Project[]> {
		return this.prisma.project.findMany({
			include: { technologies: true },
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		}) as any;
	}

	async getById(id: number): Promise<Project> {
		return this.prisma.project.findUnique({
			where: {
				id,
			},
			include: { technologies: true },
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		}) as any;
	}
}

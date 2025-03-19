import { Technology } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "src/database/prisma.provider";

@Injectable()
export class TechnologyProvider {
	constructor(private readonly prisma: PrismaProvider) {}

	async get(): Promise<Technology[]> {
		return this.prisma.technology.findMany();
	}

	async getEmphasis(): Promise<Technology[]> {
		return this.prisma.technology.findMany({
			where: {
				emphasis: true,
			},
		});
	}
}

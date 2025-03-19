import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { ProjectController } from "./project.controller";
import { ProjectProvider } from "./project.provider";

@Module({
	imports: [DatabaseModule],
	controllers: [ProjectController],
	providers: [ProjectProvider],
})
export class ProjectModule {}

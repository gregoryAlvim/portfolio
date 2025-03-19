import { Module } from "@nestjs/common";

import { DatabaseModule } from "src/database/database.module";
import { TechnologyController } from "./technology.controller";
import { TechnologyProvider } from "./technology.provider";

@Module({
	imports: [DatabaseModule],
	controllers: [TechnologyController],
	providers: [TechnologyProvider],
})
export class TechnologyModule {}

import { Command, CommandRunner, Option } from "nest-commander";
import { Inject, Logger } from "@nestjs/common";
import { ParkService } from "./shared/park/park.service";
import { getAllParks } from "./external_api/bc-parks-service";

interface ImportCommandOptions {
  job?: string;
}
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

@Command({ name: "import", description: "Import functions" })
export class ImportCommand extends CommandRunner {
  constructor(@Inject(ParkService) private readonly _parkService: ParkService) {
    super();
  }

  private readonly logger = new Logger(ImportCommand.name);

  async run(params: string[], options?: ImportCommandOptions): Promise<void> {
    if (options?.job === "parks") {
      this.runParksImport();
    } else {
      return;
    }
  }

  @Option({
    flags: "-j, --job <jobName>",
    description: "Job name to run",
  })
  parseString(val: string): string {
    return val;
  }

  async runParksImport(): Promise<void> {
    this.logger.log("Importing parks...");
    const parks = await getAllParks();
    for (const park of parks) {
      try {
        this.logger.log(`Importing park: ${park.displayId}`);
        await sleep(100);
        const existingPark = await this._parkService.findOneByExternalId(park.pk);
        if (existingPark) {
          this.logger.log(`Updating existing park.`);
          await this._parkService.update(existingPark.parkGuid, {
            ...existingPark,
            name: park.displayName.slice(0, 255),
            legalName: park.legalName.slice(0, 255),
          });
        } else {
          this.logger.log(`Creating new park.`);
          await this._parkService.create({
            externalId: park.pk,
            name: park.displayName.slice(0, 255),
            legalName: park.legalName.slice(0, 255),
          });
        }
        this.logger.log(`Success!`);
      } catch (error) {
        this.logger.error(`ERROR IMPORTING PARK: ${park.displayName}`, error);
      }
    }
  }
}

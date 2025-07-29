import { investigation_status_code } from "./investigation_status_code";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class investigation {
  @ApiProperty({ type: String })
  investigation_guid: string;

  @ApiProperty({ type: String })
  owned_by_agency_ref: string;

  @ApiProperty({ type: String })
  investigation_status: string;

  @ApiProperty({ type: String })
  create_user_id: string;

  @ApiProperty({ type: Date })
  create_utc_timestamp: Date;

  @ApiPropertyOptional({ type: String })
  update_user_id?: string;

  @ApiPropertyOptional({ type: Date })
  update_utc_timestamp?: Date;

  @ApiProperty({ type: () => investigation_status_code })
  investigation_status_code: investigation_status_code;
}

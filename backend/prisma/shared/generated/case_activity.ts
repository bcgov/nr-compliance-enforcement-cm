import { case_activity_type_code } from "./case_activity_type_code";
import { case_file } from "./case_file";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class case_activity {
  @ApiProperty({ type: String })
  case_activity_guid: string;

  @ApiProperty({ type: String })
  case_file_guid: string;

  @ApiProperty({ type: String })
  case_activity_type_code: string;

  @ApiProperty({ type: String })
  case_activity_identifier: string;

  @ApiProperty({ type: Date })
  effective_utc_timestamp: Date;

  @ApiPropertyOptional({ type: Date })
  expiry_utc_timestamp?: Date;

  @ApiProperty({ type: String })
  create_user_id: string;

  @ApiProperty({ type: Date })
  create_utc_timestamp: Date;

  @ApiPropertyOptional({ type: String })
  update_user_id?: string;

  @ApiPropertyOptional({ type: Date })
  update_utc_timestamp?: Date;

  @ApiProperty({ type: () => case_activity_type_code })
  case_activity_type_code_case_activity_case_activity_type_codeTocase_activity_type_code: case_activity_type_code;

  @ApiProperty({ type: () => case_file })
  case_file: case_file;
}

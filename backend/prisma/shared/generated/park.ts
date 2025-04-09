import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class park {
  @ApiProperty({ type: String })
  park_guid: string;

  @ApiProperty({ type: String })
  external_id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiPropertyOptional({ type: String })
  legal_name?: string;

  @ApiPropertyOptional({ type: String })
  geo_organization_unit_code?: string;

  @ApiProperty({ type: String })
  create_user_id: string;

  @ApiProperty({ type: Date })
  create_utc_timestamp: Date;

  @ApiPropertyOptional({ type: String })
  update_user_id?: string;

  @ApiPropertyOptional({ type: Date })
  update_utc_timestamp?: Date;
}

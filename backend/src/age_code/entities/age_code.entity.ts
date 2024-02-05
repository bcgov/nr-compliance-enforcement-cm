import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class AgeCode 
{
    @ApiProperty({
        example: "ADLT",
        description: "The age code",
      })
      @PrimaryColumn({length: 10})
      age_code: string;
    
      @ApiProperty({ example: "Adult", description: "The short description of the age code" })
      @Column({length: 50})
      short_description: string;
    
      @ApiProperty({ example: "Adult", description: "The long description of the age code" })
      @Column({length: 250, nullable: true })
      long_description: string;
    
      @ApiProperty({ example: "1", description: "The display order of the age code" })
      @Column()
      display_order: number;
    
      @ApiProperty({ example: "True", description: "An indicator to determine if the age code is active" })
      @Column()
      active_ind: boolean;
    
      @ApiProperty({
        example: "mburns",
        description: "The id of the user that created the age code",
      })
      @Column({length: 32})
      create_user_id: string;
    
      @ApiProperty({
        example: "2003-04-12 04:05:06",
        description: "The timestamp when the age code was created",
      })
      @Column()
      create_utc_timestamp: Date;
    
      @ApiProperty({
        example: "mburns",
        description: "The id of the user that last updated the age code",
      })
      @Column({length: 32})
      update_user_id: string;
    
      @ApiProperty({
        example: "2003-04-12 04:05:06",
        description: "The timestamp when the age code was last updated",
      })
      @Column()
      update_utc_timestamp: Date;
    
      constructor(age_code?:string) {
        this.age_code = age_code;
      }
}

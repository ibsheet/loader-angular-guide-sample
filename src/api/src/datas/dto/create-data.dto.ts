import { ApiProperty } from '@nestjs/swagger';

export class CreateDataDto {
  @ApiProperty()
  searchMode: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  data: number;

  @ApiProperty()
  iborderby: string;
}

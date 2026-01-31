import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamDto } from './create-team.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
  @ApiProperty({
    example: 'Manchester United',
    description: 'Nombre del equipo',
    required: false,
    minLength: 2,
  })
  name?: string;

  @ApiProperty({
    example: 'Inglaterra',
    description: 'País del equipo',
    required: false,
    minLength: 2,
  })
  country?: string;
}

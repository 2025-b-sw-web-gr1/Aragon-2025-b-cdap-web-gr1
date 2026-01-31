import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({
    example: 'Manchester United',
    description: 'Nombre del equipo',
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @ApiProperty({
    example: 'Inglaterra',
    description: 'País del equipo',
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  country: string;
}

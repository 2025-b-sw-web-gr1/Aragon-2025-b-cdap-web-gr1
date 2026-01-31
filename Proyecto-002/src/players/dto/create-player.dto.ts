import { IsString, IsNotEmpty, IsNumber, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({
    example: 'Cristiano Ronaldo',
    description: 'Nombre del jugador',
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @ApiProperty({
    example: 'Delantero',
    description: 'Posición del jugador en el equipo',
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  position: string;

  @ApiProperty({
    example: 1,
    description: 'ID del equipo al que pertenece el jugador',
  })
  @IsNumber()
  @IsNotEmpty()
  teamId: number;
}

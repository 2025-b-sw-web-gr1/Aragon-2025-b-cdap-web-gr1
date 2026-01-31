import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from './create-player.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
  @ApiProperty({
    example: 'Cristiano Ronaldo',
    description: 'Nombre del jugador',
    required: false,
    minLength: 2,
  })
  name?: string;

  @ApiProperty({
    example: 'Delantero',
    description: 'Posición del jugador en el equipo',
    required: false,
    minLength: 2,
  })
  position?: string;

  @ApiProperty({
    example: 1,
    description: 'ID del equipo al que pertenece el jugador',
    required: false,
  })
  teamId?: number;
}

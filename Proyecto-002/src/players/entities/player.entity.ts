import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Team } from '../../teams/entities/team.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('players')
export class Player {
  @ApiProperty({
    example: 1,
    description: 'ID único del jugador',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Cristiano Ronaldo',
    description: 'Nombre del jugador',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'Delantero',
    description: 'Posición del jugador en el equipo',
  })
  @Column()
  position: string;

  @ApiProperty({
    example: 1,
    description: 'ID del equipo al que pertenece el jugador',
  })
  @Column()
  teamId: number;

  @ManyToOne(() => Team, (team) => team.players)
  team: Team;
}

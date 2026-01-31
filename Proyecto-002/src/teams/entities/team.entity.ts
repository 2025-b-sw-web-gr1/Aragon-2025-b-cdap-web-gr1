import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Player } from '../../players/entities/player.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('teams')
export class Team {
  @ApiProperty({
    example: 1,
    description: 'ID único del equipo',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'Manchester United',
    description: 'Nombre del equipo',
  })
  @Column()
  name: string;

  @ApiProperty({
    example: 'Inglaterra',
    description: 'País del equipo',
  })
  @Column()
  country: string;

  @OneToMany(() => Player, (player) => player.team, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  players: Player[];
}

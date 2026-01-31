import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Team } from '../teams/entities/team.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playersRepository: Repository<Player>,
    @InjectRepository(Team)
    private teamsRepository: Repository<Team>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto) {
    const team = await this.teamsRepository.findOne({
      where: { id: createPlayerDto.teamId },
    });

    if (!team) {
      throw new NotFoundException(`Team with id ${createPlayerDto.teamId} not found`);
    }

    const player = this.playersRepository.create(createPlayerDto);
    return this.playersRepository.save(player);
  }

  findAll() {
    return this.playersRepository.find({
      relations: ['team'],
    });
  }

  async findOne(id: number) {
    const player = await this.playersRepository.findOne({
      where: { id },
      relations: ['team'],
    });

    if (!player) {
      throw new NotFoundException(`Player with id ${id} not found`);
    }

    return player;
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    const player = await this.findOne(id);

    if (updatePlayerDto.teamId && updatePlayerDto.teamId !== player.teamId) {
      const team = await this.teamsRepository.findOne({
        where: { id: updatePlayerDto.teamId },
      });

      if (!team) {
        throw new NotFoundException(`Team with id ${updatePlayerDto.teamId} not found`);
      }
    }

    Object.assign(player, updatePlayerDto);
    return this.playersRepository.save(player);
  }

  async remove(id: number) {
    const player = await this.findOne(id);
    return this.playersRepository.remove(player);
  }

  async findByTeam(teamId: number) {
    const team = await this.teamsRepository.findOne({
      where: { id: teamId },
    });

    if (!team) {
      throw new NotFoundException(`Team with id ${teamId} not found`);
    }

    return this.playersRepository.find({
      where: { teamId },
      relations: ['team'],
    });
  }
}

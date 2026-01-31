import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = this.playerRepository.create(createPlayerDto);
    return this.playerRepository.save(player);
  }

  async findAll(): Promise<Player[]> {
    return this.playerRepository.find({
      relations: ['team'],
    });
  }

  async findOne(id: number): Promise<Player> {
    return this.playerRepository.findOne({
      where: { id },
      relations: ['team'],
    });
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    await this.playerRepository.update(id, updatePlayerDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.playerRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('Jugador no encontrado');
    }
    return { message: 'Jugador eliminado correctamente' };
  }

  async findByTeam(teamId: number): Promise<Player[]> {
    return this.playerRepository.find({
      where: { teamId },
      relations: ['team'],
    });
  }
}

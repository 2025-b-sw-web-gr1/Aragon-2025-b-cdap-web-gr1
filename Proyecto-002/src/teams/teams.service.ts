import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = this.teamRepository.create(createTeamDto);
    return this.teamRepository.save(team);
  }

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find({
      relations: ['players'],
    });
  }

  async findOne(id: number): Promise<Team> {
    return this.teamRepository.findOne({
      where: { id },
      relations: ['players'],
    });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto): Promise<Team> {
    await this.teamRepository.update(id, updateTeamDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.teamRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('Equipo no encontrado');
    }
    return { message: 'Equipo eliminado correctamente' };
  }
}

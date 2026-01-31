import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { Team } from './entities/team.entity';
import { Player } from '../players/entities/player.entity';
import { PlayersService } from '../players/players.service';

@Module({
  imports: [TypeOrmModule.forFeature([Team, Player])],
  controllers: [TeamsController],
  providers: [TeamsService, PlayersService],
  exports: [TeamsService],
})
export class TeamsModule {}

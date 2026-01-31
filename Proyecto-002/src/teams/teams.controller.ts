import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { TeamsService } from './teams.service';
import { PlayersService } from '../players/players.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(
    private readonly teamsService: TeamsService,
    private readonly playersService: PlayersService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Crear un nuevo equipo',
    description: 'Crea un nuevo equipo en la base de datos',
  })
  @ApiResponse({
    status: 201,
    description: 'Equipo creado exitosamente',
    type: Team,
  })
  @ApiBadRequestResponse({
    description: 'Datos inválidos o faltantes',
  })
  create(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamsService.create(createTeamDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Obtener todos los equipos',
    description: 'Recupera una lista de todos los equipos con sus jugadores',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de equipos obtenida exitosamente',
    type: [Team],
  })
  findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtener un equipo por ID',
    description: 'Recupera los detalles de un equipo específico',
  })
  @ApiParam({
    name: 'id',
    description: 'ID del equipo',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Equipo encontrado',
    type: Team,
  })
  @ApiNotFoundResponse({
    description: 'Equipo no encontrado',
  })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Team> {
    return this.teamsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Actualizar un equipo',
    description: 'Actualiza la información de un equipo existente',
  })
  @ApiParam({
    name: 'id',
    description: 'ID del equipo a actualizar',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Equipo actualizado exitosamente',
    type: Team,
  })
  @ApiBadRequestResponse({
    description: 'Datos inválidos',
  })
  @ApiNotFoundResponse({
    description: 'Equipo no encontrado',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<Team> {
    return this.teamsService.update(id, updateTeamDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar un equipo',
    description: 'Elimina un equipo y todos sus jugadores asociados',
  })
  @ApiParam({
    name: 'id',
    description: 'ID del equipo a eliminar',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Equipo eliminado exitosamente',
  })
  @ApiNotFoundResponse({
    description: 'Equipo no encontrado',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.remove(id);
  }

  @Get(':id/players')
  @ApiOperation({
    summary: 'Obtener jugadores de un equipo',
    description: 'Recupera todos los jugadores pertenecientes a un equipo específico',
  })
  @ApiParam({
    name: 'id',
    description: 'ID del equipo',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de jugadores del equipo obtenida exitosamente',
    type: [Team],
  })
  @ApiNotFoundResponse({
    description: 'Equipo no encontrado',
  })
  getTeamPlayers(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.findByTeam(id);
  }
}

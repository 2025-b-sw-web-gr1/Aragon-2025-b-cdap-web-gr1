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
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@ApiTags('players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  @ApiOperation({
    summary: 'Crear un nuevo jugador',
    description: 'Crea un nuevo jugador en la base de datos',
  })
  @ApiResponse({
    status: 201,
    description: 'Jugador creado exitosamente',
    type: Player,
  })
  @ApiBadRequestResponse({
    description: 'Datos inválidos o faltantes',
  })
  create(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Obtener todos los jugadores',
    description: 'Recupera una lista de todos los jugadores con su equipo',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de jugadores obtenida exitosamente',
    type: [Player],
  })
  findAll(): Promise<Player[]> {
    return this.playersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtener un jugador por ID',
    description: 'Recupera los detalles de un jugador específico',
  })
  @ApiParam({
    name: 'id',
    description: 'ID del jugador',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Jugador encontrado',
    type: Player,
  })
  @ApiNotFoundResponse({
    description: 'Jugador no encontrado',
  })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Player> {
    return this.playersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Actualizar un jugador',
    description: 'Actualiza la información de un jugador existente',
  })
  @ApiParam({
    name: 'id',
    description: 'ID del jugador a actualizar',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Jugador actualizado exitosamente',
    type: Player,
  })
  @ApiBadRequestResponse({
    description: 'Datos inválidos',
  })
  @ApiNotFoundResponse({
    description: 'Jugador no encontrado',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player> {
    return this.playersService.update(id, updatePlayerDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar un jugador',
    description: 'Elimina un jugador de la base de datos',
  })
  @ApiParam({
    name: 'id',
    description: 'ID del jugador a eliminar',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Jugador eliminado exitosamente',
  })
  @ApiNotFoundResponse({
    description: 'Jugador no encontrado',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.remove(id);
  }
}

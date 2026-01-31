# 📚 Guía Paso a Paso para Estudiantes

## Objetivo del Taller

Implementar una API RESTful básica en **NestJS** conectada a una base de datos **SQLite** mediante **TypeORM**, con una relación **1 a Muchos** (un equipo tiene muchos jugadores).

## ✅ Checklist de Implementación

### Fase 1: Configuración del Proyecto

- [ ] Crear carpeta `Examen-Web-001` en tu carpeta de estudiante
- [ ] Copiar el archivo `package.json` con todas las dependencias
- [ ] Ejecutar `npm install` para instalar las dependencias
- [ ] Crear la estructura de carpetas:
  ```
  src/
  ├── teams/
  │   ├── entities/
  │   ├── dto/
  │   └── *.ts
  ├── players/
  │   ├── entities/
  │   ├── dto/
  │   └── *.ts
  └── *.ts
  ```

### Fase 2: Definir Entidades

- [ ] Crear `src/teams/entities/team.entity.ts`:
  - [ ] Campo `id` (PrimaryGeneratedColumn)
  - [ ] Campo `name` (string, max 100)
  - [ ] Campo `country` (string, max 100)
  - [ ] Relación `@OneToMany` con Player

- [ ] Crear `src/players/entities/player.entity.ts`:
  - [ ] Campo `id` (PrimaryGeneratedColumn)
  - [ ] Campo `name` (string, max 100)
  - [ ] Campo `position` (string, max 50)
  - [ ] Campo `teamId` (number, clave foránea)
  - [ ] Relación `@ManyToOne` con Team

### Fase 3: Crear DTOs (Data Transfer Objects)

- [ ] `src/teams/dto/create-team.dto.ts`:
  - [ ] Validaciones con decoradores de `class-validator`
  - [ ] name: string, @IsNotEmpty, @MinLength(2)
  - [ ] country: string, @IsNotEmpty, @MinLength(2)

- [ ] `src/teams/dto/update-team.dto.ts`:
  - [ ] Heredar de `CreateTeamDto` con `PartialType`

- [ ] `src/players/dto/create-player.dto.ts`:
  - [ ] name: string, @IsNotEmpty, @MinLength(2)
  - [ ] position: string, @IsNotEmpty, @MinLength(2)
  - [ ] teamId: number, @IsNotEmpty

- [ ] `src/players/dto/update-player.dto.ts`:
  - [ ] Heredar de `CreatePlayerDto` con `PartialType`

### Fase 4: Implementar Servicios

- [ ] `src/teams/teams.service.ts`:
  - [ ] `create(createTeamDto)`: Crear equipo
  - [ ] `findAll()`: Obtener todos los equipos (con relación players)
  - [ ] `findOne(id)`: Obtener un equipo por ID
  - [ ] `update(id, updateTeamDto)`: Actualizar equipo
  - [ ] `remove(id)`: Eliminar equipo

- [ ] `src/players/players.service.ts`:
  - [ ] `create(createPlayerDto)`: Crear jugador (validar que exista el equipo)
  - [ ] `findAll()`: Obtener todos los jugadores
  - [ ] `findOne(id)`: Obtener un jugador por ID
  - [ ] `update(id, updatePlayerDto)`: Actualizar jugador
  - [ ] `remove(id)`: Eliminar jugador
  - [ ] `findByTeam(teamId)`: Obtener jugadores de un equipo

### Fase 5: Implementar Controladores

- [ ] `src/teams/teams.controller.ts`:
  - [ ] `POST /teams`: Crear equipo
  - [ ] `GET /teams`: Obtener todos
  - [ ] `GET /teams/:id`: Obtener uno
  - [ ] `PUT /teams/:id`: Actualizar
  - [ ] `DELETE /teams/:id`: Eliminar
  - [ ] `GET /teams/:id/players`: Obtener jugadores del equipo

- [ ] `src/players/players.controller.ts`:
  - [ ] `POST /players`: Crear jugador
  - [ ] `GET /players`: Obtener todos
  - [ ] `GET /players/:id`: Obtener uno
  - [ ] `PUT /players/:id`: Actualizar
  - [ ] `DELETE /players/:id`: Eliminar

### Fase 6: Configurar Base de Datos

- [ ] `src/app.module.ts`:
  - [ ] Importar `TypeOrmModule.forRoot()` con:
    - [ ] type: 'sqlite'
    - [ ] database: 'database.sqlite'
    - [ ] entities: [Team, Player]
    - [ ] synchronize: true
  - [ ] Importar `TeamsModule`
  - [ ] Importar `PlayersModule`

- [ ] `src/teams/teams.module.ts`:
  - [ ] Importar TypeOrmModule con Team
  - [ ] Importar Player para relaciones
  - [ ] Declarar TeamsController y TeamsService
  - [ ] Exportar TeamsService

- [ ] `src/players/players.module.ts`:
  - [ ] Importar TypeOrmModule con Player y Team
  - [ ] Declarar PlayersController y PlayersService
  - [ ] Exportar PlayersService

### Fase 7: Punto de Entrada

- [ ] `src/main.ts`:
  - [ ] Crear aplicación NestJS
  - [ ] Habilitar validación global con `ValidationPipe`
  - [ ] Habilitar CORS
  - [ ] Escuchar en puerto 3000

### Fase 8: Documentación

- [ ] Crear `README.md` con:
  - [ ] Descripción del proyecto
  - [ ] Requisitos previos
  - [ ] Instrucciones de instalación
  - [ ] Cómo ejecutar el servidor
  - [ ] Estructura del proyecto
  - [ ] Descripción de entidades
  - [ ] Listado completo de endpoints
  - [ ] Ejemplos de uso con cURL/HTTPie
  - [ ] Validaciones implementadas
  - [ ] Información de la BD

## 🚀 Pasos para Ejecutar

### 1. Instalar dependencias

```bash
cd Examen-Web-001
npm install
```

### 2. Ejecutar el servidor (desarrollo)

```bash
npm run start:dev
```

Deberías ver:
```
[Nest] 12345   - 01/31/2026, 10:00:00 AM     LOG [NestFactory] Starting Nest application...
Application is running on: http://localhost:3000
```

### 3. Probar los endpoints

Abre otra terminal y prueba:

```bash
# Crear un equipo
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name": "Mi Equipo", "country": "España"}'

# Obtener todos los equipos
curl http://localhost:3000/teams
```

## 📋 Requisitos de Evaluación

✅ **Proyecto correctamente subido al repositorio**
- [ ] Carpeta `Examen-Web-001` en tu carpeta de estudiante
- [ ] Todo el código fuente incluido
- [ ] Archivo `README.md` presente

✅ **Conexión a SQLite funcionando**
- [ ] Base de datos se crea automáticamente
- [ ] Sincronización automática de tablas
- [ ] Relaciones correctamente configuradas

✅ **Entidades bien definidas**
- [ ] Team entity con campos requeridos
- [ ] Player entity con campos requeridos
- [ ] Relación 1 a Muchos correctamente implementada
- [ ] Decoradores TypeORM correctamente aplicados

✅ **Endpoints RESTful implementados**
- [ ] GET /teams (obtener todos)
- [ ] GET /teams/:id (obtener uno)
- [ ] POST /teams (crear)
- [ ] PUT /teams/:id (actualizar)
- [ ] DELETE /teams/:id (eliminar)
- [ ] GET /players (obtener todos)
- [ ] GET /players/:id (obtener uno)
- [ ] POST /players (crear)
- [ ] PUT /players/:id (actualizar)
- [ ] DELETE /players/:id (eliminar)
- [ ] GET /teams/:id/players (obtener jugadores por equipo)

✅ **Validaciones implementadas**
- [ ] DTOs con validaciones usando `class-validator`
- [ ] Manejo de errores (404 cuando no existe recurso)
- [ ] Validación de relaciones (verificar que equipo existe)

✅ **README claro y completo**
- [ ] Instrucciones de instalación
- [ ] Cómo ejecutar el servidor
- [ ] Ejemplos de endpoints con cURL
- [ ] Estructura del proyecto explicada
- [ ] Descripciones de entidades

## 💡 Tips Importantes

1. **Relación 1 a Muchos**:
   - Team tiene `@OneToMany(() => Player, ...)`
   - Player tiene `@ManyToOne(() => Team, ...)`
   - Usar `cascade: true` para eliminar jugadores al eliminar equipo

2. **Validaciones**:
   - Siempre validar que el equipo exista antes de crear un jugador
   - Usar `ParseIntPipe` para convertir parámetros a números

3. **DTOs**:
   - Separar entrada (CreateDTO) de salida
   - Usar `PartialType` para UpdateDTOs (campos opcionales)

4. **Servicios**:
   - Lógica de negocio va aquí
   - Usar `InjectRepository` para acceder a datos
   - Lanzar excepciones cuando sea necesario

5. **Base de Datos**:
   - SQLite crea automáticamente el archivo `database.sqlite`
   - No incluir archivo `.sqlite` en Git (está en `.gitignore`)
   - `synchronize: true` crea tablas automáticamente

## 🐛 Errores Comunes

### Error: "Cannot find module '@nestjs/common'"
**Solución**: Ejecutar `npm install`

### Error: "Database.sqlite is not accessible"
**Solución**: Verificar permisos de carpeta o ejecutar desde directorio correcto

### Error: "Relation not found"
**Solución**: Verificar que Team/Player están importados en `app.module.ts` en `entities`

### Error: "Team with id X not found"
**Solución**: Esto es correcto - es una validación. El equipo no existe en BD

### Error: "400 Bad Request"
**Solución**: Revisar validaciones en DTOs - probablemente falta un campo requerido

## 📞 Recursos de Ayuda

- [Documentación NestJS](https://docs.nestjs.com)
- [Documentación TypeORM](https://typeorm.io)
- [Validación con class-validator](https://github.com/typestack/class-validator)
- [SQLite Documentation](https://www.sqlite.org/docs.html)

---

¡Éxito en tu examen! 🎉

# API RESTful - Teams and Players Management

API RESTful desarrollada en **NestJS** con **SQLite** y **TypeORM** para gestionar equipos (Teams) y jugadores (Players) con relación **1 a Muchos**.

## 📋 Descripción del Proyecto

Este proyecto implementa una API RESTful que permite:

- **Gestionar Equipos**: Crear, leer, actualizar y eliminar equipos.
- **Gestionar Jugadores**: Crear, leer, actualizar y eliminar jugadores.
- **Relación 1 a Muchos**: Un equipo puede tener muchos jugadores.
- **Base de Datos SQLite**: Almacenamiento persistente de datos.
- **TypeORM**: ORM para gestionar las entidades y relaciones.

## 🔧 Requisitos Previos

- **Node.js** v16 o superior
- **npm** o **yarn**
- **SQLite** (incluido con SQLite3)

## 📦 Instalación de Dependencias

1. **Clonar o descargar el proyecto**:

```bash
cd Examen-Web-001
```

2. **Instalar las dependencias**:

```bash
npm install
```

O si usas yarn:

```bash
yarn install
```

## 🚀 Cómo Ejecutar el Servidor

### Modo Desarrollo (con hot-reload)

```bash
npm run start:dev
```

La API estará disponible en: **http://localhost:3000**

### Modo Producción

Primero, construye el proyecto:

```bash
npm run build
```

Luego, ejecuta:

```bash
npm run start:prod
```

## 📊 Estructura del Proyecto

```
src/
├── teams/
│   ├── entities/
│   │   └── team.entity.ts       # Entidad Team
│   ├── dto/
│   │   ├── create-team.dto.ts   # DTO para crear equipo
│   │   └── update-team.dto.ts   # DTO para actualizar equipo
│   ├── teams.service.ts         # Lógica de negocio para Teams
│   ├── teams.controller.ts      # Endpoints para Teams
│   └── teams.module.ts          # Módulo de Teams
├── players/
│   ├── entities/
│   │   └── player.entity.ts     # Entidad Player
│   ├── dto/
│   │   ├── create-player.dto.ts # DTO para crear jugador
│   │   └── update-player.dto.ts # DTO para actualizar jugador
│   ├── players.service.ts       # Lógica de negocio para Players
│   ├── players.controller.ts    # Endpoints para Players
│   └── players.module.ts        # Módulo de Players
├── app.module.ts                # Módulo principal con config de BD
├── app.controller.ts            # Controlador principal
├── app.service.ts               # Servicio principal
└── main.ts                       # Punto de entrada de la aplicación
```

## 📌 Entidades

### Team

```typescript
{
  id: number;           // ID único del equipo
  name: string;         // Nombre del equipo
  country: string;      // País del equipo
  players: Player[];    // Jugadores del equipo (relación 1 a muchos)
}
```

### Player

```typescript
{
  id: number;           // ID único del jugador
  name: string;         // Nombre del jugador
  position: string;     // Posición en el campo (ej: "Portero", "Defensor")
  teamId: number;       // ID del equipo (clave foránea)
  team: Team;           // Objeto del equipo (relación inversa)
}
```

## 🔌 Endpoints RESTful

### 1. Equipos (Teams)

#### Obtener todos los equipos

```bash
GET /teams
```

**Respuesta exitosa (200)**:
```json
[
  {
    "id": 1,
    "name": "Real Madrid",
    "country": "España",
    "players": [
      {
        "id": 1,
        "name": "Cristiano Ronaldo",
        "position": "Delantero",
        "teamId": 1
      }
    ]
  }
]
```

#### Obtener un equipo por ID

```bash
GET /teams/:id
```

**Ejemplo**:
```bash
GET /teams/1
```

**Respuesta exitosa (200)**:
```json
{
  "id": 1,
  "name": "Real Madrid",
  "country": "España",
  "players": [...]
}
```

#### Crear un nuevo equipo

```bash
POST /teams
```

**Body (JSON)**:
```json
{
  "name": "Barcelona",
  "country": "España"
}
```

**Respuesta exitosa (201)**:
```json
{
  "id": 2,
  "name": "Barcelona",
  "country": "España",
  "players": []
}
```

#### Actualizar un equipo

```bash
PUT /teams/:id
```

**Ejemplo**:
```bash
PUT /teams/1
```

**Body (JSON)**:
```json
{
  "name": "Real Madrid CF",
  "country": "España"
}
```

**Respuesta exitosa (200)**:
```json
{
  "id": 1,
  "name": "Real Madrid CF",
  "country": "España",
  "players": [...]
}
```

#### Eliminar un equipo

```bash
DELETE /teams/:id
```

**Ejemplo**:
```bash
DELETE /teams/1
```

**Respuesta exitosa (200)**:
```json
{
  "id": 1,
  "name": "Real Madrid CF",
  "country": "España",
  "players": [...]
}
```

### 2. Jugadores (Players)

#### Obtener todos los jugadores

```bash
GET /players
```

**Respuesta exitosa (200)**:
```json
[
  {
    "id": 1,
    "name": "Cristiano Ronaldo",
    "position": "Delantero",
    "teamId": 1,
    "team": {
      "id": 1,
      "name": "Real Madrid",
      "country": "España"
    }
  }
]
```

#### Obtener un jugador por ID

```bash
GET /players/:id
```

**Ejemplo**:
```bash
GET /players/1
```

**Respuesta exitosa (200)**:
```json
{
  "id": 1,
  "name": "Cristiano Ronaldo",
  "position": "Delantero",
  "teamId": 1,
  "team": {
    "id": 1,
    "name": "Real Madrid",
    "country": "España"
  }
}
```

#### Crear un nuevo jugador

```bash
POST /players
```

**Body (JSON)**:
```json
{
  "name": "Leo Messi",
  "position": "Extremo Derecho",
  "teamId": 2
}
```

**Respuesta exitosa (201)**:
```json
{
  "id": 2,
  "name": "Leo Messi",
  "position": "Extremo Derecho",
  "teamId": 2,
  "team": {
    "id": 2,
    "name": "Barcelona",
    "country": "España"
  }
}
```

#### Actualizar un jugador

```bash
PUT /players/:id
```

**Ejemplo**:
```bash
PUT /players/1
```

**Body (JSON)**:
```json
{
  "position": "Delantero Centro"
}
```

**Respuesta exitosa (200)**:
```json
{
  "id": 1,
  "name": "Cristiano Ronaldo",
  "position": "Delantero Centro",
  "teamId": 1,
  "team": {
    "id": 1,
    "name": "Real Madrid",
    "country": "España"
  }
}
```

#### Eliminar un jugador

```bash
DELETE /players/:id
```

**Ejemplo**:
```bash
DELETE /players/1
```

**Respuesta exitosa (200)**:
```json
{
  "id": 1,
  "name": "Cristiano Ronaldo",
  "position": "Delantero Centro",
  "teamId": 1,
  "team": {
    "id": 1,
    "name": "Real Madrid",
    "country": "España"
  }
}
```

### 3. Endpoint Especial - Obtener jugadores de un equipo

#### Obtener jugadores de un equipo específico

```bash
GET /teams/:id/players
```

**Ejemplo**:
```bash
GET /teams/1/players
```

**Respuesta exitosa (200)**:
```json
[
  {
    "id": 1,
    "name": "Cristiano Ronaldo",
    "position": "Delantero",
    "teamId": 1,
    "team": {
      "id": 1,
      "name": "Real Madrid",
      "country": "España"
    }
  },
  {
    "id": 3,
    "name": "Sergio Ramos",
    "position": "Defensa",
    "teamId": 1,
    "team": {
      "id": 1,
      "name": "Real Madrid",
      "country": "España"
    }
  }
]
```

## 📝 Ejemplos con cURL

### Crear un equipo

```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name": "Manchester United", "country": "Inglaterra"}'
```

### Obtener todos los equipos

```bash
curl http://localhost:3000/teams
```

### Obtener un equipo por ID

```bash
curl http://localhost:3000/teams/1
```

### Crear un jugador

```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name": "Harry Kane", "position": "Delantero", "teamId": 3}'
```

### Actualizar un equipo

```bash
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Real Madrid CF Updated"}'
```

### Eliminar un jugador

```bash
curl -X DELETE http://localhost:3000/players/1
```

### Obtener jugadores de un equipo

```bash
curl http://localhost:3000/teams/1/players
```

## 🗂️ Base de Datos

El proyecto utiliza **SQLite** con almacenamiento en archivo:

- **Archivo BD**: `database.sqlite` (creado automáticamente en la raíz del proyecto)
- **Sincronización automática**: Las tablas se crean automáticamente al ejecutar el servidor
- **Relación 1 a Muchos**: Configurada con `CASCADE` delete

## ✔️ Validaciones

El proyecto incluye validaciones automáticas mediante `class-validator`:

- **Teams**: 
  - `name`: Requerido, string, mínimo 2 caracteres
  - `country`: Requerido, string, mínimo 2 caracteres

- **Players**:
  - `name`: Requerido, string, mínimo 2 caracteres
  - `position`: Requerido, string, mínimo 2 caracteres
  - `teamId`: Requerido, número, debe existir en la BD

## 🛠️ Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run start:dev

# Construir para producción
npm run build

# Ejecutar en modo producción
npm run start:prod

# Ejecutar tests
npm test

# Ejecutar tests con cobertura
npm run test:cov

# Linter
npm run lint

# Formatear código
npm run format
```

## 📚 Dependencias Principales

- **@nestjs/common**: Framework NestJS core
- **@nestjs/core**: Core de NestJS
- **@nestjs/platform-express**: Servidor Express para NestJS
- **@nestjs/typeorm**: Integración con TypeORM
- **typeorm**: ORM para TypeScript
- **sqlite3**: Driver de SQLite
- **class-validator**: Validación de datos
- **class-transformer**: Transformación de datos

## 🔍 Manejo de Errores

La API responde con los siguientes códigos de estado:

- **200**: Operación exitosa (GET, PUT, DELETE)
- **201**: Recurso creado (POST)
- **400**: Solicitud inválida (validación fallida)
- **404**: Recurso no encontrado
- **500**: Error interno del servidor

## 📖 Recursos Adicionales

- [Documentación de NestJS](https://docs.nestjs.com)
- [Documentación de TypeORM](https://typeorm.io)
- [SQLite Documentation](https://www.sqlite.org/docs.html)

## 👨‍💻 Autor

Proyecto realizado como parte del examen del primer bimestre de la asignatura de desarrollo web.

## 📄 Licencia

MIT

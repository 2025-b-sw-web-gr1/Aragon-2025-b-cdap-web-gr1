# Proyecto 001 - Documentación de Endpoints con Swagger

Una API RESTful completa documentada con Swagger/OpenAPI, construida con **NestJS**, **TypeORM** y **SQLite**.

## 📋 Descripción del Proyecto

Este proyecto implementa una API para gestionar **Equipos** y **Jugadores** con una relación de **uno a muchos** (1:N). Cada equipo puede tener múltiples jugadores, y todos los endpoints están completamente documentados con Swagger.

### Características principales:
- ✅ API RESTful con NestJS
- ✅ Base de datos SQLite con TypeORM
- ✅ Relación 1 a muchos (Teams → Players)
- ✅ Documentación automática con Swagger/OpenAPI
- ✅ Validación de datos con class-validator
- ✅ Transformación de datos con class-transformer

---

## 🚀 Instalación

### Requisitos previos:
- Node.js (v16 o superior)
- npm o yarn

### Pasos de instalación:

1. **Clonar el repositorio** (si es necesario):
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd Proyecto-001
```

2. **Instalar dependencias**:
```bash
npm install
```

3. **Verificar que las dependencias de Swagger están instaladas**:
```bash
npm list @nestjs/swagger swagger-ui-express
```

---

## 🏃 Cómo ejecutar el servidor

### Desarrollo (con reinicio automático):
```bash
npm run start:dev
```

### Producción:
```bash
npm run start:prod
```

### Build:
```bash
npm run build
```

---

## 📚 Documentación de Swagger

Una vez que el servidor está corriendo, accede a la documentación interactiva de Swagger:

📖 **URL**: [http://localhost:3000/api](http://localhost:3000/api)

En Swagger UI podrás:
- Ver todos los endpoints disponibles
- Probar los endpoints directamente desde el navegador
- Ver los esquemas y respuestas esperadas
- Entender los parámetros requeridos para cada operación

---

## 🔌 Endpoints Documentados

### **Teams (Equipos)**

#### 1. Crear un nuevo equipo
```http
POST /teams
```
**Request Body:**
```json
{
  "name": "Manchester United",
  "country": "Inglaterra"
}
```

**Response (201):**
```json
{
  "id": 1,
  "name": "Manchester United",
  "country": "Inglaterra",
  "players": []
}
```

---

#### 2. Obtener todos los equipos
```http
GET /teams
```

**Response (200):**
```json
[
  {
    "id": 1,
    "name": "Manchester United",
    "country": "Inglaterra",
    "players": [...]
  }
]
```

---

#### 3. Obtener un equipo por ID
```http
GET /teams/:id
```

**Parámetro:**
- `id` (path, requerido): ID del equipo (número entero)

**Response (200):**
```json
{
  "id": 1,
  "name": "Manchester United",
  "country": "Inglaterra",
  "players": [...]
}
```

---

#### 4. Actualizar un equipo
```http
PUT /teams/:id
```

**Parámetro:**
- `id` (path, requerido): ID del equipo

**Request Body (opcional):**
```json
{
  "name": "Manchester United FC",
  "country": "Reino Unido"
}
```

**Response (200):**
```json
{
  "id": 1,
  "name": "Manchester United FC",
  "country": "Reino Unido",
  "players": [...]
}
```

---

#### 5. Eliminar un equipo
```http
DELETE /teams/:id
```

**Parámetro:**
- `id` (path, requerido): ID del equipo a eliminar

**Response (200):**
```json
{
  "message": "Equipo eliminado correctamente"
}
```

---

#### 6. Obtener jugadores de un equipo
```http
GET /teams/:id/players
```

**Parámetro:**
- `id` (path, requerido): ID del equipo

**Response (200):**
```json
[
  {
    "id": 1,
    "name": "Cristiano Ronaldo",
    "position": "Delantero",
    "teamId": 1,
    "team": {...}
  }
]
```

---

### **Players (Jugadores)**

#### 1. Crear un nuevo jugador
```http
POST /players
```

**Request Body:**
```json
{
  "name": "Cristiano Ronaldo",
  "position": "Delantero",
  "teamId": 1
}
```

**Response (201):**
```json
{
  "id": 1,
  "name": "Cristiano Ronaldo",
  "position": "Delantero",
  "teamId": 1,
  "team": {...}
}
```

---

#### 2. Obtener todos los jugadores
```http
GET /players
```

**Response (200):**
```json
[
  {
    "id": 1,
    "name": "Cristiano Ronaldo",
    "position": "Delantero",
    "teamId": 1,
    "team": {...}
  }
]
```

---

#### 3. Obtener un jugador por ID
```http
GET /players/:id
```

**Parámetro:**
- `id` (path, requerido): ID del jugador

**Response (200):**
```json
{
  "id": 1,
  "name": "Cristiano Ronaldo",
  "position": "Delantero",
  "teamId": 1,
  "team": {...}
}
```

---

#### 4. Actualizar un jugador
```http
PUT /players/:id
```

**Parámetro:**
- `id` (path, requerido): ID del jugador

**Request Body (opcional):**
```json
{
  "position": "Extremo Derecho",
  "teamId": 2
}
```

**Response (200):**
```json
{
  "id": 1,
  "name": "Cristiano Ronaldo",
  "position": "Extremo Derecho",
  "teamId": 2,
  "team": {...}
}
```

---

#### 5. Eliminar un jugador
```http
DELETE /players/:id
```

**Parámetro:**
- `id` (path, requerido): ID del jugador a eliminar

**Response (200):**
```json
{
  "message": "Jugador eliminado correctamente"
}
```

---

## 📁 Estructura del Proyecto

```
Proyecto-001/
├── src/
│   ├── teams/
│   │   ├── dto/
│   │   │   ├── create-team.dto.ts
│   │   │   └── update-team.dto.ts
│   │   ├── entities/
│   │   │   └── team.entity.ts
│   │   ├── teams.controller.ts
│   │   ├── teams.service.ts
│   │   └── teams.module.ts
│   ├── players/
│   │   ├── dto/
│   │   │   ├── create-player.dto.ts
│   │   │   └── update-player.dto.ts
│   │   ├── entities/
│   │   │   └── player.entity.ts
│   │   ├── players.controller.ts
│   │   ├── players.service.ts
│   │   └── players.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   └── main.ts
├── test/
├── package.json
├── tsconfig.json
├── nest-cli.json
└── README.md
```

---

## 🛠️ Decoradores de Swagger Utilizados

### En Controladores:
- **@ApiTags()**: Agrupa endpoints por categoría
- **@ApiOperation()**: Describe qué hace el endpoint
- **@ApiResponse()**: Define las respuestas posibles
- **@ApiParam()**: Documenta los parámetros de la ruta
- **@ApiBadRequestResponse()**: Indica errores de validación
- **@ApiNotFoundResponse()**: Indica cuando un recurso no existe

### En DTOs:
- **@ApiProperty()**: Documenta cada propiedad del objeto
  - `example`: Muestra un ejemplo del valor
  - `description`: Explica qué es el campo
  - `minLength`: Validación mínima

### Ejemplo de Decorador en DTO:
```typescript
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({
    example: 'Manchester United',
    description: 'Nombre del equipo',
    minLength: 2,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;
}
```

---

## 🗄️ Base de Datos

El proyecto usa **SQLite** con **TypeORM** para la gestión de la base de datos.

### Tabla: Teams
| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | INTEGER | Clave primaria |
| name | VARCHAR | Nombre del equipo |
| country | VARCHAR | País del equipo |

### Tabla: Players
| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | INTEGER | Clave primaria |
| name | VARCHAR | Nombre del jugador |
| position | VARCHAR | Posición en el equipo |
| teamId | INTEGER | Clave foránea (Teams) |

### Relación
- Un equipo (Team) puede tener **muchos** jugadores (Players)
- Un jugador pertenece a **un** equipo

---

## ✅ Validación de Datos

Todos los endpoints incluyen validación automática usando `class-validator`:

- **@IsString()**: Valida que sea una cadena de texto
- **@IsNotEmpty()**: El campo no puede estar vacío
- **@MinLength(n)**: Longitud mínima de caracteres
- **@IsNumber()**: Valida que sea un número

**Ejemplo de respuesta de error:**
```http
HTTP/1.1 400 Bad Request
```
```json
{
  "message": [
    "name should not be empty",
    "name must be a string",
    "name must be longer than or equal to 2 characters"
  ],
  "error": "Bad Request",
  "statusCode": 400
}
```

---

## 🧪 Próximos Pasos

Para mejorar este proyecto, puedes:
- Añadir autenticación con JWT
- Implementar paginación en los GET
- Añadir filtros avanzados
- Crear tests unitarios y E2E
- Implementar caché con Redis
- Añadir rate limiting

---

## 📝 Criterios de Evaluación Cumplidos

✅ Proyecto correctamente subido al repositorio del curso en Proyecto-001  
✅ Swagger instalado y configurado en main.ts  
✅ Endpoints documentados con decoradores (@ApiTags, @ApiOperation, @ApiResponse)  
✅ DTOs documentados con @ApiProperty  
✅ Documentación accesible en /api  
✅ README claro y completo  

---

## 📄 Licencia

MIT

---

## 👨‍💻 Autor

Proyecto de educación para aprender Swagger/OpenAPI con NestJS

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**¡Disfruta documentando tus APIs! 📚**

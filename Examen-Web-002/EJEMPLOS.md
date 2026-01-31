# Ejemplos de Uso - API de Teams y Players

## Usando HTTPie (recomendado)

HTTPie es una herramienta CLI moderna para realizar solicitudes HTTP. Es más fácil de usar que cURL.

### Instalar HTTPie

```bash
pip install httpie
# o
npm install -g http-prompt
```

## Ejemplos de Solicitudes

### 1. Crear Equipos

```bash
# Crear Real Madrid
http POST http://localhost:3000/teams \
  name="Real Madrid" \
  country="España"

# Crear Barcelona
http POST http://localhost:3000/teams \
  name="Barcelona" \
  country="España"

# Crear Manchester United
http POST http://localhost:3000/teams \
  name="Manchester United" \
  country="Inglaterra"

# Crear Liverpool
http POST http://localhost:3000/teams \
  name="Liverpool" \
  country="Inglaterra"
```

### 2. Obtener Todos los Equipos

```bash
http GET http://localhost:3000/teams
```

### 3. Obtener un Equipo Específico

```bash
# Obtener equipo con ID 1
http GET http://localhost:3000/teams/1

# Obtener equipo con ID 2
http GET http://localhost:3000/teams/2
```

### 4. Crear Jugadores

```bash
# Crear jugador para Real Madrid (ID=1)
http POST http://localhost:3000/players \
  name="Cristiano Ronaldo" \
  position="Delantero" \
  teamId=1

# Crear otro jugador para Real Madrid
http POST http://localhost:3000/players \
  name="Sergio Ramos" \
  position="Defensa" \
  teamId=1

# Crear jugador para Barcelona (ID=2)
http POST http://localhost:3000/players \
  name="Leo Messi" \
  position="Extremo Derecho" \
  teamId=2

# Crear jugador para Manchester United (ID=3)
http POST http://localhost:3000/players \
  name="Harry Kane" \
  position="Delantero" \
  teamId=3

# Crear jugador para Liverpool (ID=4)
http POST http://localhost:3000/players \
  name="Mohamed Salah" \
  position="Extremo Derecho" \
  teamId=4
```

### 5. Obtener Todos los Jugadores

```bash
http GET http://localhost:3000/players
```

### 6. Obtener un Jugador Específico

```bash
# Obtener jugador con ID 1
http GET http://localhost:3000/players/1

# Obtener jugador con ID 3
http GET http://localhost:3000/players/3
```

### 7. Actualizar un Equipo

```bash
# Actualizar Real Madrid
http PUT http://localhost:3000/teams/1 \
  name="Real Madrid CF" \
  country="España"

# Solo actualizar el nombre
http PUT http://localhost:3000/teams/2 \
  name="FC Barcelona"
```

### 8. Actualizar un Jugador

```bash
# Cambiar la posición del jugador
http PUT http://localhost:3000/players/1 \
  position="Delantero Centro"

# Cambiar el equipo del jugador
http PUT http://localhost:3000/players/2 \
  teamId=2

# Cambiar nombre y posición
http PUT http://localhost:3000/players/3 \
  name="Harry Edward Kane" \
  position="Delantero"
```

### 9. Obtener Jugadores de un Equipo Específico

```bash
# Obtener todos los jugadores del equipo 1 (Real Madrid)
http GET http://localhost:3000/teams/1/players

# Obtener todos los jugadores del equipo 2 (Barcelona)
http GET http://localhost:3000/teams/2/players

# Obtener todos los jugadores del equipo 3 (Manchester United)
http GET http://localhost:3000/teams/3/players
```

### 10. Eliminar un Jugador

```bash
# Eliminar jugador con ID 1
http DELETE http://localhost:3000/players/1

# Eliminar jugador con ID 5
http DELETE http://localhost:3000/players/5
```

### 11. Eliminar un Equipo

```bash
# Eliminar equipo con ID 1 (y todos sus jugadores)
http DELETE http://localhost:3000/teams/1

# Eliminar equipo con ID 3
http DELETE http://localhost:3000/teams/3
```

## Ejemplos con cURL

Si prefieres usar cURL, aquí están los mismos ejemplos:

### Crear un Equipo

```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Real Madrid",
    "country": "España"
  }'
```

### Obtener Todos los Equipos

```bash
curl http://localhost:3000/teams
```

### Obtener un Equipo por ID

```bash
curl http://localhost:3000/teams/1
```

### Crear un Jugador

```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Cristiano Ronaldo",
    "position": "Delantero",
    "teamId": 1
  }'
```

### Obtener Todos los Jugadores

```bash
curl http://localhost:3000/players
```

### Obtener un Jugador por ID

```bash
curl http://localhost:3000/players/1
```

### Actualizar un Equipo

```bash
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Real Madrid CF",
    "country": "España"
  }'
```

### Actualizar un Jugador

```bash
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{
    "position": "Delantero Centro"
  }'
```

### Obtener Jugadores de un Equipo

```bash
curl http://localhost:3000/teams/1/players
```

### Eliminar un Jugador

```bash
curl -X DELETE http://localhost:3000/players/1
```

### Eliminar un Equipo

```bash
curl -X DELETE http://localhost:3000/teams/1
```

## Usando Bruno (API Client)

Si utilizas Bruno (cliente REST similar a Postman):

1. Crea una colección llamada "Teams API"
2. Crea las siguientes solicitudes:

### GET /teams

```
GET http://localhost:3000/teams
```

### POST /teams

```
POST http://localhost:3000/teams
Content-Type: application/json

{
  "name": "Real Madrid",
  "country": "España"
}
```

### GET /teams/:id

```
GET http://localhost:3000/teams/1
```

### PUT /teams/:id

```
PUT http://localhost:3000/teams/1
Content-Type: application/json

{
  "name": "Real Madrid CF"
}
```

### DELETE /teams/:id

```
DELETE http://localhost:3000/teams/1
```

### GET /players

```
GET http://localhost:3000/players
```

### POST /players

```
POST http://localhost:3000/players
Content-Type: application/json

{
  "name": "Cristiano Ronaldo",
  "position": "Delantero",
  "teamId": 1
}
```

### GET /players/:id

```
GET http://localhost:3000/players/1
```

### PUT /players/:id

```
PUT http://localhost:3000/players/1
Content-Type: application/json

{
  "position": "Delantero Centro"
}
```

### DELETE /players/:id

```
DELETE http://localhost:3000/players/1
```

### GET /teams/:id/players

```
GET http://localhost:3000/teams/1/players
```

## Flujo de Prueba Completo

Para probar toda la API de forma completa, sigue estos pasos:

1. **Inicia el servidor**:
   ```bash
   npm run start:dev
   ```

2. **Crea 3 equipos**:
   ```bash
   http POST http://localhost:3000/teams name="Equipo 1" country="País 1"
   http POST http://localhost:3000/teams name="Equipo 2" country="País 2"
   http POST http://localhost:3000/teams name="Equipo 3" country="País 3"
   ```

3. **Obtén todos los equipos**:
   ```bash
   http GET http://localhost:3000/teams
   ```

4. **Crea 5 jugadores** (distribuidos entre los equipos):
   ```bash
   http POST http://localhost:3000/players name="Jugador 1" position="Portero" teamId=1
   http POST http://localhost:3000/players name="Jugador 2" position="Defensa" teamId=1
   http POST http://localhost:3000/players name="Jugador 3" position="Centrocampista" teamId=2
   http POST http://localhost:3000/players name="Jugador 4" position="Delantero" teamId=2
   http POST http://localhost:3000/players name="Jugador 5" position="Lateral" teamId=3
   ```

5. **Obtén los jugadores del equipo 1**:
   ```bash
   http GET http://localhost:3000/teams/1/players
   ```

6. **Actualiza un jugador**:
   ```bash
   http PUT http://localhost:3000/players/1 position="Portero Titular"
   ```

7. **Elimina un jugador**:
   ```bash
   http DELETE http://localhost:3000/players/5
   ```

8. **Verifica el resultado**:
   ```bash
   http GET http://localhost:3000/teams/3/players
   ```

¡Listo! Habrás probado todos los endpoints de la API.

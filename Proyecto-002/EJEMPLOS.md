# Ejemplos de Uso de la API

## 📚 Ejemplos de Requests y Responses

### 1. Crear un equipo

**Request:**
```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Barcelona",
    "country": "España"
  }'
```

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "Barcelona",
  "country": "España",
  "players": []
}
```

---

### 2. Crear otro equipo

**Request:**
```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Real Madrid",
    "country": "España"
  }'
```

**Response (201 Created):**
```json
{
  "id": 2,
  "name": "Real Madrid",
  "country": "España",
  "players": []
}
```

---

### 3. Crear un jugador para Barcelona

**Request:**
```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Lionel Messi",
    "position": "Delantero",
    "teamId": 1
  }'
```

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "Lionel Messi",
  "position": "Delantero",
  "teamId": 1,
  "team": {
    "id": 1,
    "name": "Barcelona",
    "country": "España",
    "players": []
  }
}
```

---

### 4. Crear más jugadores

**Request 1:**
```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Gerard Piqué",
    "position": "Defensa",
    "teamId": 1
  }'
```

**Request 2:**
```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Luka Modrić",
    "position": "Centrocampista",
    "teamId": 2
  }'
```

---

### 5. Obtener todos los equipos

**Request:**
```bash
curl http://localhost:3000/teams
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Barcelona",
    "country": "España",
    "players": [
      {
        "id": 1,
        "name": "Lionel Messi",
        "position": "Delantero",
        "teamId": 1
      },
      {
        "id": 2,
        "name": "Gerard Piqué",
        "position": "Defensa",
        "teamId": 1
      }
    ]
  },
  {
    "id": 2,
    "name": "Real Madrid",
    "country": "España",
    "players": [
      {
        "id": 3,
        "name": "Luka Modrić",
        "position": "Centrocampista",
        "teamId": 2
      }
    ]
  }
]
```

---

### 6. Obtener un equipo específico

**Request:**
```bash
curl http://localhost:3000/teams/1
```

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "Barcelona",
  "country": "España",
  "players": [
    {
      "id": 1,
      "name": "Lionel Messi",
      "position": "Delantero",
      "teamId": 1
    },
    {
      "id": 2,
      "name": "Gerard Piqué",
      "position": "Defensa",
      "teamId": 1
    }
  ]
}
```

---

### 7. Obtener jugadores de un equipo

**Request:**
```bash
curl http://localhost:3000/teams/1/players
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Lionel Messi",
    "position": "Delantero",
    "teamId": 1,
    "team": {
      "id": 1,
      "name": "Barcelona",
      "country": "España",
      "players": [...]
    }
  },
  {
    "id": 2,
    "name": "Gerard Piqué",
    "position": "Defensa",
    "teamId": 1,
    "team": {
      "id": 1,
      "name": "Barcelona",
      "country": "España",
      "players": [...]
    }
  }
]
```

---

### 8. Obtener todos los jugadores

**Request:**
```bash
curl http://localhost:3000/players
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Lionel Messi",
    "position": "Delantero",
    "teamId": 1,
    "team": {...}
  },
  {
    "id": 2,
    "name": "Gerard Piqué",
    "position": "Defensa",
    "teamId": 1,
    "team": {...}
  },
  {
    "id": 3,
    "name": "Luka Modrić",
    "position": "Centrocampista",
    "teamId": 2,
    "team": {...}
  }
]
```

---

### 9. Obtener un jugador específico

**Request:**
```bash
curl http://localhost:3000/players/1
```

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "Lionel Messi",
  "position": "Delantero",
  "teamId": 1,
  "team": {
    "id": 1,
    "name": "Barcelona",
    "country": "España",
    "players": [...]
  }
}
```

---

### 10. Actualizar un equipo

**Request:**
```bash
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "FC Barcelona",
    "country": "Cataluña"
  }'
```

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "FC Barcelona",
  "country": "Cataluña",
  "players": [...]
}
```

---

### 11. Actualizar un jugador

**Request:**
```bash
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{
    "position": "Extremo",
    "teamId": 2
  }'
```

**Response (200 OK):**
```json
{
  "id": 1,
  "name": "Lionel Messi",
  "position": "Extremo",
  "teamId": 2,
  "team": {
    "id": 2,
    "name": "Real Madrid",
    "country": "España",
    "players": [...]
  }
}
```

---

### 12. Eliminar un jugador

**Request:**
```bash
curl -X DELETE http://localhost:3000/players/2
```

**Response (200 OK):**
```json
{
  "message": "Jugador eliminado correctamente"
}
```

---

### 13. Eliminar un equipo (y todos sus jugadores)

**Request:**
```bash
curl -X DELETE http://localhost:3000/teams/1
```

**Response (200 OK):**
```json
{
  "message": "Equipo eliminado correctamente"
}
```

---

## ❌ Ejemplos de Errores

### Error 400 - Validación Fallida

**Request (nombre vacío):**
```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{
    "name": "",
    "country": "España"
  }'
```

**Response (400 Bad Request):**
```json
{
  "message": [
    "name should not be empty",
    "name must be longer than or equal to 2 characters"
  ],
  "error": "Bad Request",
  "statusCode": 400
}
```

---

### Error 404 - Recurso No Encontrado

**Request:**
```bash
curl http://localhost:3000/teams/999
```

**Response (404 Not Found):**
```json
{
  "message": "Equipo no encontrado",
  "error": "Not Found",
  "statusCode": 404
}
```

---

## 🧪 Prueba en Swagger UI

1. Abre: [http://localhost:3000/api](http://localhost:3000/api)
2. Haz clic en el endpoint que deseas probar
3. Haz clic en "Try it out"
4. Completa los parámetros requeridos
5. Haz clic en "Execute"
6. Verás la respuesta inmediatamente

---

**¡Diviértete probando la API! 🚀**

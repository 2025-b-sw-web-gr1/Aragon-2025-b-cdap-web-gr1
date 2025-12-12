# 📚 Proyecto 001: API RESTful de Bibliotecas y Libros

**Integrantes del Grupo:** [Tu nombre aquí]

---

## 📋 Descripción del Proyecto

Este proyecto implementa la documentación completa de una API RESTful que gestiona una relación **1 a muchos** entre **Bibliotecas** y **Libros**:

- **1 Biblioteca** → tiene → **muchos Libros**
- Cada libro pertenece a una sola biblioteca

---

## 🎯 Objetivos

1. Diseñar endpoints RESTful siguiendo las mejores prácticas
2. Documentar la API usando el estándar OpenAPI 3.0 (Swagger)
3. Crear archivos de prueba para Bruno API Client
4. Implementar operaciones CRUD completas para ambas entidades

---

## 🏗️ Estructura del Proyecto

```
Proyecto-001/
│
├── README.md                          # Este archivo
├── library-api.yaml                   # Documentación Swagger/OpenAPI
│
└── bruno-collection/                  # Colección de Bruno
    ├── libraries/                     # Endpoints de bibliotecas
    │   ├── get-all-libraries.bru
    │   ├── get-library-by-id.bru
    │   ├── create-library.bru
    │   ├── update-library.bru
    │   ├── delete-library.bru
    │   └── get-books-by-library.bru
    │
    └── books/                         # Endpoints de libros
        ├── get-all-books.bru
        ├── get-book-by-id.bru
        ├── create-book.bru
        ├── update-book.bru
        └── delete-book.bru
```

---

## 🌐 Diseño de la API

### URL Base
```
Producción: https://api.biblioteca.com/v1
Desarrollo: http://localhost:3000/v1
```

### Entidades

#### 📖 Biblioteca (Library)
```json
{
  "id": 1,
  "name": "Biblioteca Nacional",
  "address": "Av. Principal 123",
  "city": "Quito",
  "phone": "+593-2-1234567"
}
```

#### 📚 Libro (Book)
```json
{
  "id": 1,
  "title": "Cien años de soledad",
  "author": "Gabriel García Márquez",
  "isbn": "978-0307474728",
  "genre": "Ficción",
  "publishYear": 1967,
  "libraryId": 1
}
```

---

## 🛣️ Endpoints

### Bibliotecas (`/libraries`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/libraries` | Obtener todas las bibliotecas |
| `GET` | `/libraries/{id}` | Obtener biblioteca por ID |
| `POST` | `/libraries` | Crear nueva biblioteca |
| `PUT` | `/libraries/{id}` | Actualizar biblioteca completa |
| `DELETE` | `/libraries/{id}` | Eliminar biblioteca |
| `GET` | `/libraries/{id}/books` | Obtener libros de una biblioteca |

### Libros (`/books`)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/books` | Obtener todos los libros |
| `GET` | `/books/{id}` | Obtener libro por ID |
| `POST` | `/books` | Crear nuevo libro |
| `PUT` | `/books/{id}` | Actualizar libro completo |
| `DELETE` | `/books/{id}` | Eliminar libro |

---

## 🔍 Ejemplos de Uso

### Crear una Biblioteca

**Request:**
```http
POST /v1/libraries
Content-Type: application/json

{
  "name": "Biblioteca Central",
  "address": "Av. 6 de Diciembre",
  "city": "Quito",
  "phone": "+593-2-9876543"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "Biblioteca Central",
  "address": "Av. 6 de Diciembre",
  "city": "Quito",
  "phone": "+593-2-9876543"
}
```

### Crear un Libro

**Request:**
```http
POST /v1/books
Content-Type: application/json

{
  "title": "Rayuela",
  "author": "Julio Cortázar",
  "isbn": "978-8420471945",
  "genre": "Ficción",
  "publishYear": 1963,
  "libraryId": 1
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "title": "Rayuela",
  "author": "Julio Cortázar",
  "isbn": "978-8420471945",
  "genre": "Ficción",
  "publishYear": 1963,
  "libraryId": 1
}
```

### Obtener Libros de una Biblioteca

**Request:**
```http
GET /v1/libraries/1/books
```

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "title": "Cien años de soledad",
    "author": "Gabriel García Márquez",
    "isbn": "978-0307474728",
    "genre": "Ficción",
    "publishYear": 1967,
    "libraryId": 1
  },
  {
    "id": 2,
    "title": "El túnel",
    "author": "Ernesto Sabato",
    "isbn": "978-8432217326",
    "genre": "Ficción",
    "publishYear": 1948,
    "libraryId": 1
  }
]
```

---

## 📊 Códigos de Estado HTTP

| Código | Significado |
|--------|-------------|
| `200` | OK - Operación exitosa |
| `201` | Created - Recurso creado exitosamente |
| `204` | No Content - Eliminación exitosa |
| `400` | Bad Request - Datos inválidos |
| `404` | Not Found - Recurso no encontrado |
| `500` | Internal Server Error - Error del servidor |

---

## 🚀 Cómo Usar Este Proyecto

### 1. Visualizar la Documentación Swagger

1. Ve a [Swagger Editor](https://editor.swagger.io/)
2. Copia el contenido de `library-api.yaml`
3. Pégalo en el editor
4. Explora la documentación interactiva

### 2. Probar con Bruno API Client

1. Descarga e instala [Bruno](https://www.usebruno.com/)
2. Crea una nueva colección
3. Importa los archivos `.bru` de la carpeta `bruno-collection/`
4. Configura la variable de entorno `BASE_URL`
5. Ejecuta las peticiones en orden

### 3. Orden de Prueba Recomendado

1. ✅ Crear biblioteca
2. ✅ Obtener todas las bibliotecas
3. ✅ Obtener biblioteca por ID
4. ✅ Crear libro (usando ID de biblioteca)
5. ✅ Obtener todos los libros
6. ✅ Obtener libros de una biblioteca
7. ✅ Actualizar libro
8. ✅ Actualizar biblioteca
9. ✅ Eliminar libro
10. ✅ Eliminar biblioteca

---

## 🎓 Conceptos Implementados

### Principios REST

✅ **Recursos identificables**: Cada biblioteca y libro tiene un ID único  
✅ **Métodos HTTP estándar**: GET, POST, PUT, DELETE  
✅ **Representación JSON**: Todas las respuestas en formato JSON  
✅ **Stateless**: Cada petición contiene toda la información necesaria  
✅ **Códigos de estado apropiados**: 200, 201, 204, 400, 404, 500

### Relación 1 a Muchos

- Una biblioteca puede tener 0 o más libros
- Cada libro debe pertenecer a exactamente una biblioteca
- El campo `libraryId` en Book establece la relación
- Endpoint especial `/libraries/{id}/books` para consultar la relación

---

## 📝 Notas Técnicas

### Validaciones Requeridas

- **Biblioteca**: `name`, `address`, `city` son obligatorios
- **Libro**: `title`, `author`, `libraryId` son obligatorios
- El `libraryId` debe corresponder a una biblioteca existente

### Mejoras Futuras

- [ ] Implementar paginación en listados
- [ ] Agregar filtros avanzados
- [ ] Implementar búsqueda de libros por título/autor
- [ ] Agregar autenticación y autorización
- [ ] Implementar versionado de API
- [ ] Agregar rate limiting

---

## 🔗 Referencias

- [REST API Tutorial](https://restfulapi.net/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [Bruno Documentation](https://docs.usebruno.com/)
- [HTTP Status Codes](https://developer.mozilla.org/es/docs/Web/HTTP/Status)

---

## 👥 Integrantes del Grupo

- [Nombre Estudiante 1]
- [Nombre Estudiante 2]

---

## 📅 Información del Proyecto

- **Asignatura**: [Nombre de la asignatura]
- **Profesor**: [Nombre del profesor]
- **Fecha de entrega**: [Fecha]
- **Repositorio**: [URL del repositorio]

---

**¡Proyecto completado exitosamente! 🎉**
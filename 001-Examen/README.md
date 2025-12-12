# 🎓 Examen 01: Documentación Integral de APIs REST con Swagger (JSONPlaceholder)

## 📌 Datos del Estudiante
**Nombre:** CHRISTIAN DANIEL ARAGÓN PAZMIÑO
**Curso:** Aplicaciones Web - Semestre 2025B
**Basado en:** Talleres 008-009 (Bruno API Testing)

---

## 1. Objetivos del Informe y Repositorio

El objetivo principal de este trabajo es documentar de manera integral la API REST simulada de **JSONPlaceholder** utilizando el estándar **OpenAPI Specification (OAS 3.0)**.
* Se busca demostrar la comprensión de los fundamentos teóricos de la documentación de APIs.
* Se aplica la estructura práctica del YAML para todos los métodos CRUD (GET, POST, PUT, PATCH, DELETE) en varios endpoints.

---

## 2. Introducción Teórica: La Importancia de Documentar una API

La documentación es el pilar para la usabilidad y colaboración en el desarrollo de APIs. En la arquitectura REST, la documentación actúa como un **contrato** entre el frontend, el backend y los equipos de QA (Control de Calidad).

### 2.1. ¿Por qué es fundamental documentar una API?
* **Facilita la Adopción:** Permite que desarrolladores externos o nuevos miembros del equipo consuman el servicio rápidamente.
* **Acelera el Desarrollo:** Permite el desarrollo simultáneo (paralelo) del frontend y el backend (enfoque *Design First*).
* **Asegura la Calidad (Testing):** Herramientas como Swagger UI permiten realizar pruebas de los endpoints en tiempo real.
* **Reduce Errores:** Minimiza las ambigüedades sobre los tipos de datos, los códigos de estado y los campos obligatorios.

### 2.2. Definición y Componentes de Swagger
**Swagger** es un conjunto de herramientas de código abierto basadas en el estándar **OpenAPI (OAS)**.
* **OpenAPI Specification (OAS):** Es el estándar formal (el archivo YAML o JSON) que describe la estructura de la API.
* **Swagger Editor:** Herramienta para escribir código OAS y verlo renderizado en tiempo real.
* **Swagger UI:** Herramienta de visualización que convierte el archivo OAS en una interfaz web interactiva y amigable para el usuario. 

---

## 3. Conceptos Clave del Estándar OpenAPI (OAS 3.0)

### 3.1. Estructura Base de OAS
El archivo YAML de la documentación (`swagger-documentation.yaml`) se organiza en secciones clave:
* `openapi`: Versión de la especificación (`3.0.0`).
* `info`: Metadatos de la API (`title`, `description`, `version`, `contact`).
* `servers`: Define la URL base de la API (`https://jsonplaceholder.typicode.com`).
* `paths`: Contiene todos los endpoints (`/posts`, `/users`, etc.) y sus métodos HTTP.
* `components/schemas`: Contiene los **modelos de datos reutilizables** (ej., `Post`, `User`, `Error`).

### 3.2. Tipos de Parámetros
Los parámetros definen la información adicional requerida en una petición:

| Tipo | Clave en OAS | Ubicación en la Petición | Uso Común |
| :--- | :--- | :--- | :--- |
| **Path** | `in: path` | Parte de la URL (`/users/{id}`) | Identificadores únicos de recursos. |
| **Query** | `in: query` | Después del `?` (`/comments?postId=1`) | Filtrado, paginación, o búsqueda. |
| **Body** | `requestBody` | Cuerpo de la petición (POST, PUT, PATCH) | Envío de datos JSON. |

### 3.3. Diferencia entre PUT y PATCH
Ambos actualizan recursos, pero difieren en su alcance:
* **PUT (Actualización Completa):** Reemplaza el recurso completo. El cuerpo de la petición (`requestBody`) debe incluir **todos** los campos del recurso.
* **PATCH (Actualización Parcial):** Aplica modificaciones parciales. El cuerpo de la petición solo incluye los **campos que se desean modificar**.

---

## 4. Evidencia Práctica y Documentación de Métodos

La documentación implementada en el archivo `swagger-documentation.yaml` cubre los siguientes aspectos:

### Endpoints Principales Documentados
| Recurso | Métodos Documentados | Descripción |
| :--- | :--- | :--- |
| `/posts` | GET, POST, PUT, PATCH, DELETE | Operaciones CRUD completas. |
| `/comments` | GET (con filtro `postId`), POST | Lectura y Creación de comentarios. |
| `/albums` | GET, POST, GET/{id} | Álbumes y sus detalles. |
| `/photos` | GET (con filtro `albumId`) | Acceso a las fotos. |
| `/todos` | GET, POST, GET/{id} | Listas de tareas pendientes. |
| `/users` | GET, GET/{id} | Usuarios del sistema y sus detalles completos. |

### Detalle de Métodos CRUD
| Operación | Método | URL | Esquemas de Uso | Código de Respuesta Principal |
| :--- | :--- | :--- | :--- | :--- |
| **Leer Todos** | GET | `/posts` | Responde con `array` de `Post`. | `200` (OK) |
| **Leer Específico** | GET | `/posts/{id}` | Parámetro `id` en path. Responde con `Post`. | `200` (OK) / `404` (Not Found) |
| **Crear** | POST | `/posts` | Utiliza `PostCreate` en `requestBody`. | `201` (Created) |
| **Actualizar Completo** | PUT | `/posts/{id}` | Utiliza `Post` (completo) en `requestBody`. | `200` (OK) |
| **Actualizar Parcial** | PATCH | `/posts/{id}` | Utiliza `PostPatch` (parcial) en `requestBody`. | `200` (OK) |
| **Eliminar** | DELETE | `/posts/{id}` | No requiere `requestBody`. | `200` (OK) |

---



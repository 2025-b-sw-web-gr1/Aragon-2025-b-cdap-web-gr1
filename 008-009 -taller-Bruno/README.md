# Taller 08-09: Testing de APIs con Bruno

## 📋 Descripción del Proyecto
Este taller consiste en utilizar Bruno (una alternativa open-source a Postman/Insomnia) para probar todos los endpoints de la API pública JSONPlaceholder.

## 🎯 Objetivos del Taller
✅ Instalar y configurar Bruno en VS Code
✅ Crear una colección completa de peticiones HTTP
✅ Probar todos los métodos HTTP (GET, POST, PUT, PATCH, DELETE)
✅ Entender cómo funcionan los parámetros en APIs REST
✅ Analizar códigos de respuesta HTTP
✅ Trabajar con diferentes tipos de peticiones (query params, body JSON)

## 🔧 Herramientas Utilizadas
- **Bruno** - Cliente de APIs open-source
- **VS Code Extension** - Bruno integrado en el editor
- **JSONPlaceholder** - API REST de prueba gratuita

## 📁 Estructura de la Colección
```
08-09-Taller_Bruno/
├── bruno.json                      # Configuración de la colección
├── README.md                       # Esta documentación
│
├── 📂 POSTS (6 peticiones)
│   ├── get-all-posts.bru          # GET /posts
│   ├── get-post-by-id.bru         # GET /posts/1
│   ├── create-post.bru            # POST /posts
│   ├── update-post-put.bru        # PUT /posts/1
│   ├── update-post-title.bru      # PATCH /posts/1
│   └── delete-post.bru            # DELETE /posts/1
│
├── 📂 COMMENTS (3 peticiones)
│   ├── get-all-comments.bru       # GET /comments
│   ├── get-comments-by-post.bru   # GET /comments?postId=1
│   └── create-comment.bru         # POST /comments
│
├── 📂 ALBUMS (3 peticiones)
│   ├── get-all-albums.bru         # GET /albums
│   ├── get-album-by-id.bru        # GET /albums/1
│   └── create-album.bru           # POST /albums
│
├── 📂 PHOTOS (2 peticiones)
│   ├── get-all-photos.bru         # GET /photos
│   └── get-photos-by-album.bru    # GET /photos?albumId=1
│
├── 📂 TODOS (3 peticiones)
│   ├── get-all-todos.bru          # GET /todos
│   ├── get-todo-by-id.bru         # GET /todos/1
│   └── create-todo.bru            # POST /todos
│
└── 📂 USERS (2 peticiones)
    ├── get-all-users.bru          # GET /users
    └── get-user-by-id.bru         # GET /users/1
```

**Total: 19 peticiones organizadas** ✅

## 🚀 Cómo Usar la Colección

### 1. Abrir la colección en Bruno

**Opción A: Usando la extensión de VS Code**
1. Abre VS Code en la carpeta `08-09-Taller_Bruno`
2. La extensión de Bruno detectará automáticamente el archivo `bruno.json`
3. Verás todas las peticiones en el panel lateral de Bruno

**Opción B: Usando Bruno Desktop**
1. Abre la aplicación Bruno
2. **File → Open Collection**
3. Selecciona la carpeta `08-09-Taller_Bruno`

### 2. Ejecutar peticiones
Para cada archivo `.bru`:
1. Haz clic en el archivo en el explorador de Bruno
2. Presiona el botón "Send" o usa `Ctrl + Enter`
3. Observa:
   - **Status Code** (200, 201, etc.)
   - **Response Time** (tiempo de respuesta)
   - **Response Body** (datos JSON devueltos)
   - **Headers** (cabeceras de respuesta)

## 📊 Métodos HTTP Implementados

| Método | Cantidad | Descripción |
|--------|----------|-------------|
| GET | 13 | Obtener recursos |
| POST | 5 | Crear recursos |
| PUT | 1 | Actualizar completo |
| PATCH | 1 | Actualizar parcial |
| DELETE | 1 | Eliminar recursos |

## 💡 Ventajas de Bruno sobre Postman
✅ **Open Source** - Código abierto y gratuito
✅ **Git-Friendly** - Archivos .bru en texto plano
✅ **Sin Cuenta** - No requiere registro
✅ **Offline** - Funciona sin conexión
✅ **Ligero** - Menos consumo de recursos
✅ **VS Code Integration** - Extensión nativa
✅ **Version Control** - Fácil de versionar con Git

## 👨‍💻 Autor
Desarrollado para el curso de Aplicaciones Web - Semestre 2025B

---

🎉 ¡Explora, experimenta y aprende! 🚀

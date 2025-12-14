// data.js

const RENDER_DATA = {
    // 0. Inicio
    0: {
        title: "Motor de Renderización: Inicio",
        description: "El navegador comienza a leer los bytes del documento HTML. Presione 'Siguiente Fase' para empezar el proceso.",
        diagram: "Documento HTML (Bytes) ➡️ Caracteres ➡️ Tokens",
        nextButton: "Iniciar Parsing (Crear DOM)"
    },

    // 1. Fase de PARSING: Construcción del DOM
    1: {
        title: "Fase 1: Construcción del DOM (Document Object Model)",
        description: "El HTML se traduce en una estructura de árbol de objetos (el DOM). Cada nodo es un elemento HTML. El DOM solo representa la ESTRUCTURA del contenido.",
        diagram: `
            [Document]
             ├── [html]
             │   ├── [head]
             │   │   ├── [meta]
             │   │   ├── [title]
             │   │   └── <link rel="stylesheet">  <-- ¡CSS detectado!
             │   └── [body]
             │       └── <div id="app">
             │           ├── <header>
             │           ├── <main>
             │           └── <footer>
        `,
        nextButton: "Construir CSSOM"
    },

    // 2. Fase de PARSING: Construcción del CSSOM
    2: {
        title: "Fase 2: Construcción del CSSOM (CSS Object Model)",
        description: "El navegador procesa los estilos CSS y crea otro árbol. A diferencia del DOM, el CSSOM incluye el estilo final de cada elemento (herencia y cascada aplicadas).",
        diagram: `
            [StyleSheet]
             ├── body { font-size: 16px; margin: 0; }
             └── .header { 
                 ├── background-color: blue; 
                 └── height: 60px; 
                 }
             └── #app (div) { 
                 └── padding: 20px; 
                 }
        `,
        nextButton: "Crear Render Tree"
    },

    // 3. Fase de RENDER TREE (Árbol de Renderizado)
    3: {
        title: "Fase 3: Creación del Render Tree (DOM + CSSOM)",
        description: "El Render Tree es la fusión del DOM y el CSSOM. Contiene solo los nodos que son visibles (elementos como 'display: none' son excluidos).",
        diagram: `
            [Viewport]
             ├── [Div#app] (padding: 20px)
             │   ├── [Header] (bg: blue; h: 60px)
             │   └── [Main] (font-size: 16px)
             │       └── [Div.post] (border: 1px solid)
             └── [Footer] (color: gray)
            
            <span class="highlight">¡Este árbol solo incluye lo que el usuario ve!</span>
        `,
        nextButton: "Ejecutar Layout (Reflow)"
    },

    // 4. Fase de LAYOUT
    4: {
        title: "Fase 4: Layout (o Reflow)",
        description: "El navegador calcula el tamaño y la posición exacta (en píxeles) de cada elemento en el Render Tree. Esto consume mucho rendimiento si se repite.",
        diagram: `
            [Viewport: 1024x768]
             ├── [Div#app] { top: 60px; left: 0; width: 1024px; height: 708px; }
             │   ├── [Header] { top: 0; left: 0; width: 1024px; height: 60px; }
             │   └── [Main] { top: 60px; left: 0; width: 600px; height: 600px; } <span class="highlight"> <-- Coordenadas X/Y y dimensiones.</span>
             └── ...
        `,
        nextButton: "Ejecutar Paint (Pintado)"
    },

    // 5. Fase de PAINTING
    5: {
        title: "Fase 5: Painting (Pintado y Composición)",
        description: "El navegador pinta los píxeles reales en la pantalla (colores, sombras, texto). Finalmente, la composición apila las capas para mostrarlas.",
        diagram: `
            <span class="highlight">🏁 Resultado Final:</span>
            
            1. Pintar Fondo (body)
            2. Pintar Header (capa superior)
            3. Pintar Main Content (texto, imágenes)
            4. <span class="highlight">🎉 ¡Página lista para el usuario!</span>
        `,
        nextButton: "Reiniciar Taller"
    }
};
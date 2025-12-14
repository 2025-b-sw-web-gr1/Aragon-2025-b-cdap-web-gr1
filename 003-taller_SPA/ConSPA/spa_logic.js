// =======================================
// 1. DATA (Simulando la respuesta de una API o la carga de un archivo)
// =======================================

const pages = {
    // La página de inicio
    'home': {
        title: 'Planetas | Inicio SPA',
        content: `
            <h1 class="text-3xl font-extrabold text-gray-800 mb-4">Bienvenido a la Galaxia (SPA)</h1>
            <p class="text-gray-600 mb-6">
                ¡Esto es una SPA! Al hacer clic en "Marte", solo el contenido de esta área cambia, sin recargar el menú superior. 
                Esto resulta en una experiencia de usuario mucho más fluida.
            </p>
            <div class="p-6 bg-yellow-50 border-l-4 border-yellow-500">
                <h2 class="text-2xl font-semibold text-yellow-800 mb-2">🪐 La Tierra</h2>
                <p class="text-gray-700">
                    Nuestro hogar, el tercer planeta desde el Sol, es el único cuerpo astronómico conocido donde existe vida. Se formó hace aproximadamente 4.54 mil millones de años.
                </p>
            </div>
        `
    },
    // La página de Marte
    'marte': {
        title: 'Planetas | Marte SPA',
        content: `
            <h1 class="text-3xl font-extrabold text-gray-800 mb-4">El Planeta Rojo (SPA)</h1>
            <p class="text-gray-600 mb-6">
                ¡Observa la fluidez! Solo el área de contenido principal se ha actualizado. JavaScript usó la API History para cambiar la URL y cargó el contenido del objeto 'pages'.
            </p>
            <div class="p-6 bg-red-50 border-l-4 border-red-500">
                <h2 class="text-2xl font-semibold text-red-800 mb-2">🔴 Marte</h2>
                <p class="text-gray-700">
                    Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar. Es conocido como el "Planeta Rojo" debido a la presencia de óxido de hierro.
                </p>
            </div>
        `
    }
};

// =======================================
// 2. CORE LOGIC (Manejo de la navegación)
// =======================================

const contentArea = document.getElementById('content-area');

/**
 * Carga el contenido de la ruta especificada.
 * @param {string} route - La clave de la página ('home' o 'marte').
 */
function loadContent(route) {
    const pageData = pages[route] || pages['home']; // Usa 'home' como fallback
    
    // 1. Animación y Retraso (Para simular una carga de red)
    contentArea.classList.remove('fade-in'); 

    // 2. Esperar un poco antes de inyectar el nuevo contenido
    setTimeout(() => {
        // 3. Actualizar el contenido HTML
        contentArea.innerHTML = pageData.content;
        
        // 4. Actualizar el título de la página en la pestaña del navegador
        document.title = pageData.title;

        // 5. Iniciar la animación de entrada
        contentArea.classList.add('fade-in');
        
        // 6. Actualizar el estilo de los enlaces en el menú
        updateNavLinks(route);
    }, 100); 
}

/**
 * Maneja el cambio de URL y el historial del navegador.
 * @param {string} route - La clave de la página.
 * @param {boolean} pushState - Indica si se debe añadir una entrada al historial.
 */
function navigateTo(route, pushState = true) {
    // Si la ruta no existe, vamos a home
    const effectiveRoute = pages[route] ? route : 'home'; 

    if (pushState) {
        // Actualiza la URL del navegador sin recargar la página
        // Simplemente agregamos '/ruta' al path
        window.history.pushState({ route: effectiveRoute }, '', `/${effectiveRoute}`); 
    }

    loadContent(effectiveRoute);
}

/**
 * Actualiza la clase de los enlaces para indicar la página activa.
 */
function updateNavLinks(activeRoute) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-route') === activeRoute) {
            link.classList.add('text-indigo-500', 'font-bold');
            link.classList.remove('text-gray-600', 'font-semibold');
        } else {
            link.classList.remove('text-indigo-500', 'font-bold');
            link.classList.add('text-gray-600', 'font-semibold');
        }
    });
}

// =======================================
// 3. EVENT LISTENERS Y SETUP
// =======================================

document.addEventListener('DOMContentLoaded', () => {
    // Escuchar clics en los enlaces con la clase 'nav-link'
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Detiene la recarga de página por defecto
            const route = e.target.getAttribute('data-route');
            navigateTo(route);
        });
    });

    // Escuchar el botón de retroceso/avance del navegador
    window.addEventListener('popstate', (e) => {
        // Obtenemos la ruta del estado de la historia (state) o del pathname
        const route = e.state && e.state.route 
            ? e.state.route 
            : window.location.pathname.substring(1) || 'home';
        
        // Usamos false para no crear una nueva entrada en el historial
        navigateTo(route, false); 
    });

    // Cargar la página inicial (al cargar el script por primera vez)
    const initialRoute = window.location.pathname.substring(1) || 'home';
    navigateTo(initialRoute, false); // No empujar el estado inicial

    console.log('✅ Sistema Solar SPA inicializado.');
});
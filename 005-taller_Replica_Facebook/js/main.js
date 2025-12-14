// =========================================
// 1. THEME MANAGEMENT (Dark/Light Mode)
// =========================================

// Inicializa el tema desde localStorage o por defecto a claro
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark', 'bg-gray-900');
    } else {
        document.body.classList.remove('dark', 'bg-gray-900');
    }
}

// Alterna entre tema oscuro y claro
function toggleTheme() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('bg-gray-900');
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    console.log(`Tema cambiado a: ${currentTheme}`);
}

// =========================================
// 2. DYNAMIC NAVIGATION (SPA Core)
// =========================================

const contentArea = document.getElementById('content-area');

// Carga el contenido de otra página dinámicamente
async function loadPage(url) {
    if (!contentArea) return;

    try {
        contentArea.style.opacity = '0.5'; // Muestra estado de carga
        contentArea.innerHTML = '';

        // 1. Fetch: Obtiene el HTML de la página objetivo
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const htmlText = await response.text();

        // 2. DOMParser: Analiza el HTML recibido
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        // 3. Extracción: Obtiene solo el contenido dentro de <main id="content-area">
        const newContent = doc.getElementById('content-area');
        const newTitle = doc.querySelector('title').textContent;

        if (newContent) {
            // 4. Inyección: Reemplaza el contenido actual
            contentArea.innerHTML = newContent.innerHTML;
            document.title = newTitle; // Actualiza el título de la pestaña
        }

        contentArea.style.opacity = '1'; // Elimina estado de carga
        updateNavigation(url);

    } catch (error) {
        console.error("Error al cargar la página:", error);
        contentArea.innerHTML = `<div class="p-8 text-center text-red-500">
            <h1>Error de Carga</h1>
            <p>No se pudo cargar la página ${url}. Asegúrate de usar un servidor local.</p>
        </div>`;
        contentArea.style.opacity = '1';
    }
}

// Maneja el enrutamiento y el historial del navegador
function navigateTo(url) {
    // Si la URL es la misma, no hacer nada
    if (window.location.pathname.endsWith(url)) return; 

    // 1. History API: Añade una entrada al historial sin recargar
    window.history.pushState({ url: url }, '', url);
    
    // 2. Carga el contenido
    loadPage(url);
}

// Actualiza qué enlace está "activo" en la barra de navegación
function updateNavigation(currentUrl) {
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        
        link.classList.remove('text-blue-500', 'font-bold');
        link.classList.add('text-gray-600', 'hover:text-gray-900', 'dark:text-gray-400', 'dark:hover:text-white');

        // Usa endsWith para comparar la ruta final (ej. index.html vs perfil.html)
        if (currentUrl.endsWith(linkHref)) {
            link.classList.add('text-blue-500', 'font-bold');
            link.classList.remove('text-gray-600', 'hover:text-gray-900', 'dark:text-gray-400', 'dark:hover:text-white');
        }
    });
}

// Maneja la ruta inicial y el botón de atrás/adelante
function handleRoute() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
    
    // history.replaceState asegura que la carga inicial sea correcta
    history.replaceState({ url: currentPage }, document.title, currentPage);
    loadPage(currentPage);
}


// =========================================
// 3. INITIALIZATION
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el tema
    initTheme();
    
    // Configurar el botón de tema
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Configurar la navegación (interceptar clics en .nav-link)
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            const targetUrl = link.getAttribute('href');
            navigateTo(targetUrl);
        }
    });

    // Configurar el historial (botón atrás/adelante)
    window.addEventListener('popstate', () => {
        const state = history.state;
        if (state && state.url) {
            loadPage(state.url);
        } else {
            handleRoute();
        }
    });

    // Cargar la ruta inicial
    handleRoute();

    console.log('✅ Facebook SPA Logic initialized.');
});
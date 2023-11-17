document.addEventListener("DOMContentLoaded", function () {
    let ventanaEmergente: Window | null;

    function abrirVentana() {
        if (confirm("¿Deseas abrir una nueva ventana?")) {
            ventanaEmergente = window.open("nuevaVentana.html", "NuevaVentana", "width=300, height=300, top=400, left=400, toolbar=no, menubar=no");
            if (ventanaEmergente) {
                ventanaEmergente.document.write(`
                    <h3>Exemplo de Ventá nova</h3>
                    <p>URL: ${window.location.href}</p>
                    <p>Protocolo: ${window.location.protocol}</p>
                    <p>Navegador: ${navigator.userAgent}</p>
                    <p>Java esta disponible: ${navigator.javaEnabled() ? 'Sí' : 'Non'}</p>
                `);
            }
        }
    }

    function cerrarVentana() {
        if (ventanaEmergente && !ventanaEmergente.closed) {
            ventanaEmergente.close();
        } else {
            alert("A ventana remota xa foi pechada.");
        }
    }

    function desplazarVentana() {
        if (ventanaEmergente && !ventanaEmergente.closed) {
            ventanaEmergente.moveBy(50, 50);
            ventanaEmergente.focus();
        }
    }

    function redimensionarVentana() {
        if (ventanaEmergente && !ventanaEmergente.closed) {
            ventanaEmergente.resizeTo(500, 500);
            ventanaEmergente.focus();
        }
    }

    function aumentarVentana() {
        if (ventanaEmergente && !ventanaEmergente.closed) {
            ventanaEmergente.resizeBy(50, 50);
            ventanaEmergente.focus();
        }
    }

    // Event listeners
    document.querySelector("button[data-action='abrir']").addEventListener("click", abrirVentana);
    document.querySelector("button[data-action='cerrar']").addEventListener("click", cerrarVentana);
    document.querySelector("button[data-action='desplazar']").addEventListener("click", desplazarVentana);
    document.querySelector("button[data-action='redimensionar']").addEventListener("click", redimensionarVentana);
    document.querySelector("button[data-action='aumentar']").addEventListener("click", aumentarVentana);
});

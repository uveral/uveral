const fechaActual: Date = new Date();


const finDeCurso: Date = new Date(fechaActual.getFullYear(), 5, 25);
const diasRestantes: number = Math.ceil((finDeCurso - fechaActual) / (1000 * 60 * 60 * 24));
document.getElementById("diasRestantes").querySelector("span").innerText = Math.abs(diasRestantes).toString();


const aniversario: Date = new Date(prompt("Introduce la fecha de tu aniversario (MM/DD):"));
let añosEnFinDeSemana: string = "";
let añoActual: number = fechaActual.getFullYear();
while (añoActual <= 2100) {
    aniversario.setFullYear(añoActual);
    if (aniversario.getDay() === 0 || aniversario.getDay() === 6) {
        añosEnFinDeSemana += `Año ${añoActual}, `;
    }
    añoActual++;
}
document.getElementById("aniversarioFinSemana").querySelector("span").innerText = añosEnFinDeSemana;


function mostrarFecha(): void {
    const formatoSeleccionado: string = document.getElementById("formatoFecha").value;
    let opciones: Intl.DateTimeFormatOptions = {};

    switch (formatoSeleccionado) {
        case '1':
            opciones = { year: 'numeric', month: 'numeric', day: 'numeric' };
            break;
        case '2':
            opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            break;
        case '3':
            opciones = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
            break;
    }

    const idioma: string = (formatoSeleccionado === '2') ? 'gl-ES' : 'en-US';
    let resultado: string = fechaActual.toLocaleDateString(idioma, opciones);

    // Para el caso '3' (formato específico), ajustamos el día y el mes a gallego
    if (formatoSeleccionado === '3' && idioma === 'gl-ES') {
        const fechaArray: string[] = resultado.split(' ');
        const dia: string = fechaArray[2].replace(',', '').trim();
        const mes: string = fechaArray[1].trim();
        resultado = `${fechaArray[0]}, ${dia} de ${mes} de ${fechaArray[3]}`;
    }

    document.getElementById("resultadoFecha").querySelector("span").innerText = resultado;
}

function mostrarHora(): void {
    const formatoSeleccionado: string = document.getElementById("formatoHora").value;
    let opciones: Intl.DateTimeFormatOptions = {};

    switch (formatoSeleccionado) {
        case '1':
            opciones = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
            break;
        case '2':
            opciones = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
            break;
    }

    const resultado: string = fechaActual.toLocaleTimeString('en-US', opciones);
    document.getElementById("resultadoHora").querySelector("span").innerText = resultado;
}

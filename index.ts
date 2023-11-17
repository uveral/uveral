declare function prompt(message?: string): string | null;
declare function alert(message?: string): void;


function obtenerNomeApelidos(): void {
  const nomeCompleto: string | null = prompt("Introduce tu nome e apelidos");

  if (nomeCompleto !== null) {
    // Tamaño do nome e apelidos
    const tamanoNomeCompleto: number = nomeCompleto.length;

    // Tamaño sen espazos
    const tamanoSenEspazos: number = nomeCompleto.replace(/\s/g, "").length;

    const enMinusculas: string = nomeCompleto.toLowerCase();

    const enMaiusculas: string = nomeCompleto.toUpperCase();

    const partes: string[] = nomeCompleto.split(" ");
    const nome: string = partes[0];
    const apelido1: string = partes[1];
    const apelido2: string = partes[2];

    const propostaUsuario: string = nome.toLowerCase() + apelido1.charAt(0).toUpperCase() + apelido2.charAt(0).toUpperCase();

    // Mostrar resultados
    console.log("Tamaño do nome e apelidos: " + tamanoNomeCompleto);
    console.log("Tamaño sen espazos: " + tamanoSenEspazos);
    console.log("En minúsculas: " + enMinusculas);
    console.log("En maiúsculas: " + enMaiusculas);
    console.log("Nome: " + nome);
    console.log("Apelido1: " + apelido1);
    console.log("Apelido2: " + apelido2);
    console.log("Proposta de usuario: " + propostaUsuario);
  }
}

// Función para verificar a contrasinal
function verificarContrasena(): void {
  const contrasena: string | null = prompt("Introduce a túa contrasinal");

  if (contrasena !== null) {
    // Verificar condicións
    const cumpleCondicions: boolean = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\-@$%&!])[A-Za-z\d_\-@$%&!]{8,16}$/.test(contrasena);
   if (cumpleCondicions) {
      console.log("A contrasinal cumpre coas condicións.");
    } else {
      console.log("A contrasinal non cumpre coas condicións.");
    }
  }
}


obtenerNomeApelidos();
verificarContrasena();

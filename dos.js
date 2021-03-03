function mostrar() {
  let nombre;
  let cursada;
  let sexo;
  let nota;
  let edad;
  let cantidad; 
  let notaMax;
  let nombreNotaMax;
  let nombreMasJovenL;
  let edadMasJovenL;
  let promedioF;
  let promedioM;
  let promedioNobinario;
  let flagMasCursos = 1;
  let edadMasCursos;
  let nombreMasCursos;
  let materiasMax; 
  let seguir;
  let acumM = 0;
  let contNotasM = 0
  let acumF = 0; 
  let contNotasF = 0;
  let acumNoB = 0;
  let contNotasNoB = 0;
  let flagNotaMax = 1;
  let flagEdadMin = 1;

  do {
    nombre = prompt("Ingrese el nombre: ");
    cursada = prompt("Ingrese tipo de cursada: ");
    while (
      cursada != "Libre" &&
      cursada != "Presencial" &&
      cursada != "Remota"
    ) {
      cursada = prompt(
        "Dato inválido. Reingrese el tipo de cursada (Libre, Presencial o Remota): "
      );
    }
    cantidad = parseInt(prompt("Ingrese la cantidad de materias: "))
    while (isNaN(cantidad) || cantidad <= 0 || cantidad > 8){
      cantidad = parseInt(prompt("Error, reingrese la cantidad de materias: "))
    }
    sexo = prompt("Ingrese estado sexo: f/m/no binario");
    while (sexo != "f" && sexo != "m" && sexo != "no binario") {
      sexo = prompt("Error, reingrese estado sexo: f/m/ no binario");
    }
    nota = parseInt(prompt("Ingrese nota promedio: "));
    while (isNaN(nota) || nota < 0 || nota > 10) {
      nota = parseInt(prompt("Error, reingrese nota promedio: "));
    }
    edad = parseInt(prompt("Ingrese edad: "));
    while (isNaN(edad) || edad < 0) {
      edad = parseInt(prompt("Error, reingrese edad: "));
    }
    if (sexo == "f" || sexo == "no binario"){
      if (flagNotaMax == 1 || nota > notaMax){
        notaMax = nota;
        nombreNotaMax = nombre; 
        flagNotaMax = 0; 
      }
    }
    if (cursada == "Libre"){
      if (flagEdadMin || edad < edadMasJovenL){
        edadMasJovenL = edad;
        nombreMasJovenL = nombre; 
        flagEdadMin = 0;
    }
  }
  if(cursada == "Libre" || cursada == "Presencial"){
    if (flagMasCursos || cantidad > materiasMax){
      materiasMax = cantidad;
      edadMasCursos = edad;
      nombreMasCursos = nombre;
      flagMasCursos = 0;
    }
  }
  switch (sexo){
    case "f":
      contNotasF++;
      acumF += nota;
      break;
    case "m":
      contNotasM++;
      acumM+= nota;
      break;
    case "no binario":
      contNotasM++;
      acumNoB += nota;
  }
    seguir = prompt("¿Quiere ingresar otro alumno: (si/no)"); 
} while (seguir == "si");

if ( notaMax > 0){
console.log ("A- El promedio más alto de un estudiante no masculino es: " + nombreNotaMax + " con un promedio de " + notaMax);
} else {
console.log ("A- No hay alumnas femeninas o no binarios");
}
if (edadMasJovenL > 0){
console.log ("B- El nombre del mas joven de los alumnos entre los que la dan libre es: " + nombreMasJovenL + " con " + edadMasJovenL + " años");
}
else {
  console.log("B- No hay alumnos que cursen libre");
}
if (contNotasF > 0 ){
  promedioF = acumF/contNotasF;
  console.log ("C- El promedio de notas femeninos es: " + promedioF);
}
else {
  console.log ("C- No hay alumnas femeninas");
}
if (contNotasM > 0){
  promedioM = acumM/contNotasM;
  console.log ("C- El promedio de notas masculinos es: " + promedioM);
}
else {
  console.log ("C- No hay alumnos masculinos");
}
if (contNotasNoB > 0){
  promedioNobinario = acumNoB/contNotasNoB;
  console.log ("C- El promedio de notas masculinos es: " + promedioNobinario);
} else {
  console.log ("C- No hay alumnos no binarios");
}
if (cursada != "Remota"){
  console.log("D- La edad y nombre del que cursa mas materias que no sean en forma remota es de: " + nombreMasCursos + " con " + edadMasCursos + " y con " + materiasMax + " materias");
}
else {
  console.log("D- No hay alumnos que cursen forma libre o presencial"); 
}
}

// Jorge García Div B, DNI: 95873374

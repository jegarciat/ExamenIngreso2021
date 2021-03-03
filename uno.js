function mostrar()
{
	let nombre;
	let tipo;
	let cantidad;
	let precio;
	let tipoDeInflamable;
	let marca;
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat; 
	let acumAlcohol = 0;
	let acumIac = 0; 
	let acumQuat = 0; 
	let contAlcohol = 0;
	let contIac = 0;
	let contIacBarato = 0;
	let acumIacBarato = 0; 
	let contQuat = 0; 
	let precioMax;
	let marcaMax; 
	let tipoMax; 
	let acumIgnifugo = 0;
	let acumCombustible = 0;
	let acumExplosivo = 0;
	let flag = 1;

	for (let i = 0; i < 5; i++) {
		nombre = prompt("Ingrese el nombre del producto: ");
		tipo = prompt("Ingrese el tipo de producto (Alcohol, Iac o Quat): ");
		while (tipo != "Alcohol" && tipo != "Iac" && tipo != "Quat"){
			tipo = prompt("Dato inválido. Reingrese el producto (Alcohol, Iac o Quat): ");
		}
		precio = parseInt(prompt("Ingrese precio en 100 y 300 pesos: "));
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseInt(prompt("Error, reingrese precio entre 100 y 300 pesos: "));
		}
		cantidad = parseInt(prompt("Ingrese cantidad de productos (hasta 1000 unidades): "))
		while (cantidad <= 0 || cantidad > 1000 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("Error, reingrese cantidad de unidades (hasta 1000 unidades): "));
		} 
		tipoDeInflamable = prompt("Ingrese el tipo de inflamabele (ignífugo/ combustible/ explosivo): ")
		while(tipoDeInflamable != "ignífugo" && tipoDeInflamable != "combustible" && tipoDeInflamable != "explosivo"){
			tipoDeInflamable = prompt("Error, reingrese el tipo de inflamabele (ignífugo/ combustible/ explosivo): ");
		}
		marca = prompt("Ingrese marca: ")

		switch (tipo){
			case "Alcohol":
				acumAlcohol += cantidad;
				contAlcohol++;
				break;
			case "Iac":
				acumIac += cantidad;
				contIac++;
				if (precio <= 200){
					contIacBarato++;
					acumIacBarato += cantidad;
				}
				break;
			case "Quat":
				acumQuat+= cantidad;
				contQuat++;
				break;
		}
		if(tipoDeInflamable == "ignífugo"){
			acumIgnifugo += cantidad;
		} 
		else if ( tipoDeInflamable == "combustible"){
			acumCombustible+= cantidad;
		}
		else if (tipoDeInflamable == "explosivo"){
			acumExplosivo += cantidad;
		}

		if (flag || precio > precioMax){
			precioMax = precio;
			marcaMax = marca;
			tipoMax = tipo;
			flag = 0;
		}
	}
	promedioIac = acumIac/contIac;
	promedioQuat = acumQuat/contQuat;
	promedioAlcohol = acumAlcohol/contAlcohol;
	
	console.log("A- El promedio de cantidad de alcoles es de: " + promedioAlcohol);
	console.log("A- El promedio de cantidad de QUAT es de: " + promedioQuat);
	console.log("A- El promedio de cantidad de IAC es de: " + promedioIac);

	if (acumIgnifugo > acumCombustible && acumIgnifugo > acumExplosivo){
		console.log("B- El tipo de inflamable con más cantidad de unidades en total es ignifugo con : " + acumIgnifugo);
	}
	else if (acumCombustible >= acumIgnifugo && acumCombustible > acumExplosivo){
		console.log("B- El tipo de inflamable con más cantidad de unidades en total es combustible con : " + acumCombustible);
	}
	else {
		console.log("B- El tipo de inflamable con más cantidad de unidades en total es el explosivo con : " + acumExplosivo);
	}

	console.log("C- La cantidad de IAC con precios menos a 200 es de: " + contIacBarato);

	console.log("D- El tipo más caro es: " + tipoMax + " de marca " + marcaMax + " con un precio de $" + precioMax);
} // Jorge García Div B, DNI: 95873374
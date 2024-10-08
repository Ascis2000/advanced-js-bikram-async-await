//DESARROLLA AQUI TUS SOLUCIONES
/*
Ejercicio 1.- Declara una función getRandomPokemon que retorne 
un pokemon aleatorio.
*/
async function getRandomPokemon(){

    const numRandom = Math.floor(Math.random() * 20) + 1;

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numRandom}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
getRandomPokemon().then((data) => {
    console.log("Ejercicio 1");
    console.log(data);
    console.log("****************");
});


/*
Ejercicio 2.- Declara una funcion getImageAndName que retorne el 
nombre y la URL de la imagen de un pokemon => (return {img, name})
*/
async function getImageAndName(pokemon){
    console.log("Llamada a getImageAndName con pokemon:", pokemon);
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (!response.ok) {
            throw new Error(`
                Error: ${response.status}, 
                Url: https://pokeapi.co/api/v2/pokemon/${pokemon}, 
                Pokemon: ${pokemon}
                `);
        }
        let data = await response.json();
        let name = data.name;
        let img = data.sprites.front_default;
        return {name, img}
    } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
        return { name: 'Nombre desconocido', img: 'imagen no encontrada' }; // Manejo básico del error
    }
}
getImageAndName('bulbasaur').then((data) => {
    console.log("Ejercicio 2");
    console.log(data.name + " " + data.img);
    console.log("****************");
});


/*
Ejercicio 3.- Declara una funcion printImageAndName que retorne 
el string necesario para pintar la imagen y el nombre del pokemon 
en el DOM de la siguiente forma:
<section>
    <img src="url de imagen" alt="nombre del pokemon">
    <h1>Nombre del pokemon</h1>
</section>
*/
async function printImageAndName(pokemon){
    console.log("Llamada a printImageAndName con pokemon:" + pokemon);
    try{
        let data = await getImageAndName(pokemon);
        let name = data.name;
        let img = data.img;

        let html = `
            <section>
                <img src="${img}" alt="${name}">
                <h1>${name}</h1>
            </section>
        `;
        return html;

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        return { name: 'Nombre desconocido', img: 'imagen no encontrada' };
    }
}
printImageAndName('charizard').then(cadenaHTML => {
    console.log("Ejercicio 3");
    // añadimos el reasultado al DOM
    const container = document.getElementById('ejercicio_3');
    container.innerHTML = cadenaHTML;
    console.log("****************");
});


/*
Ejercicio 4.- Declara una función getRandomDogImage que retorne la url de la 
imagen de un perro aleatorio
*/
async function getRandomDogImage(){
    try {
        let response = await fetch(`https://dog.ceo/api/breeds/image/random`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        let data = await response.json();
        let urlImagen = data.message;

        return urlImagen;

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
getRandomDogImage().then(imgDog => {
    console.log("Ejercicio 4");
    console.log(imgDog)
    console.log("****************");
});


/*
Ejercicio 5.- Declara una función getRandomPokemonImage que retorne 
la url de la imagen de un pokemon aleatorio.
*/
async function getRandomPokemonImage(){
    try {
        let data = await getRandomPokemon();
        let img = data.sprites.front_default;

        return img;
        
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
getRandomPokemonImage().then(imgPokemon => {
    console.log("Ejercicio 5");
    console.log(imgPokemon);
    console.log("****************");
});


/*
Ejercicio 6.- Declara una función printPugVsPikachu que pinte la batalla 
entre "Pug" y "Pikachu" (no se testea)
*/
async function getPugImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breed/pug/images/random');
        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error('Error al obtener la imagen del pug:', error);
        return 'devolver_una_imagen_pug_por_defecto.jpg';
    }
}

async function getPikachuImage() {
    try {
        const data = await getImageAndName('pikachu');
        return data.img;
    } catch (error) {
        console.error('Error al obtener la imagen de Pikachu:', error);
        return 'devolver_una_imagen_pikachu_por_defecto.jpg';
    }
}

async function printPugVsPikachu() {
    const pugImg = await getPugImage();
    const pikachuImg = await getPikachuImage();

    const batallaHTML = `
        <section class="batalla">
            <h2>Pug Vs Pikachu</h2>
            <div class="battle-flex">
                <div class="personaje">
                    <h3>Pug</h3>
                    <img src="${pugImg}" alt="Pug">
                </div>
                <div class="vs">
                    <h3>VS</h3>
                </div>
                <div class="personaje">
                    <h3>Pikachu</h3>
                    <img src="${pikachuImg}" alt="Pikachu">
                </div>
            </div>
        </section>
    `;
    return batallaHTML;
}
// llamada a la batalla
printPugVsPikachu().then(cadena => {
    console.log("Ejercicio 6");
    const container = document.getElementById('ejercicio_6');
    container.innerHTML = cadena;
    console.log("****************");
});

/*
Ejercicio 7.- Declara una función getRandomCharacter que retorne un personaje aleatorio.
*/
async function getRandomCharacter(){

    const numRandom = Math.floor(Math.random() * 826) + 1;

    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/${numRandom}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
getRandomCharacter().then((data) => {
    console.log("Ejercicio 7");
    console.log(data.name);
    console.log("****************");
});

/*
Ejercicio 8.- Declara una función getRandomCharacterInfo que retorne de 
un personaje su imagen, nombre, episodios en los que aparece y el nombre 
del primer episodio en el que aparece + fecha de estreno, tendrás que hacer 
otro fetch para llegar a los ultimos datos. 
Formato de retorno => (return {img, name, episodes, firstEpisode, dateEpisode})
*/
async function getRandomCharacterInfo(){

    const numRandom = Math.floor(Math.random() * 826) + 1;

    try {
        let response = await fetch(`https://rickandmortyapi.com/api/character/${numRandom}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        let data = await response.json();
        let primerEpisodio = data.episode[0];
        
        let responseEpisodio_1 = await fetch(primerEpisodio);
        if (!responseEpisodio_1.ok) {
            throw new Error(`Error: ${responseEpisodio_1.status}`);
        }
        let dataEpisodio1 = await responseEpisodio_1.json();

        let img = data.image; // cadena
        let name = data.name; // cadena
        let episodes = data.episode; // array
        let firstEpisode = dataEpisodio1.name;
        let dateEpisode = dataEpisodio1.air_date;

        return {img, name, episodes, firstEpisode, dateEpisode}
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}
getRandomCharacterInfo().then((data) => {
    console.log("Ejercicio 8");
    console.log(`
        Imagen: ${data.img}
        Nombre: ${data.name}
        Episodio: ${data.episodes.join(" y ")}
        Primer Episodio: ${data.firstEpisode} 
        Fecha de Emisión: ${data.dateEpisode}
    `);
    console.log("****************");
});



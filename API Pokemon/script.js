// link API : https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector(".container");
const baseImage =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 500; i++) {
  const pokeBall = document.createElement("div");
  pokeBall.classList.add("pokemon");

  const imgPokemon = document.createElement("img");
  imgPokemon.src = `${baseImage}${i}.png`;

  const labelPokemon = document.createElement("span");
  labelPokemon.innerText = `#${i}`;

  container.appendChild(pokeBall);
  pokeBall.appendChild(imgPokemon);
  pokeBall.appendChild(labelPokemon);
}

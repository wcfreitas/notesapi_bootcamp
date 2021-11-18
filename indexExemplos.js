let mensagem = "Minha primeira aplicação Node.js";
let dia = 10;
console.log("hoje é dia: ",dia);
dia = 11;
console.log(mensagem);
console.log("Hoje é dia: " + dia);

console.log("__________________")

if(dia == 10){
    console.log("Hoje é a primeira aula de Node.js");
} else{
    console.log("Já não é a primeira aula de Node.js");
}

console.log("__________________")

let carros = [];

let carro = {
    modelo: "Fusca",
    ano: 1979,
    cor: "Azul",
};

carros.push(carro);
// console.log(carros);

carros[0].cor = "Vermelho";
// console.log(carro);

let opala = {
    nome: "Opala",
    ano: 1984,
    modelo: 1985,
    cor: "preto",
}


carros.push(opala);
// console.log(carros);

carros[0] = opala;
carros[1] = carro;

// console.log(carros);

for (const carro of carros){
console.log(carro);
}
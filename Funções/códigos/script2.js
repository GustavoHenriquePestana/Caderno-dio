function calculaidade(anos){
    return `Daqui a ${anos} anos, ${this.nome} tera ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}

const pessoa2 ={
    nome:"Carla",
    idade: 25
}

const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "Pug",

};

console.log(calculaidade.apply(pessoa1, [4]));

/*function recebeNumeros(n1, n2){
    let n1 = Number(prompt("insira o primeiro valor:"));
    let n2 = Number(prompt("insira o segundo valor:"));
    let resultado;

    if (n1 > n2){
        alert(`os dois números são iguais e sua soma é ${resultado}`)
        recebeNumeros();
    }else{
        resultado = n1 + n2;
        if(resultado >= 10 || resultado <= 20){
            alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${resultado}`)
        }
    }
}
*/
function recebeNumeros(num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = ciraSegundaFrase(num1, num2);
    return `${primeiraFrase}  ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';
    if(num1 === num2) {
        saoIguais = 'sáo';
    }

    return `Os números ${num1} e ${num2} ${saoIguais}`
};

function ciraSegundaFrase(num1, num2){
    const coma = num1 + num2;
    
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior'

    }
    if (compara20){
        resultado20 = 'maior'

    }

    return `Sua soma é ${soma}, que é ${resultado10} e {resultado20} que 20`
}

console.log(recebeNumeros(20, 20));
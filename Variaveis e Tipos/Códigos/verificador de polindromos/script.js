//solução 1
function verififcaPalindromo(string){
    if (!string) return;

    return string.split("").reverse().join("") === string;
}

// solução 2

function verififcaPalindromo2(string){
    for(let i = 0; i <string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verififcaPalindromo2("gato"));
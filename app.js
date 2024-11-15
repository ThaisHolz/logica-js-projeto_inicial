alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = 21;
console.log(`É o número ${numeroSecreto}`);
let chute;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 30:');
    if (numeroSecreto == chute){
        break;
    }
    else{
        if(numeroSecreto > chute){
            alert('O número é maior que ' + chute); //O + substitui o ${}
        }
        else{
            alert('O número é menor que ' + chute);
        }
        tentativas ++; //++ é igual +1
    }
}

//Substituição do if e else
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Você acertou! É o número ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);



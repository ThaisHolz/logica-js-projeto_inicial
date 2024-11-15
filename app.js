alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = 21;
console.log(`É o número ${numeroSecreto}`);
let chute = prompt('Escolha um número entre 1 e 30:');

if (numeroSecreto == chute){
    alert(`Você acertou! É o número ${numeroSecreto}`);
}
else{
    alert('Tente novamente.');
}
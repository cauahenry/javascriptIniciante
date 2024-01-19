let nomeDoUsuario = prompt("Digite seu nome");
if (!isNaN(nomeDoUsuario)) {
  alert("Digite um nome válido!");
} else {
  alert(`Bem vindo ${nomeDoUsuario}!`);
}

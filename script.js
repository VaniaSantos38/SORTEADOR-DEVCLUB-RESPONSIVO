function generateNumber(){ //essa função é chamada no onclick do botão,depois é só criar a função no java script//
    const min =Math.ceil (document.querySelector('.input-min').value) //definindo a variável min, usando o document.querySelector para selecionar o elemento com a classe .input-min e pegando o valor digitado pelo usuário//
    const max = Math.floor(document.querySelector('.input-max').value) //definindo a variável max, usando o document.querySelector para selecionar o elemento com a classe .input-max e pegando o valor digitado pelo usuário//
  const result = Math.floor(Math.random() * (max - min + 1)) + min;//5 gerando um número aleatório usando Math.random(), multiplicando pelo intervalo (max - min + 1) para garantir que o número gerado esteja dentro do intervalo definido pelo usuário, e adicionando min para ajustar o resultado para o intervalo correto//
  
  document.getElementById('resultado').innerText = result;//6 exibindo o resultado no elemento com o id "resultado"
  alert(result) //7 exibindo o resultado em um alerta para o usuário//
} 
//1 onclick,2 função,3 const min e max,4 Math.ceil que o teto e Math.floor que o chão,5 alert(result) //


// Função para verificar as respostas
function verificarRespostas() {
  var respostasCorretas = ["B) Corais formando recifes."];
  var acertos = 0;
  var erros = 0;

  // Desabilita os botões de opção após o envio
  var radioButtons = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].disabled = true;
  }

  // Verifica qual resposta foi selecionada
  var respostaSelecionada = document.querySelector('input[name="resposta"]:checked');

  // Se uma resposta foi selecionada
  if (respostaSelecionada) {
      var resposta = respostaSelecionada.value;

      // Verifica se a resposta está correta
      if (respostasCorretas.includes(resposta)) {
          acertos++;
          respostaSelecionada.parentElement.classList.add('correct'); // Adiciona a classe "correct" à resposta correta (letra B)
          document.querySelector('.img').style.display = 'block'; // Exibe a imagem de acerto
      } else {
          erros++;
          respostaSelecionada.parentElement.classList.add('incorrect'); // Adiciona a classe "incorrect" à resposta errada
          // Encontra e estiliza a resposta correta (letra B)
          var respostaCorretaElement = document.querySelector('input[value="B) Corais formando recifes."]').parentElement;
          respostaCorretaElement.classList.add('correct');
          document.querySelector('.img2').style.display = 'block'; // Exibe a imagem de erro
      }
  }

  // Atualiza o contador de acertos e erros
  document.getElementById('contadorAcertos').innerText = acertos;
  document.getElementById('contadorErros').innerText = erros;

  // Aplica a classe botao-desabilitado ao botão ENVIAR
  document.getElementById('enviarButton').classList.add('botao-desabilitado');
}

var radioButtons = document.querySelectorAll('input[type="radio"]');
var enviarButton = document.getElementById('enviarButton');

for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('change', function () {
    enviarButton.disabled = false;
    enviarButton.classList.remove('botao-desabilitado');
    enviarButton.classList.add('botao-habilitado');
  })

}
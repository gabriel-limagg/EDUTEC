function verificarRespostas() {
  var respostasCorretas = ["E) Colmeia de abelhas."];
  var acertos = 0;
  var erros = 0;


  var radioButtons = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].disabled = true;
  }

 
  var respostaSelecionada = document.querySelector('input[name="resposta"]:checked');


  if (respostaSelecionada) {
      var resposta = respostaSelecionada.value;


      if (respostasCorretas.includes(resposta)) {
          acertos++;
          respostaSelecionada.parentElement.classList.add('correct'); 
          document.querySelector('.img').style.display = 'block'; 
      } else {
          erros++;
          respostaSelecionada.parentElement.classList.add('incorrect'); 

          var respostaCorretaElement = document.querySelector('input[value="E) Colmeia de abelhas."]').parentElement;
          respostaCorretaElement.classList.add('correct');
          document.querySelector('.img2').style.display = 'block'; 
      }
  }


  document.getElementById('contadorAcertos').innerText = acertos;
  document.getElementById('contadorErros').innerText = erros;


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

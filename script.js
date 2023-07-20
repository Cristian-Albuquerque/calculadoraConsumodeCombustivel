
  const bot=document.getElementById("botao")

  function calc(){
    var litros=parseFloat(document.getElementById('litros').value);
    var dist=parseFloat(document.getElementById('dist').value);
    const consumo=dist/litros;
    const resultadoDiv=document.getElementById('resultado');
    resultadoDiv.innerText = `Consumo médio: ${consumo.toFixed(2)} km/l`
  }
  
  bot.addEventListener("click", calc)
  

  
var adicionar = document.querySelector("#adicionar");

adicionar.addEventListener("click", function (e) {
    e.preventDefault();

    var nome = document.querySelector("#nome");
    var peso = document.querySelector("#peso");
    var altura = document.querySelector("#altura");

    var novo = "<tr>" +
							"<td class='nome'>" + nome.value + "</td>" +
							"<td class='peso'>" + peso.value + "</td>" +
							"<td class='altura'>" + altura.value + "</td>" +
							"<td class='imc'></td>" +
							"<td class='resultado'></td>" +
					  "</tr>";

    var cliente = document.querySelector("table");
    cliente.innerHTML += novo;

    nome.value = "";
    peso.value = "";
    altura.value = "";

});

function calcular() {

    peso = document.getElementsByClassName('peso');
    altura = document.getElementsByClassName('altura');
    imc = document.getElementsByClassName('imc');
    resultado = document.getElementsByClassName('resultado');

    vetor = peso.length;

    for (var i = 0; i < vetor; i++) {

        var imcCalculo = peso[i].textContent / (altura[i].textContent * altura[i].textContent);

        imcCalculo = imcCalculo.toFixed(2);

        imc[i].textContent = imcCalculo;

        console.log(peso[i]);
        console.log(imc[i]);

        if (imc[i].textContent < 18.5) {
            resultado[i].textContent = "Abaixo do peso";
        } else {
            if (imc[i].textContent < 25) {
                resultado[i].textContent = "Peso Normal";
            } else {
                if (imc[i].textContent < 30) {
                    resultado[i].textContent = "Acima do peso";
                } else {
                    resultado[i].textContent = "Sobrepeso";
                }
            }
        }
    }
}

var calculo = document.getElementById("calcular");
calculo.addEventListener("click", calcular);
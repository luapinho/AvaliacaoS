function calcular() {

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altu").value);

    if (peso <= 0 || isNaN(peso)){
        alert("Peso inválido, peso está vazio ou não é númerico.");
        return;
    }
    if (altura <= 0 || isNaN(altura)){
        alert("Digite um ALTURA válido.");
        return;
    }
    
    let sexo;

    if (document.getElementById("sexo").checked) {
        sexo = "F";
    } else {
        sexo = "M";
    }

   
    let imc = peso / (Math.pow(altura, 2));

    var pesoIdeal;
    if(sexo === "M"){
        pesoIdeal = (72.7 * altura) - 58;
    }
    else{
        pesoIdeal = (62.1 * altura) - 44.7;
    }
    document.getElementById("peso-ideal").value = pesoIdeal.toFixed(2) + "kg";

    let classificacao;

    if (sexo === "M") {

        if (imc >= 40)
        {
            classificacao = "Obesidade mórbida";
        } 
        else if (imc >= 30) 
        {
            classificacao = "Obesidade moderada";
        } 
        else if (imc >= 25) 
        {
            classificacao = "Obesidade leve";
        } 
        else if (imc >= 20) 
        {
            classificacao = "Peso normal";
        } 
        else 
        {
            classificacao = "Abaixo do peso";
        }

    } else {

        if (imc >= 39) 
        {
            classificacao = "Obesidade mórbida";
        } 
        else if (imc >= 29) 
        {
            classificacao = "Obesidade moderada";
        } 
        else if (imc >= 24) 
        {
            classificacao = "Obesidade leve";
        } 
        else if (imc >= 19) 
        {
            classificacao = "Peso normal";
        } 
        else 
        {
            classificacao = "Abaixo do peso";
        }
    }

    document.getElementById("resu").value =
        imc.toFixed(2) + " - " + classificacao;
}

function limpar() {
    document.getElementById("resu").value = "";
    document.getElementById("peso").focus();
}
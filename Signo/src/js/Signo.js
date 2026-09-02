function Calcular() {

    var d_ani = document.getElementById("dia").value;
    var m_ani = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    if (d_ani <= 0 || isNaN(d_ani) || d_ani > 31){
        alert("Dia inválido, dia está vazio ou não é númerico ou o dia está ultrapassando o 31.");
        return;
    }
    if (m_ani < 1 || isNaN(m_ani) || m_ani > 12){
        alert("Mês inválido, mês está vazio ou não é númerico ou o mes passou de 12.");
        return;
    }

    if (ano <= 0 || isNaN(ano) || ano.length != 4){
        alert("Ano inválido, ano está vazio ou não é númerico ou não pode maior que 4 dígitos.");
        return;
    }

    if (((d_ani >= 20) && (m_ani == 1)) || ((d_ani <= 18) && (m_ani == 2)))
        document.images["signo"].src = "src/assets/images/aquario.png"

    else if (((d_ani >= 19) && (m_ani == 2)) || ((d_ani <= 20) && (m_ani == 3)))
       document.images["signo"].src = "src/assets/images/peixes.png"
    else if (((d_ani >= 21) && (m_ani == 3)) || ((d_ani <= 19) && (m_ani == 4)))
        document.images["signo"].src = "src/assets/images/aries.png"

    else if (((d_ani >= 20) && (m_ani == 4)) || ((d_ani <= 20) && (m_ani == 5)))
       document.images["signo"].src = "src/assets/images/touro.png"

    else if (((d_ani >= 21) && (m_ani == 5)) || ((d_ani <= 20) && (m_ani == 6)))
        document.images["signo"].src = "src/assets/images/gemos.png"

    else if (((d_ani >= 21) && (m_ani == 6)) || ((d_ani <= 22) && (m_ani == 7)))
        document.images["signo"].src = "src/assets/images/cancer.png"

    else if (((d_ani >= 23) && (m_ani == 7)) || ((d_ani <= 22) && (m_ani == 8)))
        document.images["signo"].src = "src/assets/images/leao.png"

    else if (((d_ani >= 23) && (m_ani == 8)) || ((d_ani <= 22) && (m_ani == 9)))
        document.images["signo"].src = "src/assets/images/virgem.png"

    else if (((d_ani >= 23) && (m_ani == 9)) || ((d_ani <= 22) && (m_ani == 10)))
        document.images["signo"].src = "src/assets/images/libra.png"

    else if (((d_ani >= 23) && (m_ani == 10)) || ((d_ani <= 21) && (m_ani == 11)))
        document.images["signo"].src = "src/assets/images/escorpiao.png"

    else if (((d_ani >= 22) && (m_ani == 11)) || ((d_ani <= 21) && (m_ani == 12)))
        document.images["signo"].src = "src/assets/images/sagitario.png"
    
    else
        document.images["signo"].src = "src/assets/images/capricornio.png"
} 
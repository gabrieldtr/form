function pegarDados(){
    document.querySelector(".esconder").style.display = "block";

    let camText = document.getElementById("texto").value;
    document.getElementById("camponame").innerHTML = ("Nome: " +camText);
    let camTel = document.getElementById("fone").value;
    document.getElementById("campotel").innerHTML = ("Telefone: " + camTel);
    let camEmail = document.getElementById("mail").value;
    document.getElementById("campomail").innerHTML = ("Email: " + camEmail);
    let camSenha = document.getElementById("senha").value;
    document.getElementById("camposenha").innerHTML = ("Senha: " + camSenha);


    let checkbox_info = document.getElementById("info");
    let checkbox_adm = document.getElementById("adm");
    let checkbox_enf = document.getElementById("enf");

    if(checkbox_info.checked){
        document.getElementById("campoinfo").innerHTML = ("Seu curso é: informática")
    }if(checkbox_adm.checked){
        document.getElementById("campoadm").innerHTML = ("Seu curso é: administração")
    }if(checkbox_enf.checked){
        document.getElementById("campoenf").innerHTML = ("Seu curso é: enfermagem")
    }


    if(document.getElementById("info2").checked){
        document.getElementById("camporadio").innerHTML = ("Seu curso é: informática")
    }else if(document.getElementById("adm2").checked){
        document.getElementById("camporadio").innerHTML = ("Seu curso é: administração")
    }else if(document.getElementById("enf2").checked){
        document.getElementById("camporadio").innerHTML = ("Seu curso é: enfermagem")
    }


    let ocult = document.getElementById("oculto").value;
    document.getElementById("campooculto").innerHTML = ("Valor oculto: " + ocult);


    let number = document.getElementById("num").value;
    document.getElementById("camponum").innerHTML = ("Número: " + number);


    let data = document.getElementById("data").value;
    document.getElementById("campodata").innerHTML = ("Data: " + data);    


    let hora = document.getElementById("hora").value;
    document.getElementById("campodaora").innerHTML = ("Hora: " + hora);    


    let range = document.getElementById("range").value;
    document.getElementById("camporange").innerHTML = ("Valor Range: " + range);    


    let faixa = document.getElementById("priFaixa").value;
    document.getElementById("campofaixa").innerHTML = ("Select: " + faixa);    
}
function troca(id){
    links = document.getElementsByClassName("header__nav-link");
    for(i = 0; i< links.length;i++){
        links[i].className = "header__nav-link";
    }
    document.getElementById(id).className = "header__nav-link header__nav-link--active";
}

function trocarCertificado(number) {
    img = document.getElementById("certificado");
    download_btn = document.getElementById("download_btn");
    if(number == 1){
        img.src = "./assets/certificados/Certificado_LigaJovem_1.jpg";
        download_btn.href = "./assets/certificados/Certificado_LigaJovem.pdf";
    } else if (number == 2){
        img.src = "./assets/certificados/Certificado-OracleNextEducation_1.jpg";
        download_btn.href = "./assets/certificados/Certificado-OracleNextEducation.pdf";
    } else if (number == 3){
        img.src = "./assets/certificados/Certificado_SpringBoot_1.jpg";
        download_btn.href = "./assets/certificados/Certificado_SpringBoot.pdf";
    } else if (number == 4){
        img.src = "./assets/certificados/Certificado_Java_OO_1.jpg";
        download_btn.href = "./assets/certificados/Certificado_Java_OO.pdf";
    } else if (number == 5){
        img.src = "./assets/certificados/Certificado_Git_Github.jpg";
        download_btn.href = "./assets/certificados/Certificado_Git_Github.pdf";
    } else if (number == 6){
        img.src = "./assets/certificados/Certificado_Logica_JavaScript_1.jpg";
        download_btn.href = "./assets/certificados/Certificado_Logica_JavaScript.pdf";
    } else if (number == 7){
        img.src = "./assets/certificados/Certificado_HTML_CSS_1.jpg";
        download_btn.href = "./assets/certificados/Certificado_HTML_CSS.pdf";
    }
    
}
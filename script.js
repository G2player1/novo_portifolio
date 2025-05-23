function troca(id){
    links = document.getElementsByClassName("header__nav-link");
    for(i = 0; i< links.length;i++){
        links[i].className = "header__nav-link";
    }
    document.getElementById(id).className = "header__nav-link header__nav-link--active";
}
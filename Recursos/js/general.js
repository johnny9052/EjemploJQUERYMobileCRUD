$(document).bind("mobileinit", function () {


});


function verificarSesion() {
    if (getCookie('username') === "") {
        abrirPagina('indexPage', 'flip');
    } else {
        return true;
    }
}


function abrirPagina(pagina, efecto) {       
    $.mobile.pageContainer.pagecontainer('change', '#' + pagina, {
        transition: efecto,
        changeHash: true, //Lo abre en el mismo index o abre una nueva URL
        reverse: false,
        allowSamePageTransition: true,
        showLoadMsg: true,
        reload: ((pagina === "indexPage") ? true : false)
    });
}


function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}


function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


function destroyCookie() {    
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
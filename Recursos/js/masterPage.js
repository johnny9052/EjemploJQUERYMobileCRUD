//PAGE EVENTS http://www.gajotres.net/document-onpageinit-vs-document-ready/

//Solo se ejecuta 1 ves, cuando se carga la pagina por primera ves en el navegador
$(document).on('pagebeforecreate', '#masterPage', function (e, data) {
    
    if (!verificarSesion()) {
        $(this).abort();
    } else {
        $("#msjBienvenida").text("Bienvenido " + getCookie('username'));
        $("#btnSalir").click(cerrarSesion);
    }

    function cerrarSesion() {
        destroyCookie();        
        $("#msjBienvenida").text("No identificado");
        abrirPagina('indexPage', 'flip');
    }
});




$(document).on('pagebeforecreate', '#indexPage', function () {

    $(document).ready(function () {
        $("#btnLogin").click(login);
        $("#msj").fadeOut("slow");
    });


    function login() {
        var usuario = $("#txtUsuario").val();
        var password = $("#txtPassword").val();

        $.mobile.loading('show', {theme: "b", text: "espere..", textonly: false, textVisible: true});

        $.ajax({
            type: 'post',
            url: "Controlador/gestionLoguin.php",
            data: {usu: usuario, pass: password},
            success: function (data) {
                //alert(data);
                var aux = JSON.parse(data);

                $.mobile.loading('hide');

                if (aux[0].res) {
                    setCookie('username', usuario);
                    abrirPagina('masterPage','flip');                   
                } else {
                    status = false;
                    $("#msj").text("El usuario no existe");
                    $("#msj").fadeIn("slow");
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $.mobile.loading('hide');
                alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            }
        });
    }
});
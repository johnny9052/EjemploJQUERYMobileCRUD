//Solo se ejecuta 1 ves, cuando se carga la pagina por primera ves en el navegador
$(document).on('pagebeforecreate', '#formuEstudiante', function (e, data) {
    
    if (!verificarSesion()) {
        $(this).abort();
    }


    $(document).ready(function () {
        $("#btnGuardarEstudiante").click(guardar);
        $("#btnBuscarEstudiante").click(buscar);
        $("#btnEditarEstudiante").click(editar);
        $("#btnEliminarEstudiante").click(eliminar);
        $("#btnLimpiarEstudiante").click(limpiar);
        $("#msj").fadeOut("slow");
        listar();
    });


    function guardar() {
        var codigo = $("#txtCodigo").val();
        var nombre = $("#txtNombre").val();
        var apellido = $("#txtApellido").val();
        var cedula = $("#txtCedula").val();
        var edad = $("#txtEdad").val();
        var semestre = $("#txtSemestre").val();

        $.mobile.loading('show', {theme: "b", text: "espere..", textonly: false, textVisible: true});

        $.ajax({
            type: 'post',
            url: "Controlador/gestionEstudiante.php",
            data: {codigo: codigo, nombre: nombre,
                apellido: apellido, cedula: cedula, edad: edad, semestre: semestre, type: 'save'},
            success: function (data) {

                $.mobile.loading('hide');

                var aux = JSON.parse(data);
                if (aux[0].res) {
                    $("#crudEstudiante").popup("close");
                    $("#InfoEstudiante").text("Operacion exitosa");
                    limpiar();
                    listar();
                    setTimeout(function () {
                        $("#popupEstudiante").popup("open");
                    }, 1000);
                } else {
                    $("#crudEstudiante").popup("close");
                    $("#InfoEstudiante").text("Error en la operacion");
                    limpiar();
                    setTimeout(function () {
                        $("#popupEstudiante").popup("open");
                    }, 1000);
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $.mobile.loading('hide');
                alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            }
        });
    }



    function buscar() {
        var codigo = $("#txtCodigo").val();

        $.mobile.loading('show', {theme: "b", text: "espere..", textonly: false, textVisible: true});

        $.ajax({
            type: 'post',
            url: "Controlador/gestionEstudiante.php",
            data: {codigo: codigo, type: 'search'},
            success: function (data) {
                $.mobile.loading('hide');
                var aux = JSON.parse(data);
                if (aux.length > 0) {
                    $("#txtId").val(aux[0].id);
                    $("#txtNombre").val(aux[0].nombre);
                    $("#txtApellido").val(aux[0].apellido);
                    $("#txtCedula").val(aux[0].cedula);
                    $("#txtEdad").val(aux[0].edad);
                    $("#txtSemestre").val(aux[0].semestre);
                } else {
                    alert("No se encuentra");
                    limpiar();
                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
                $.mobile.loading('hide');
                alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            }
        });
    }



    function editar() {
        var id = $("#txtId").val();
        var codigo = $("#txtCodigo").val();
        var nombre = $("#txtNombre").val();
        var apellido = $("#txtApellido").val();
        var cedula = $("#txtCedula").val();
        var edad = $("#txtEdad").val();
        var semestre = $("#txtSemestre").val();

        $.mobile.loading('show', {theme: "b", text: "espere..", textonly: false, textVisible: true});

        $.ajax({
            type: 'post',
            url: "Controlador/gestionEstudiante.php",
            data: {id: id, codigo: codigo, nombre: nombre,
                apellido: apellido, cedula: cedula, edad: edad, semestre: semestre, type: 'update'},
            success: function (data) {
                $.mobile.loading('hide');
                var aux = JSON.parse(data);
                if (aux[0].res) {
                    $("#crudEstudiante").popup("close");
                    $("#InfoEstudiante").text("Operacion exitosa");
                    limpiar();
                    listar();
                    setTimeout(function () {
                        $("#popupEstudiante").popup("open");
                    }, 1000);
                } else {
                    $("#crudEstudiante").popup("close");
                    $("#InfoEstudiante").text("Error en la operacion");
                    limpiar();
                    setTimeout(function () {
                        $("#popupEstudiante").popup("open");
                    }, 1000);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $.mobile.loading('hide');
                alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            }
        });
    }




    function eliminar() {

        var id = $("#txtId").val();


        $.mobile.loading('show', {theme: "b", text: "espere..", textonly: false, textVisible: true});

        $.ajax({
            type: 'post',
            url: "Controlador/gestionEstudiante.php",
            data: {id: id, type: 'delete'},
            success: function (data) {
                $.mobile.loading('hide');
                var aux = JSON.parse(data);
                if (aux[0].res) {
                    $("#crudEstudiante").popup("close");
                    $("#InfoEstudiante").text("Operacion exitosa");
                    limpiar();
                    listar();
                    setTimeout(function () {
                        $("#popupEstudiante").popup("open");
                    }, 1000);
                } else {
                    $("#crudEstudiante").popup("close");
                    $("#InfoEstudiante").text("Error en la operacion");
                    limpiar();
                    setTimeout(function () {
                        $("#popupEstudiante").popup("open");
                    }, 1000);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $.mobile.loading('hide');
                alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            }
        });
    }





    function listar() {

        $.mobile.loading('show', {theme: "b", text: "espere..", textonly: false, textVisible: true});

        $.ajax({
            type: 'post',
            url: "Controlador/gestionEstudiante.php",
            data: {type: 'list'},
            success: function (data) {
                var aux = JSON.parse(data);
                var lista = "";

                if (aux.length > 0) {
                    for (f = 0; f < aux.length; f++) {
                        lista = lista + "<li><a href='#'>";
                        lista = lista + aux[f].nombre + " " + aux[f].apellido + " - " + aux[f].codigo;
                        lista = lista + "</a></li>";
                    }
                }

                document.getElementById("listadoEstudiantes").innerHTML = lista;
                $("#listadoEstudiantes").listview("refresh");

                $.mobile.loading('hide');
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $.mobile.loading('hide');
                alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            }
        });
    }





    function limpiar() {
        $("#txtId").val("");
        $("#txtCodigo").val("");
        $("#txtNombre").val("");
        $("#txtApellido").val("");
        $("#txtCedula").val("");
        $("#txtEdad").val("");
        $("#txtSemestre").val("");
    }

});



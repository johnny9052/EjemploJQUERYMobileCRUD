<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>

        <link rel="stylesheet" href="Recursos/jquerymobile/jquery.mobile-1.4.5.min.css" />        
        <script src="Recursos/jquerymobile/jquery-1.11.3.min.js"></script>
        <script src="Recursos/jquerymobile/jquery.mobile-1.4.5.min.js"></script>

        <!-- CARGAR ARCHIVOS ONLINE -->
        <!--                <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css" />
                        <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
                        <script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>-->

        <link rel="stylesheet" href="Recursos/css/estilos.css" /> 

        <script src="Recursos/js/general.js"></script>
        <script src="Recursos/js/gestionLogin.js"></script>
        <script src="Recursos/js/masterPage.js"></script>
        <script src="Recursos/js/estudiante.js"></script>

    </head>
    <body>


        <!--************************************************************** -->
        <!--**********************LOGIN - LOGIN - LOGIN******************* -->
        <!--************************************************************** -->
        <div data-role="page"  id="indexPage">
            <div data-role="header" data-theme="b" data-position="fixed">
                <h1>Gestion estudiantes</h1>
            </div>

            <div data-role="main" class="ui-content">  

                <div class="ui-grid-b ui-responsive">
                    <div class="ui-block-a"></div>
                    <div class="ui-block-b">

                        <h3>Login</h3>

                        <label for="usrnm" class="ui-hidden-accessible">Nombre usuario:</label>
                        <input type="text" name="user" id="txtUsuario" placeholder="Username">

                        <label for="pswd" class="ui-hidden-accessible">Password:</label>
                        <input type="password" name="passw" id="txtPassword" placeholder="Password">                           

                        <input type="button" id="btnLogin" data-inline="true" value="Ingresar">                        

                        <label id="msj" class="mensaje"></label> 
                    </div>
                    <div class="ui-block-c"></div>
                </div>
            </div>
            <div data-role="footer" data-theme="b" data-position="fixed">
                <h1>Johnny Alexander Salazar Cardona</h1>
            </div>
        </div>

        <!--************************************************************** -->
        <!--**********************MASTER - MASTER - MASTER******************* -->
        <!--************************************************************** -->

        <div data-role="page"  id="masterPage">

            <!-- ******************************MENU******************************** -->

            <!--PANEL #1 data-display= efecto   data-dismissible= solo cerrar deslizando data-position= ubicacion -->
            <div data-role="panel" id="menu" data-display="overlay" data-dismissible="false" data-position="left"> 
                <h2>Menu</h2>
                <a onclick="abrirPagina('formuEstudiante', 'flip')" href="#" data-transition="flow" class="ui-btn ui-corner-all ui-shadow ui-icon-carat-r ui-btn-icon-left">Estudiantes</a>
                <a href="#" class="ui-btn ui-corner-all ui-shadow ui-icon-carat-r ui-btn-icon-left">Opcion #1</a>
                <a href="#" class="ui-btn ui-corner-all ui-shadow ui-icon-carat-r ui-btn-icon-left">Opcion #2</a>

            </div> 


            <!-- ***************** ESTRUCTURA PAGINA ********************* -->

            <div data-role="header" data-theme="b" data-position="fixed">
                <a href="#menu" class="ui-btn ui-corner-all ui-shadow ui-icon-bars ui-btn-icon-left">Menu</a>
                <h1 id="msjBienvenida">Bienvenido</h1>
                <a href="#indexPage" data-direction="reverse" class="ui-btn ui-corner-all ui-shadow ui-icon-action ui-btn-icon-left " id="btnSalir">Salir</a>
            </div>

            <div data-role="main" class="ui-content">                  

            </div>

            <div data-role="footer" data-theme="b" data-position="fixed">
                <h1>Johnny Alexander Salazar Cardona</h1>
            </div>
        </div>


        <!--************************************************************** -->
        <!--**********************ESTUDIANTES - ESTUDIANTES*************** -->
        <!--************************************************************** -->

        <div data-role="page"  id="formuEstudiante">

            <!-- ******************************CRUD******************************** -->

            <div data-role="popup" id="crudEstudiante" class="ui-content" data-theme="a">
                <div>
                    <input type="hidden" name="id" id="txtId">

                    <input type="number" name="codigo" id="txtCodigo" placeholder="Ingrese codigo" data-inline="true">                    
                    <input type="text" name="nombre" id="txtNombre" placeholder="Ingrese nombre">
                    <input type="text" name="apellido" id="txtApellido" placeholder="Ingrese apellido">
                    <input type="number" name="cedula" id="txtCedula" placeholder="Ingrese cedula">
                    <input type="number" name="edad" id="txtEdad" placeholder="Ingrese edad">
                    <input type="number" name="semestre" id="txtSemestre" placeholder="Ingrese semestre">

                    <div data-role="controlgroup" data-type="horizontal">
                        <a href="#" id="btnGuardarEstudiante" class="ui-btn ui-btn-b ui-icon-plus ui-btn-icon-notext ui-nodisc-icon"></a>
                        <a href="#" id="btnBuscarEstudiante" class="ui-btn ui-btn-b ui-icon-search ui-btn-icon-notext ui-nodisc-icon"></a>
                        <a href="#" id="btnEditarEstudiante" class="ui-btn ui-btn-b ui-icon-edit ui-btn-icon-notext ui-nodisc-icon"></a>
                        <a href="#" id="btnEliminarEstudiante" class="ui-btn ui-btn-b ui-icon-delete ui-btn-icon-notext ui-nodisc-icon"></a>                                                
                        <a href="#" id="btnLimpiarEstudiante" class="ui-btn ui-btn-b ui-icon-refresh ui-btn-icon-notext ui-nodisc-icon"></a>                                                
                    </div>
                </div>
            </div>

            <!-- MENSAJES -->
            <div data-role="popup" id="popupEstudiante" class="ui-content">
                <p id="InfoEstudiante"></p>
            </div>

            <!-- ***************** ESTRUCTURA PAGINA ********************* -->

            <div data-role="header" data-theme="b" data-position="fixed">                
                <a href="#"  onclick="abrirPagina('masterPage', 'flow')" class="ui-btn ui-corner-all ui-shadow ui-icon-back ui-btn-icon-left " id="btnRegresar">Regresar</a>
                <h1 id="msjBienvenida">ESTUDIANTES</h1>

            </div>

            <div data-role="main" class="ui-content">                  
                <a href="#crudEstudiante" data-rel="popup" data-transition="pop" 
                   class="ui-btn ui-icon-gear ui-btn-icon-right">Gestionar</a>

                <form class="ui-filterable">
                    <input id="filtroEstudiantes" data-type="search" placeholder="Buscar..">
                </form>
                <ul id="listadoEstudiantes" data-role="listview" data-filter="true" data-input="#filtroEstudiantes" 
                    data-autodividers="true" data-inset="true">

                </ul>
            </div>

            <div data-role="footer" data-theme="b" data-position="fixed">
                <h1>Johnny Alexander Salazar Cardona</h1>
            </div>
        </div>




    </body>
</html>

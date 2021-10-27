
$(document).ready(function () {
    
    
    var theme = 'darkblue';

    $("#jqxRibbonMenu").jqxRibbon(
        {
            width: 1300,
            height: 170,
            mode: 'default',
            position: 'top',
            selectionMode: 'click',
            animationType: 'fade',
            theme: theme
        });

    $("#jqxbuttonCrear").jqxButton(
        {
            width: '200',
            height: '100',
            imgSrc: '../sismantenimiento-frontend/assets/icons/crear.png',
            imgWidth: 70,
            imgHeight: 70,
            imgPosition: 'center',
            textPosition: 'center',
            textImageRelation: 'imageBeforeText',
            theme: theme
        });

    $("#jqxbuttonCrear").click(
        function () {
            $("#jqxwindowCrear").jqxWindow('open');
        });

    $("#jqxwindowCrear").jqxWindow(
        {
            height: 300,
            width: 600,
            theme: theme,
            isModal: true,
            autoOpen: false,
            title: 'Crear nuevo registro de personal',
            resizable: false
        });

    var templateCrear = [
        {
            bind: 'dniTrabajador',
            type: 'text',
            label: 'DNI del trabajador',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true
        },
        {
            bind: 'apellidosTrabajador',
            type: 'text',
            label: 'Apellidos del trabajador',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true
        },
        {
            bind: 'nombresTrabajador',
            type: 'text',
            label: 'Nombres del trabajador',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true
        },
        {
            bind: 'sueldoTrabajador',
            type: 'number',
            label: 'Sueldo del trabajador',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true
        },
        {
            bind: 'estadoTrabajador',
            type: 'option',
            label: 'Estado del trabajador',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true,
            component: 'jqxDropDownList',
            options: [
                { label: 'Activo', value: '1' },
                { label: 'Inactivo', value: '0' },
            ]
        }
    ];

    var jqxformCrear = $('#jqxformCrear');

    jqxformCrear.jqxForm({
        template: templateCrear,
        theme: theme,
        padding: { left: 20, top: 10, right: 20, bottom: 10 }
    });

    $("#crearBtn").jqxButton(
        {
            width: '100',
            height: '25',
            value: 'Crear',
            theme: theme
        });

    $("#jqxwindowCrear").on('click', '#crearBtn', function () {

        var inputData = $('#jqxformCrear').jqxForm().val();
        var data = $.param(inputData);
        petHttp("POST",urlCrear,inputData);
    });

    $("#cancelarCrearBtn").jqxButton(
        {
            width: '100',
            height: '25',
            value: 'Cancelar',
            theme: theme
        });

    $("#jqxwindowCrear").on('click', '#cancelaCrearBtn', function () {
        $('#jqxwindowCrear').jqxWindow('close');
    });

    $("#jqxNotificacionExitoCrear").jqxNotification({
        width: 'auto', position: 'top-right',
        opacity: 0.9, autoOpen: false, autoClose: false, template: 'success'
    });

    $("#jqxNotificacionErrorCrear").jqxNotification({
        width: "auto", position: "top-right",
        opacity: 0.9, autoOpen: false, autoClose: false, template: "error"
    });

    $("#jqxbuttonEditar").jqxButton(
        {
            width: '200',
            height: '100',
            imgSrc: '../sismantenimiento-frontend/assets/icons/editar.png',
            imgWidth: 70,
            imgHeight: 70,
            imgPosition: 'center',
            textPosition: 'center',
            textImageRelation: 'imageBeforeText',
            theme: theme
        });

    $("#jqxbuttonEditar").bind('click', function () {
        var selectedrowindex = $("#jqxgridPersonal").jqxGrid('getselectedrowindex');
        var rowscount = $("#jqxgridPersonal").jqxGrid('getdatainformation').rowscount;
        if (selectedrowindex >= 0) {
            var data = $('#jqxgridPersonal').jqxGrid('getrowdata', selectedrowindex);
            $("#jqxwindowEditar").jqxWindow('open');
            $('#jqxformEditar').jqxForm().val(data);
        }

    });

    $("#jqxwindowEditar").jqxWindow(
        {
            height: 350,
            width: 600,
            theme: theme,
            isModal: true,
            autoOpen: false,
            title: 'Editar registro de personal',
            resizable: false
        });

    var templateEditar = [
        {
            bind: 'codigoTrabajador',
            type: 'text',
            label: 'Codigo del trabajador',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',

        },
        {
            bind: 'dniTrabajador',
            type: 'text',
            label: 'DNI del trabajador',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true
        },
        {
            bind: 'apellidosTrabajador',
            type: 'text',
            label: 'Apellidos del trabajador',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true
        },
        {
            bind: 'nombresTrabajador',
            type: 'text',
            label: 'Nombres del trabajador',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true
        },
        {
            bind: 'sueldoTrabajador',
            type: 'number',
            label: 'Sueldo del trabajador',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true
        },
        {
            bind: 'estadoTrabajador',
            type: 'option',
            label: 'Estado del trabajador',
            labelPosition: 'left',
            labelWidth: '30%',
            align: 'left',
            width: '250px',
            required: true,
            component: 'jqxDropDownList',
            options: [
                { label: 'Activo', value: '1' },
                { label: 'Inactivo', value: '0' },
            ]
        }
    ];

    var jqxformEditar = $('#jqxformEditar');

    jqxformEditar.jqxForm({
        template: templateEditar,
        theme: theme,
        padding: { left: 20, top: 10, right: 20, bottom: 10 }
    });

    $("#editarBtn").jqxButton(
        {
            width: '100',
            height: '25',
            value: 'Editar',
            theme: theme
        });

    $("#jqxwindowEditar").on('click', '#editarBtn', function () {

        var inputData = $('#jqxformEditar').jqxForm().val();
        var data = $.param(inputData);
       
        petHttp("PUT",urlEditar,inputData);
        
    });

    $("#cancelarEditarBtn").jqxButton(
        {
            width: '100',
            height: '25',
            value: 'Cancelar',
            theme: theme
        });

    $("#jqxwindowEditar").on('click', '#cancelarEditarBtn', function () {
        $('#jqxwindowEditar').jqxWindow('close');
    });


    $("#jqxNotificacionExitoEditar").jqxNotification({
        width: 'auto', position: 'top-right',
        opacity: 0.9, autoOpen: false, autoClose: false, template: 'success'
    });

    $("#jqxNotificacionErrorEditar").jqxNotification({
        width: "auto", position: "top-right",
        opacity: 0.9, autoOpen: false, autoClose: false, template: "error"
    });

    $("#jqxbuttonEliminar").jqxButton(
        {
            width: '200',
            height: '100',
            imgSrc: '../sismantenimiento-frontend/assets/icons/eliminar.png',
            imgWidth: 70,
            imgHeight: 70,
            imgPosition: 'center',
            textPosition: 'center',
            textImageRelation: 'imageBeforeText',
            theme: theme
        });

    $("#jqxbuttonEliminar").bind('click', function () {
        var selectedrowindex = $("#jqxgridPersonal").jqxGrid('getselectedrowindex');
        var rowscount = $("#jqxgridPersonal").jqxGrid('getdatainformation').rowscount;
        if (selectedrowindex >= 0) {
            var codigoTrabajador = $("#jqxgridPersonal").jqxGrid('getrowid', selectedrowindex);
            $("#jqxgridPersonal").jqxGrid('deleterow', codigoTrabajador);
        }

    });

    $("#jqxNotificacionExitoEliminar").jqxNotification({
        width: 'auto', position: 'top-right',
        opacity: 0.9, autoOpen: false, autoClose: false, template: 'success'
    });

    $("#jqxNotificacionErrorEliminar").jqxNotification({
        width: "auto", position: "top-right",
        opacity: 0.9, autoOpen: false, autoClose: false, template: "error"
    });

    $("#jqxbuttonExportarPDF").jqxButton(
        {
            width: '200',
            height: '100',
            imgSrc: '../sismantenimiento-frontend/assets/icons/exportar-pdf.png',
            imgWidth: 70,
            imgHeight: 70,
            imgPosition: 'center',
            textPosition: 'center',
            textImageRelation: 'imageBeforeText',
            theme: theme
        });

    $("#jqxbuttonExportarPDF").click(
        function () {
            $("#jqxgridPersonal").jqxGrid('exportdata', 'pdf', 'Personal');
        });

    $("#jqxbuttonExportarXLS").jqxButton(
        {
            width: '200',
            height: '100',
            imgSrc: '../sismantenimiento-frontend/assets/icons/exportar-xls.png',
            imgWidth: 70,
            imgHeight: 70,
            imgPosition: 'center',
            textPosition: 'center',
            textImageRelation: 'imageBeforeText',
            theme: theme
        });

    $("#jqxbuttonExportarXLS").click(
        function () {
            $("#jqxgridPersonal").jqxGrid('exportdata', 'xls', 'Personal');
        });

    $("#jqxbuttonImprimir").jqxButton(
        {
            width: '200',
            height: '100',
            imgSrc: '../sismantenimiento-frontend/assets/icons/imprimir.png',
            imgWidth: 80,
            imgHeight: 80,
            imgPosition: 'center',
            textPosition: 'center',
            textImageRelation: 'imageBeforeText',
            theme: theme
        });

    $("#jqxbuttonImprimir").click(function () {
        var gridContent = $("#jqxgridPersonal").jqxGrid('exportdata', 'html');
        var newWindow = window.open('', '', 'width=800, height=500'),
            document = newWindow.document.open(),
            pageContent =
                '<!DOCTYPE html>\n' +
                '<html>\n' +
                '<head>\n' +
                '<meta charset="utf-8" />\n' +
                '<title>Sistema Mantenimiento - Personal</title>\n' +
                '</head>\n' +
                '<body>\n' + gridContent + '\n</body>\n</html>';
        document.write(pageContent);
        document.close();
        newWindow.print();
    });
    
    // console.log(urlListar);
    // var url = "http://localhost:8080/sismantenimiento/sismantenimiento-backend/api/obtenerTrabajadores.php";
    var url = urlListar;

    var data = {};

    var source =
    {
        datatype: 'json',
        datafields: [
            { name: 'codigoTrabajador', type: 'int' },
            { name: 'dniTrabajador' },
            { name: 'apellidosTrabajador' },
            { name: 'nombresTrabajador' },
            { name: 'sueldoTrabajador', type: 'float' },
            { name: 'estadoTrabajador', type: 'int' },
        ],
        id: 'codigoTrabajador',
        url: url,
        cache: false,
        deleterow: function (codigoTrabajador, commit) {
            var data = $.param({ codigoTrabajador: codigoTrabajador });
            petHttp("POST",urlEliminar,data);
            
        },
    };

    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function (data, status, xhr) { },
        loadComplete: function (data) { },
        loadError: function (xhr, status, error) { }
    });

    $("#jqxgridPersonal").jqxGrid(
        {
            width: 1030,
            theme: theme,
            autoheight: true,
            source: dataAdapter,
            sortable: true,
            filterable: true,
            pageable: true,
            columns: [
                { text: 'CODIGO', datafield: 'codigoTrabajador', width: 80 },
                { text: 'DNI', datafield: 'dniTrabajador', width: 190 },
                { text: 'APELLIDOS', datafield: 'apellidosTrabajador', width: 190 },
                { text: 'NOMBRES', datafield: 'nombresTrabajador', width: 190 },
                { text: 'SUELDO', datafield: 'sueldoTrabajador', width: 190 },
                {
                    text: 'ESTADO', datafield: 'estadoTrabajador', width: 190, cellsRenderer: function (row, column, value) {
                        if (value == 1) {
                            return '<div class="text-center px-2"><input type="button" class="btn btn-warning btn-sm" value="Activo"/></div>';
                        } else {
                            return '<div class="text-center px-2"><input type="button" class="btn btn-danger btn-sm" value="Inactivo"/></div>';
                        }
                    }
                },
            ],
        });
});
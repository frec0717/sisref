
function petHttp(type,url,data){
    $.ajax({
        type: type,
        dataType: 'json',
        url: url,
        data: data,
        success: function (data, status, xhr, response) {
            $("#jqxwindowCrear").jqxWindow('close');
            $("#jqxgridPersonal").jqxGrid('updatebounddata');
            $("#jqxNotificacionExitoCrear").jqxNotification('open');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(inputData);
            if (jqXHR.status === 0) {
                alert('No conectado, verifique la red.');
            } else if (jqXHR.status == 404) {
                alert('Request no encontrado. [404]');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
            } else if (textStatus === 'parsererror') {
                alert('Requested JSON falló en el parseo.');
            } else if (textStatus === 'timeout') {
                alert('Error de fuera de tiempo.');
            } else if (textStatus === 'abort') {
                alert('Ajax request abortado.');
            } else {
                alert('Error irreconocible: ' + jqXHR.responseText);
            }
            $("#jqxNotificacionErrorCrear").jqxNotification('open');
        }
    });
}
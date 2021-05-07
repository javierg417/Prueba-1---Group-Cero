function ValidarFomurlarioPublicacion() {
    var resp = validarNombre();
    resp = validarNombre();
    if (resp == false) {
        return false;
    }

    resp = validarHistoria();
    if (resp == false) {
        return false;
    }

    resp = validarDescripcion();
    if (resp == false) {
        return false;
    }

    resp = validarPrecio();
    if (resp == false) {
        return false;
    }

    resp = validarTecnica();
    if (resp == false) {
        return false;
    }

    resp = validarImagen();
    if (resp == false) {
        return false;
    }

    return true;

}

function ValidarFormularioRegistro() {
    var resp = ValidarContraseña();
    if (resp == false) {
        return false;
    }

    resp = validarNombre();
    if (resp == false) {
        return false;
    }
    return true;
}

function ValidarFormularioContacto() {
    resp = validarNombre();
    if (resp == false) {
        return false;
    }

    resp = validarAsunto();
    if (resp == false) {
        return false;
    }

    resp = validarMensaje();
    if (resp == false) {
        return false;
    }
    return true;
}


function ValidarContraseña() {

    var contra1 = document.getElementById('contra1').value;
    var contra2 = document.getElementById('contra2').value;

    if (contra2 != contra1) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña',
            text: 'Las contraseñas no coinciden'
        });
        return false;
    }
}

function validarNombre() {
    var nombre = document.getElementById('txtNombre').value;
    if (nombre.trim().length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Nombre',
            text: 'El nombre no puede estar en blanco'
        });
        return false;
    }
    return true;

}

function validarAsunto() {
    var asunto = document.getElementById('txtasunto').value;
    if (asunto.trim().length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Asunto',
            text: 'El Asunto no puede estar en blanco'
        });
        return false;
    }
    return true;

}

function validarMensaje() {
    var asunto = document.getElementById('txtmensaje').value;
    if (asunto.trim().length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Mensaje',
            text: 'El Mensaje no puede estar en blanco'
        });
        return false;
    }
    return true;

}

function validarHistoria() {
    var asunto = document.getElementById('txthistoria').value;
    if (asunto.trim().length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Historia',
            text: 'La historia no puede estar en blanco'
        });
        return false;
    }
    return true;

}

function validarDescripcion() {
    var asunto = document.getElementById('txtdescripcion').value;
    if (asunto.trim().length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Descripcion',
            text: 'La descripcion no puede estar en blanco'
        });
        return false;
    }
    return true;
    
}

function validarPrecio() {
    var asunto = document.getElementById('txtprecio').value;
    if (asunto.trim().length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Precio',
            text: 'El precio no puede estar en blanco'
        });
        return false;
    }
    return true;
    
}

function validarTecnica() {
    var asunto = document.getElementById('txttecnica').value;
    if (asunto.trim().length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Tecnica Usada',
            text: 'La tecnica usada no puede estar en blanco'
        });
        return false;
    }
    return true;
    
}

function validarImagen() {
    var asunto = document.getElementById('formFile').value;
    if (asunto.trim().length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Imagen',
            text: 'Debe seleccionar una imagen'
        });
        return false;
    }
    return true;
    
}

$(document).ready(function () {
    $()
})



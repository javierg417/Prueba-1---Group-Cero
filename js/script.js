function mensaje(){
    alert('hola mundo')
}

function ValidarFormulario() {
    var resp = ValidarContraseña();
    if (resp == false) {
        return false;
    }
    return true;
    
}

function ValidarContraseña(){
    
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

    
    

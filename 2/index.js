// Obtener el campo de nombre y el span para mostrar el mensaje de validación
var nombreInput = document.getElementById('nombre');
var validNombre = document.getElementById('validNombre');

// Agregar un evento al campo de nombre para la validación
nombreInput.addEventListener('input', function() {
    var nombre = nombreInput.value.trim();  // Obtener el valor del campo de nombre y eliminar espacios en blanco al inicio y al final

    // Verificar si el valor del nombre no cumple con la expresión regular
    if (!/^[a-zA-Z\s    ]+$/.test(nombre)) {
        validNombre.textContent = 'Por favor, solo ingresar caracteres de tipo texto.';
    } else {
        validNombre.textContent = '';  // Vaciar el mensaje de error si la validación es exitosa
    }
});

// Función para leer los campos del formulario
function leerForms() {
    // Obtener el valor del nombre ingresado
    var nombre = nombreInput.value.trim();

    // Validar el nombre antes de guardar o procesar los datos
    if (!/^[a-zA-Z]+$/.test(nombre)) {
        validNombre.textContent = 'Por favor, solo ingresar caracteres de tipo texto.';
        return; // Detener la ejecución si no se cumple la validación
    }

    // Aquí puedes realizar las acciones adicionales que necesites con los datos del formulario
    // Por ejemplo, guardar los datos en una base de datos, mostrarlos en la tabla, etc.

    // Limpiar los campos después de guardar los datos
    nombreInput.value = '';
    validNombre.textContent = '';
}


// Obtener el elemento del correo por su ID
let correo = document.getElementById("correo");

// Función para validar el correo
function validarCorreo() {
    // Obtener el elemento para mostrar el mensaje de validación del correo
    let validCorreo = document.getElementById("validCorreo");

    // Expresión regular para validar el formato del correo
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // Verificar si el valor del correo no cumple con el formato de la expresión regular
    if (!regex.test(correo.value)) {
        validCorreo.style = "display:block"; // Mostrar el mensaje de validación
        validCorreo.innerText = "Por favor, introduce un correo electrónico válido";
        validCorreo.className = "text-danger"; // Establecer la clase CSS para el estilo de error

        correo.className = "form-control border-input-error"; // Establecer la clase CSS para el estilo de error en el campo de correo
        return false; // Devolver false para indicar que la validación falló
    } else {
        validCorreo.style = "display:none"; // Ocultar el mensaje de validación
        validCorreo.innerText = ""; // Vaciar el contenido del mensaje
        correo.className = "form-control border-input-ok"; // Establecer la clase CSS para el estilo de éxito en el campo de correo
        return true; // Devolver true para indicar que la validación fue exitosa
    }
}

// Agregar un evento al campo de correo para llamar a la función de validación cuando se ingrese algún valor
correo.addEventListener("input", validarCorreo);

// Obtener el campo de contrasena y el span para mostrar el mensaje de validación
var contrasenaInput = document.getElementById('contrasena');
var validcontrasena = document.getElementById('validcontrasena');

// Agregar un evento al campo de contrasena para la validación
contrasenaInput.addEventListener('input', function() {
    var contrasena = contrasenaInput.value;

    // Validar la contrasena
    var minLength = 8; // Longitud mínima requerida para la contrasena
    var hasNumber = /\d/.test(contrasena); // Verificar si la contrasena contiene al menos un número
    var hasUpperCase = /[A-Z]/.test(contrasena); // Verificar si la contrasena contiene al menos una letra mayúscula    
    var hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(contrasena);  // Verificar si la contrasena contiene al menos un carácter especial

    if (contrasena.length < minLength || !hasNumber || !hasUpperCase || !hasSpecialChar) {

        // Mostrar el mensaje de error si no se cumple la validación
        validcontrasena.textContent = 'La contraseña debe tener al menos 8 caracteres, un número, una letra mayúscula y un carácter especial.'; 
        validcontrasena.classList.add('error-message'); // Agregar clase CSS para resaltar el error
    } else {
        validcontrasena.textContent = ''; // Vaciar el mensaje de error si la validación es exitosa
        validcontrasena.classList.remove('error-message'); // Remover la clase CSS de error
    }
});

// Función para leer los campos del formulario
function leerForms() {
    // Obtener los valores ingresados en los campos
    var nombre = nombreInput.value.trim();
    var correo = correoInput.value.trim();
    var contrasena = contrasenaInput.value;

    // Validar los campos antes de guardar o procesar los datos
    // (Aquí puedes agregar la validación para el campo de nombre y correo si es necesario)

    var minLength = 8;
    var hasNumber = /\d/.test(contrasena);
    var hasUpperCase = /[A-Z]/.test(contrasena);
    var hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(contrasena);

    if (contrasena.length < minLength || !hasNumber || !hasUpperCase || !hasSpecialChar) {
        validcontrasena.textContent = 'La contrasena debe tener al menos 8 caracteres, un número, una letra mayúscula y un carácter especial.';
        validcontrasena.classList.add('error-message');
        return; // Detener la ejecución si la validación falla
    }

    // Aquí puedes realizar las acciones adicionales que necesites con los datos del formulario
    // Por ejemplo, guardar los datos en una base de datos, mostrarlos en la tabla, etc.

    // Limpiar los campos después de guardar los datos
    nombreInput.value = '';
    correoInput.value = '';
    contrasenaInput.value = '';
    validcontrasena.textContent = '';
    validcontrasena.classList.remove('error-message');
}
// Obtener el campo de contrasena, el span de validación y el checkbox de mostrar contrasena
var contrasenaInput = document.getElementById('contrasena');
var validcontrasena = document.getElementById('validcontrasena');
var mostrarcontrasenaCheckbox = document.getElementById('mostrarcontrasena');

// Agregar un evento al checkbox de mostrar contrasena
mostrarcontrasenaCheckbox.addEventListener('change', function() {
    if (mostrarcontrasenaCheckbox.checked) {
        contrasenaInput.type = 'text'; // Mostrar la contrasena como texto
    } else {
        contrasenaInput.type = 'password'; // Ocultar la contrasena como un campo de contrasena
    }
});

// Agregar un evento al campo de contrasena para la validación
contrasenaInput.addEventListener('input', function() {
    var contrasena = contrasenaInput.value;

    // Validar la contrasena
    var minLength = 8;
    var hasNumber = /\d/.test(contrasena);
    var hasUpperCase = /[A-Z]/.test(contrasena);
    var hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(contrasena);

    if (contrasena.length < minLength || !hasNumber || !hasUpperCase || !hasSpecialChar) {
        validcontrasena.textContent = 'La contrasena debe tener al menos 8 caracteres, un número, una letra mayúscula y un carácter especial.';
        validcontrasena.classList.add('error-message');
    } else {
        validcontrasena.textContent = '';
        validcontrasena.classList.remove('error-message');
    }
});

// Obtener los elementos del formulario y la tabla
var nombreInput = document.getElementById('nombre');
var correoInput = document.getElementById('correo');
var tablaBody = document.getElementById('datosBody');

// Función para agregar un registro a la tabla
function agregarRegistro(nombre, correo) {
    // Crear una nueva fila y celdas
    var fila = document.createElement('tr');
    var celdaNombre = document.createElement('td');
    var celdaCorreo = document.createElement('td');
    var celdaOpcion = document.createElement('td');
    
    // Agregar los valores del nombre y correo a las celdas
    celdaNombre.textContent = nombre;
    celdaCorreo.textContent = correo;
    
    // Crear un botón de eliminar
    var botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.classList.add('btn', 'btn-danger');
    
    // Agregar un evento al botón de eliminar para eliminar la fila correspondiente
    botonEliminar.addEventListener('click', function() {
        fila.remove(); // Eliminar la fila al hacer clic en el botón de eliminar
    });
    
    // Agregar la celda del botón de eliminar a la fila
    celdaOpcion.appendChild(botonEliminar);
    
    // Agregar las celdas a la fila
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaCorreo);
    fila.appendChild(celdaOpcion);
    
    // Agregar la fila al cuerpo de la tabla
    tablaBody.appendChild(fila);
}

// Función para leer los campos del formulario y agregar el registro a la tabla
function leerForms() {
    var nombre = nombreInput.value.trim();
    var correo = correoInput.value.trim();
    var contrasena = contrasenaInput.value;
  
    // Validar los campos (puedes agregar la validación necesaria aquí)
    var nombreValido = /^[a-zA-Z\s]+$/.test(nombre);
    var correoValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo);
    var contrasenaValida = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[\w!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/.test(contrasena);
  
    if (!nombreValido) {
      validNombre.textContent = 'Por favor, solo ingresar caracteres de tipo texto.';
      return;
    } else {
      validNombre.textContent = '';
    }
  
    if (!correoValido) {
      validCorreo.style.display = 'block';
      validCorreo.innerText = 'Por favor, introduce un correo electrónico válido';
      validCorreo.className = 'text-danger';
      return;
    } else {
      validCorreo.style.display = 'none';
      validCorreo.innerText = '';
    }
  
    if (!contrasenaValida) {
      validcontrasena.textContent = 'La contrasena debe tener al menos 8 caracteres, un número, una letra mayúscula y un carácter especial.';
      validcontrasena.classList.add('error-message');
      return;
    } else {
      validcontrasena.textContent = '';
      validcontrasena.classList.remove('error-message');
    }
  
    // Agregar el registro a la tabla solo si los campos son válidos
    agregarRegistro(nombre, correo);
  
    // Limpiar los campos después de guardar los datos
    nombreInput.value = '';
    correoInput.value = '';
    contrasenaInput.value = '';
  }
      
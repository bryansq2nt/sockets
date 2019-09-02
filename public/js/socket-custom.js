var socket = io();


// Ecuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Ecuchar informacion
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});


//Enviar infromacion

socket.emit('enviarMensaje', {
    usuario: 'Bryan Murgas',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Ecuchar informacion

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});
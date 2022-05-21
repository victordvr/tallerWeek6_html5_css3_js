const btnEnviar = () => {
    var nombre = document.querySelector('#nombre');
    var correo = document.querySelector('#correo');
    var asunto = document.querySelector('#asunto');
    var mensaje = document.querySelector('#mensaje');

    var formulario = new Map();
    formulario.set('nombre', nombre.value);
    formulario.set('correo', correo.value);
    formulario.set('asunto', asunto.value);
    formulario.set('mensaje', mensaje.value);

    var datosFaltantes = [];
    var i = 0;
    for (let [key, value] of formulario){
        if(value.length === 0 || value.trim() == ""){
            datosFaltantes[i] = key;
            i++;
        }
    }
    if (datosFaltantes.length == 0){
        for(let [key, value] of formulario){
            console.log(key + ": " + value);
        }
        btnReset();
        alert("Datos registrados");
    }else{
        alert("Por favor ingrese los datos faltantes: " + datosFaltantes)
    }
}
const btnReset = () => {
    nombre.value = "";
    correo.value = "";
    asunto.value = "";
    mensaje.value = "";
}
